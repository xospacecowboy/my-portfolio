import { NextResponse } from 'next/server'
import { Client } from '@notionhq/client'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { NotionToMarkdown } from 'notion-to-md'

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

const n2m = new NotionToMarkdown({ notionClient: notion })

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
    return NextResponse.json(
      { error: 'Notion credentials not found' },
      { status: 500 }
    )
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: params.slug,
        },
      },
    })

    const page = response.results[0] as PageObjectResponse
    if (!page) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    // Get page content
    const mdblocks = await n2m.pageToMarkdown(page.id)
    const mdString = n2m.toMarkdownString(mdblocks)

    const properties = page.properties as any
    const post = {
      id: page.id,
      title: properties.Title?.title?.[0]?.plain_text || '',
      date: properties.Date?.date?.start || '',
      slug: properties.Slug?.rich_text?.[0]?.plain_text || '',
      excerpt: properties.Excerpt?.rich_text?.[0]?.plain_text || '',
      category: properties.Category?.select?.name || '',
      content: mdString.parent // This is the string we want
    }

    return NextResponse.json(post)
  } catch (error: any) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch post' },
      { status: 500 }
    )
  }
}

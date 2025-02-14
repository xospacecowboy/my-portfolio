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
  console.log('Fetching blog post with slug:', params.slug)

  if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
    console.error('Missing Notion credentials')
    return NextResponse.json(
      { error: 'Notion credentials not found' },
      { status: 500 }
    )
  }

  try {
    console.log('Querying Notion database for post...')
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: params.slug,
        },
      },
    })

    console.log('Found results:', response.results.length)
    
    const page = response.results[0] as PageObjectResponse
    if (!page) {
      console.log('No post found with slug:', params.slug)
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    console.log('Converting Notion page to markdown...')
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
      content: mdString.parent
    }

    console.log('Successfully processed post:', post.title)
    return NextResponse.json(post)
  } catch (error: any) {
    console.error('Error in [slug] route:', error)
    
    // Check for specific Notion API errors
    if (error.code === 'notionhq_client_response_error') {
      console.error('Notion API error:', error.message)
      return NextResponse.json(
        { error: 'Failed to fetch post from Notion' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: error.message || 'Failed to fetch post' },
      { status: 500 }
    )
  }
}

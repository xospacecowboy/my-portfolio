import { NextResponse } from 'next/server'
import { Client } from '@notionhq/client'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

export async function GET() {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
    return NextResponse.json({ error: 'Notion credentials not found' }, { status: 500 })
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      sorts: [{ property: 'Date', direction: 'descending' }],
    })
    
    const posts = response.results
      .filter((page): page is PageObjectResponse => 'properties' in page)
      .map(page => {
        const properties = page.properties as any
        return {
          id: page.id,
          title: properties.Title?.title?.[0]?.plain_text || '',
          date: properties.Date?.date?.start || '',
          slug: properties.Slug?.rich_text?.[0]?.plain_text || '',
          excerpt: properties.Excerpt?.rich_text?.[0]?.plain_text || '',
          category: properties.Category?.select?.name || '',
        }
      })

    return NextResponse.json(posts)
  } catch (error: any) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

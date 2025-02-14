import { NextResponse } from 'next/server'
import { Client } from '@notionhq/client'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

export async function GET() {
  console.log('Fetching all blog posts...')

  if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
    console.error('Missing Notion credentials')
    return NextResponse.json({ error: 'Notion credentials not found' }, { status: 500 })
  }

  try {
    console.log('Querying Notion database...')
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      sorts: [{ property: 'Date', direction: 'descending' }],
    })
    
    console.log('Found posts:', response.results.length)
    
    const posts = response.results
      .filter((page): page is PageObjectResponse => 'properties' in page)
      .map(page => {
        const properties = page.properties as any
        const post = {
          id: page.id,
          title: properties.Title?.title?.[0]?.plain_text || '',
          date: properties.Date?.date?.start || '',
          slug: properties.Slug?.rich_text?.[0]?.plain_text || '',
          excerpt: properties.Excerpt?.rich_text?.[0]?.plain_text || '',
          category: properties.Category?.select?.name || '',
        }
        console.log('Processed post:', post.title)
        return post
      })

    console.log('Successfully processed all posts')
    return NextResponse.json(posts)
  } catch (error: any) {
    console.error('Error in /api/posts route:', error)
    
    // Check for specific Notion API errors
    if (error.code === 'notionhq_client_response_error') {
      console.error('Notion API error:', error.message)
      return NextResponse.json(
        { error: 'Failed to fetch posts from Notion' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: error.message || 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

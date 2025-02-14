// Types
export interface BlogPost {
  id?: string
  title: string
  date: string
  slug: string
  excerpt: string
  category: string
  content?: string
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log('Fetching posts from API...')
    const response = await fetch('/api/posts')
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }

    const posts = await response.json()
    console.log('Posts fetched successfully:', posts.length)
    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

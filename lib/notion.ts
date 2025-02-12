// Fallback data
export const staticBlogPosts = [
  {
    title: "The Art of Creative Storytelling in Social Media",
    date: "2023-05-15",
    slug: "creative-storytelling",
    excerpt: "Exploring how narrative techniques can elevate your social media content...",
    category: "Social Media",
  },
  {
    title: "Maximizing Impact with Influencer Collaborations",
    date: "2023-06-02",
    slug: "influencer-collaborations",
    excerpt: "Tips and strategies for successful partnerships with content creators...",
    category: "Influencer Marketing",
  },
  {
    title: "Emerging Trends in Digital Marketing for 2023",
    date: "2023-06-20",
    slug: "digital-marketing-trends-2023",
    excerpt: "A look at the latest innovations shaping the digital marketing landscape...",
    category: "Digital Marketing",
  },
  {
    title: "Building Authentic Brand Voices on Social Platforms",
    date: "2023-07-05",
    slug: "authentic-brand-voices",
    excerpt: "Strategies for developing a genuine and resonant brand personality online...",
    category: "Branding",
  },
]

// Types
export interface BlogPost {
  id?: string
  title: string
  date: string
  slug: string
  excerpt: string
  category: string
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
    return staticBlogPosts
  }
}

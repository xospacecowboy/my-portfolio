"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { BlogPost, staticBlogPosts } from '@/lib/notion'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'

interface FullBlogPost extends BlogPost {
  content?: string
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<FullBlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // First try to fetch from API
    fetch(`/api/posts/${params.slug}`)
      .then(res => res.json())
      .then(post => {
        if (post.error) {
          throw new Error(post.error)
        }
        setPost(post)
      })
      .catch(() => {
        // If API fails, try static posts
        const staticPost = staticBlogPosts.find(p => p.slug === params.slug)
        if (staticPost) {
          setPost(staticPost)
        }
      })
      .finally(() => setLoading(false))
  }, [params.slug])

  if (loading) {
    return (
      <div className="bg-deep-grey text-white min-h-screen">
        <Header />
        <main className="container mx-auto px-6 pt-32">
          <div className="text-center">Loading...</div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="bg-deep-grey text-white min-h-screen">
        <Header />
        <main className="container mx-auto px-6 pt-32">
          <div className="text-center">Post not found</div>
        </main>
        <Footer />
      </div>
    )
  }

  const components: Components = {
    a: props => (
      <a 
        {...props} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-pastel-blue hover:text-pastel-pink transition-colors"
      />
    ),
    code: ({ className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '')
      return match ? (
        <pre className="bg-white/[0.02] p-4 rounded-lg overflow-x-auto">
          <code {...props} className={className}>
            {children}
          </code>
        </pre>
      ) : (
        <code {...props} className="bg-white/[0.02] px-1.5 py-0.5 rounded text-pastel-pink">
          {children}
        </code>
      )
    },
    p: props => (
      <div {...props} className="mb-4" />
    )
  }

  return (
    <div className="bg-deep-grey text-white min-h-screen">
      <Header />

      <main className="container mx-auto px-6 pt-32">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Back Link */}
          <div className="mb-8">
            <Link href="/blog" className="inline-block text-pastel-blue hover:text-pastel-pink transition-colors font-jetbrains-mono">
              ← Back to Blog
            </Link>
          </div>

          {/* Category */}
          <div className="text-sm font-bold text-pastel-green mb-4 font-jetbrains-mono">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink to-pastel-blue">
            {post.title}
          </h1>

          {/* Date */}
          <time className="text-sm text-white/60 font-jetbrains-mono mb-8 block" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>

          {/* Content */}
          <div className="prose prose-invert max-w-none font-jetbrains-mono">
            {post.content ? (
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                className="blog-content"
                components={components}
              >
                {post.content}
              </ReactMarkdown>
            ) : (
              <div className="text-lg text-white/80 leading-relaxed">
                {post.excerpt}
              </div>
            )}
          </div>
        </motion.article>
      </main>

      <Footer />
    </div>
  )
}

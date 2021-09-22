import { FC } from 'react'
import { User } from '@geist-ui/react'

import Widget from '@/components/Widgets'
import PostMeta from '@/components/PostData/PostMeta'
import PostFooter from '@/components/PostData/PostFooter'
import HeadingImage from '@/components/HeadingImage'

import { Author } from '@/lib/types'

type ArticleProps = {
  headingImage?: string
  title: string
  timestamp: number
  authors: Author[]
  content: string
  tags: string[]
  category: string
  pageType?: 'post' | 'page'
}
const Article: FC<ArticleProps> = ({
  headingImage,
  title,
  timestamp,
  authors,
  content,
  tags,
  category,
  pageType = 'post'
}: ArticleProps) => {
  const renderAuthors = () => (
    <div className="text-center mt-6 border-b">
      {authors.map((author) => (
        <User
          className="mb-6"
          name={author.name}
          src={author.avatar}
          text={author.bio}
          key={author.name}
        />
      ))}
    </div>
  )

  return (
    <>
      <PostMeta
        title={title}
        timestamp={timestamp}
      />
      <Widget>
        <article>
          {headingImage && (
            <HeadingImage
              hoverable={false}
              headingImage={headingImage}
              title={title}
            />
          )}
          {pageType === 'post' && renderAuthors() }
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
        <PostFooter
          tags={tags}
          category={category}
        />
      </Widget>
    </>
  )
}

Article.displayName = 'DolanArticleLayout'
export default Article

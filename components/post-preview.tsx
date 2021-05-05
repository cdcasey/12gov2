import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

type PostProps = {
  key: string
  title: string
  coverImage: string
  date: string
  slug: string
  excerpt: string
}

export default function PostPreview({ title, coverImage, date, excerpt, slug }: PostProps) {
  console.log({ coverImage })

  return (
    <div>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <div className="relative cursor-pointer text-otgowhite hover:text-otgoorange-light duration-200">
          <div>
            <CoverImage title={title} coverImage={coverImage} slug={slug} />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-otgopurple-dark bg-opacity-75 flex flex-col justify-center items-center w-full h-1/2">
            <h3 className="text-3xl leading-snug">
              <a className="hover:none" dangerouslySetInnerHTML={{ __html: title }}></a>
            </h3>

            <div className="text-lg">
              <Date dateString={date} />
            </div>
          </div>
        </div>
      </Link>

      <div className="text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  )
}

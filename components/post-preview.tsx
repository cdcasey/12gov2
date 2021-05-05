import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

type CoverImage = {
  sourceUrl: string
}

type PostProps = {
  key: string
  title: string
  coverImage: CoverImage
  date: string
  slug: string
  excerpt: string
}

export default function PostPreview({ title, coverImage, date, excerpt, slug }: PostProps) {
  console.log({ coverImage })

  return (
    <div>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <div
          className="relative cursor-pointer text-otgowhite hover:text-otgoorange-light duration-200 h-preview bg-cover"
          style={{ backgroundImage: `url('${coverImage?.sourceUrl}')` }}
        >
          {/* <div>
            <CoverImage title={title} coverImage={coverImage} slug={slug} />
          </div> */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-otgopurple-dark bg-opacity-75 flex flex-col justify-center items-center w-full h-1/2 text-center">
            <h3 className="text-xl leading-snug">
              <a className="hover:none" dangerouslySetInnerHTML={{ __html: title }}></a>
            </h3>

            <div className="text-sm">
              <Date dateString={date} />
            </div>
          </div>
        </div>
      </Link>

      <div className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  )
}

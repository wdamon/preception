import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import {borderColorByType, urlRootByType} from '../lib/constants'

export default function PostCard({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  type
}) {
  return (
    <div className={`mb-5 border-solid border-4 ${type === 'blog' ? 'border-saffron': 'border-zen-green'}`}>
      <div >
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={135}
          width={278}
          type={type}
        />
      </div>
      <div className="p-5 ">
      <h3 className="text-3xl  leading-snug">
        <Link as={`/${urlRootByType[type]}/${slug}`} href={`/${urlRootByType[type]}/[slug]`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
     <span className= {`inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white ${type === 'blog' ? 'bg-saffron': 'bg-zen-green'} rounded-full mb-3`}>
        {type}
     </span>

      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  )
}
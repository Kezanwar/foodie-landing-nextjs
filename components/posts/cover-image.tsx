import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug?: string;
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  const image = (
    <Image
      width={1000}
      height={200}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }} // optional
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl}
      className={cn('rounded-xl ', {
        'hover:shadow-medium transition-shadow duration-200': slug
      })}
    />
  );
  return (
    <div className="h-[280px] lg:h-[400px]">
      {slug ? (
        <Link href={`/news/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

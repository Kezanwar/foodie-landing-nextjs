import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import Categories from './categories';
import SectionSeparator from './section-separator';
import ReadTime from './read-time';
import Tags from './tags';

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
  restaurant_review_fields,
  tags
}) {
  return (
    <>
      <div className="mt-4 mb-10 md:mb-12  ">
        <CoverImage title={title} coverImage={coverImage} />
      </div>

      <div className="max-w-4xl mx-auto">
        <PostTitle>{title}</PostTitle>
        <div className="mb-6 flex gap-3 items-center text-[14px] font-light">
          <Avatar author={author} /> <div className="h-4 w-[1px] bg-gray-200" />{' '}
          <Date dateString={date} />
        </div>
        <Tags tags={tags} />
        <SectionSeparator />
        <ReadTime time={restaurant_review_fields.readTime} />
      </div>
    </>
  );
}

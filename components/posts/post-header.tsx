import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import Categories from './categories';

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories
}) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mt-4 lg:mt-12 ">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-3xl mx-auto">
        <PostTitle>{title}</PostTitle>
        <div className="mb-3">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-sm font-light">
          Posted <Date dateString={date} />
        </div>
        <Categories categories={categories} />
      </div>
    </div>
  );
}

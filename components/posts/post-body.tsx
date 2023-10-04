import { Spacer } from 'components/spacer';
import styles from './post-body.module.css';
import SectionSeparator from './section-separator';

export default function PostBody({ content }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Spacer sp={12} />
      <SectionSeparator />
    </div>
  );
}

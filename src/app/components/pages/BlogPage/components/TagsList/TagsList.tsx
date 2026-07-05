import styles from './TagsList.module.css';
import { TagsListProps } from './TagsList.types';

export default function TagsList({}: TagsListProps) {
  return (
    <div className={styles.wrapper}>
      TagsList
    </div>
  );
}
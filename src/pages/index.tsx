import styles from './index.less';
import { Link } from '@sl-theia/vis';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div className={styles.goWrap}>
        <Link to="/~docs">查看文档</Link>
      </div>
      <div className={styles.goWrap}>
        <Link to="/PageA">查看PageA</Link>
      </div>
    </div>
  );
}

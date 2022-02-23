import styles from './index.less';
import { data } from './data/index';

const PageALeft = () => {
  return (
    <div className={styles.pageWrap}>
      <h1>PageA Left</h1>
      <ul>
        {data.map((e) => (
          <li key={e.title}>{e.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default PageALeft;

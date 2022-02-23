import styles from './index.less';
import { useEffect, useState } from 'react';
import axios from '@/axios';

const PageARight = () => {
  const [data, setData] = useState<{ title: string }[]>([]);
  useEffect(() => {
    axios.get('/users').then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className={styles.pageWrap}>
      <h1>PageA Right</h1>
      <ul>
        {data.map((e) => (
          <li key={e.title}>{e.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default PageARight;

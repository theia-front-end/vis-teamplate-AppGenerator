import styles from './index.less';
import fullScreen from '@sl-theia/full-screen';
import Left from './left';
import Right from './right';
const style = {
  width: 1920,
  height: 1080,
};
const PageA = () => {
  return (
    <div className={styles.pageWrap}>
      <h1>PageA title</h1>
      <div className={styles.leftWrap}>
        <Left />
      </div>
      <div className={styles.rightWrap}>
        <Right />
      </div>
    </div>
  );
};
export default fullScreen({ style })(PageA);

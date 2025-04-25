/*
 * @Author: 曲洪利 quhongli999@163.com
 * @Date: 2025-04-22 13:44:49
 * @LastEditors: 曲洪利 quhongli999@163.com
 * @LastEditTime: 2025-04-22 14:03:36
 * @FilePath: /ai/src/components/PageLayout/index.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import BackButton from '../BackButton';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  onBack?: () => void;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, onBack }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div className={styles.backButton} onClick={handleBack}>
          <BackButton />
        </div>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout; 
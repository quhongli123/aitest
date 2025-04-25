/*
 * @Author: 曲洪利 quhongli999@163.com
 * @Date: 2025-04-18 19:11:22
 * @LastEditors: 曲洪利 quhongli999@163.com
 * @LastEditTime: 2025-04-22 14:03:05
 * @FilePath: /ai/src/pages/VoiceClone/index.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import PageLayout from '@/components/PageLayout';


const IframeContainer = styled(Box)({
  width: '97%',
  height: 'calc(100vh - 100px)',
  background:'red',
  backgroundColor: 'red',
  borderRadius: '16px',
  margin: '20px auto 0px auto',
  overflow: 'hidden',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  position: 'relative',
  '& iframe': {
    width: '100%',
    height: '100%',
      

    border: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
  }
});

const VoiceClone: React.FC = () => {
  return (
    <PageLayout title="语音克隆工坊">
      <IframeContainer>
          <iframe
            src="https://bf80d84e445b6cc97a.gradio.live/"
            title="语音克隆工坊"
            allow="camera;microphone"
            loading="lazy"
          />
        </IframeContainer>
    </PageLayout>
  );
};

export default VoiceClone; 
import FileUpload from '@/components/FileUpload';
import StepWrapper from '@/components/StepWrapper';
import { useInput } from '@/hooks/useInput';
import MainLayout from '@/layouts/MainLayout';
import { Button, Grid2, TextField } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Create = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');
  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(prev => prev + 1);
    } else {
      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('artist', artist.value);
      formData.append('text', text.value);
      if (picture) {
        formData.append('picture', picture);
      }
      if (audio) {
        formData.append('audio', audio);
      }
      axios
        .post('http://localhost:5000/tracks', formData)
        .then(resp => router.push('/tracks'))
        .catch(e => {
          console.log(e);
        });
    }
  };
  const back = () => {
    setActiveStep(prev => prev - 1);
  };
  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid2 container direction={'column'} style={{ padding: 20 }}>
            <TextField
              {...name}
              style={{ marginTop: 10 }}
              label="Название трека"
            />
            <TextField
              {...artist}
              style={{ marginTop: 10 }}
              label="Имя исполнителя"
            />
            <TextField
              {...text}
              style={{ marginTop: 10 }}
              label="Слова к треку"
              multiline
              rows={3}
            />
          </Grid2>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Загрузите обложку</Button>
          </FileUpload>
        )}

        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Загрузите аудио</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid2 container justifyContent={'space-between'}>
        <Button disabled={activeStep === 0} onClick={back}>
          Назад
        </Button>
        <Button onClick={next}>Далее</Button>
      </Grid2>
    </MainLayout>
  );
};

export default Create;

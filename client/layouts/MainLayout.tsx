import Navbar from '@/components/Navbar';
import Player from '@/components/Player';
import { Container } from '@mui/material';
import Head from 'next/head';
import { ReactNode } from 'react';

type MainLayoutProps = {
  title?: string;
  children: ReactNode;
  description?: string;
  keywords?: string;
};

const MainLayout = ({
  children,
  title,
  description,
  keywords,
}: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || 'Музыкальная площадка'}</title>
        <meta
          name="description"
          content={
            'Музыкальная площадка. Здесь каждый может оставить свой трек и стать знаменитым' +
            description
          }
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || 'Музыка, треки, артисты'} />
      </Head>
      <Navbar />
      <Container style={{ margin: '0 auto', paddingTop: 100 }}>
        {children}
      </Container>
      <Player />
    </>
  );
};

export default MainLayout;

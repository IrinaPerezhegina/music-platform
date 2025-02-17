import Navbar from '@/components/Navbar';
import Player from '@/components/Player';
import { Container } from '@mui/material';
import Head from 'next/head';
import { ReactNode } from 'react';

type MainLayoutProps = {
  title?: string;
  children: ReactNode;
};

const MainLayout = ({ children, title }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || 'Музыкальная площадка'}</title>
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

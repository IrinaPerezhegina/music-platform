import Navbar from '@/components/Navbar';
import Player from '@/components/Player';
import { Container } from '@mui/material';
import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <Container style={{ margin: '0 auto', paddingTop: 100 }}>
        {children}
      </Container>
      <Player />
    </>
  );
};

export default MainLayout;

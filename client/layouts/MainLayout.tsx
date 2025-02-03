import Navbar from '@/components/Navbar'
import { Container } from '@mui/material'
import { ReactNode } from 'react'

type MainLayoutProps = {
  children: ReactNode
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <Container style={{ margin: '0 auto', paddingTop:100 }}>{children}</Container>
    </>
  )
}

export default MainLayout

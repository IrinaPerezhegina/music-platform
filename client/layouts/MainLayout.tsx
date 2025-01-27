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
      <Container style={{ margin: '90px 0' }}>{children}</Container>
    </>
  )
}
// 1:05:30
export default MainLayout

import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Header from '../components/Header'
import Dabba from '../components/Dabba'
import Services from '../components/Services'
import BlogSection from '../components/BlogSection'
import MyForm from '../components/Form'
export default function Home() {
  return (
  
    <div className=''>
      <div className='w-full h-[80vh]'>

      <Header></Header>
      </div>
      <Dabba></Dabba>
      <Services></Services>
      <BlogSection cmd={"pagination[start]=0&pagination=2"} featured={true}></BlogSection>
      <MyForm></MyForm>
    </div>
  )
}

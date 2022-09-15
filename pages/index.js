import Head from 'next/head'
import Image from 'next/image'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Header from '../components/Header'
import Dabba from '../components/Dabba'
import Services from '../components/Services'
import BlogSection from '../components/BlogSection'
import MyForm from '../components/Form'
import FeaturesOne from '../components/FeaturesOne'
import Waves from '../components/Waves'
import { useRef } from 'react';
import Customer from '../components/Customer';
import MemoRanda from '../components/MemoRanda';
import Imagert from '../components/Imagert';
export default function Home() {
  const tawkMessengerRef = useRef();
  

  const handleMinimize = () => {
      tawkMessengerRef.current.minimize();
  };

  return (
  
    <div className=''>
      <div className='w-full h-[100vh]'>

      <Header></Header>
      </div>
      <div className=' mt-40'>

      <Imagert></Imagert>
      </div>
     <div className='mt-40'>

      <Customer></Customer>
     </div>
      <Dabba></Dabba>
      <div className='mt-40'>

      <MemoRanda></MemoRanda>
      </div>
      <BlogSection cmd={"pagination[start]=0&pagination=2"} featured={true}></BlogSection>
      <Waves></Waves>
      <Services></Services>
      <FeaturesOne></FeaturesOne>
      <MyForm></MyForm>
      <div className="App">
            <TawkMessengerReact
                propertyId="6320e1e437898912e968f6b2"
                widgetId="1gcs74r7j" 
                
                />
        </div>
        
    </div>
  )
}

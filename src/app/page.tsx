'use client';
import img1 from '../../public/img.png';
import { useEffect } from 'react'
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import About from './(Auth)/about/page';
import Projects from './(Auth)/projects/page';
import Skills from './(Auth)/skills/page';
import Head  from 'next/head';
import Script from 'next/script';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
export default function Home(){
  useEffect(() => { AOS.init({ duration: 500, 
    });
    }, []);
  return ( 
    <div>
      <Head> <title>Izma Portfolio</title> <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> </Head>
    {/* home start */}
    <div className="home-div" data-aos="fade-up">
      <div className="div-home-content">
        <h1 data-aos="fade-up">Hey, I&apos;m <span className='home-myname'>Izma</span> </h1>
        <h2 data-aos="fade-up">Full Stack Devolper</h2>
        <p data-aos="fade-up">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque autem, quod quidem delectus suscipit asperiores quibusdam ad quia minima mollitia expedita blan asumenda fugat doloribs animi posimus illo dolorem, tempora ullam dolore Nesiunt, sequi.</p>
        <div data-aos="fade-up">
          <div>
            <button className='home-btn'>View My Work</button>
          </div>
          <div>
            <Link href={'https://www.linkedin.com/in/izma-ikhlaque-42a54329b/'}>
            <FaLinkedin className='home-icon-linkedin' size={22} color='#c7b1e0'/>
            </Link>
            <Link href={'https://github.com/IzmaRao'}>
            <FaGithub className='home-icon-linkedin'   size={22} color='#c7b1e0'/>
            </Link>
          </div>
        </div>
      </div>
      <div className='div-home-img'>
        <Image data-aos="fade-up" className='home-my-img' alt="my img" src={img1} height={320} width={290} />
      </div>
  </div>
  {/* home end */}

  {/* about start */}
  <About/>
  {/* about end */}

  {/* projects start */}
  <Projects/>

  {/* projects end */}

  {/* skills start */}
  <Skills/>
  {/* skills end */}
  <Script id='scri1' src="https://unpkg.com/aos@next/dist/aos.css"></Script>
  <Script id='scri2'>AOS.init()</Script>

  </div>
  )
}

// #341666
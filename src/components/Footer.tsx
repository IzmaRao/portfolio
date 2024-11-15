import Link from 'next/link';
import React from 'react'
import { FaLinkedin,FaGithub } from 'react-icons/fa';
function Footer() {
  return (
    <div data-aos="fade-up" id="footerr" className="footer">
        <h2 data-aos="fade-up">Contact</h2>
        <p data-aos="fade-up">
        I&apos;m currently looking to join a cross-functional team that values improving people&apos;s lives
        through accessible design. or have a project in mind? Let&apos;s connect.
        </p>
        <p data-aos="fade-up">izmarao99@gmail.com</p>
        <div className='icons'>
        <Link href={'https://www.linkedin.com/in/izma-ikhlaque-42a54329b/'}>
            <FaLinkedin className='icon-one' size={24}/>
        </Link>
        <Link href={'https://github.com/IzmaRao'}>
            <FaGithub className='icon-two' size={24}/>
        </Link>
        </div>
    </div>
  )
}

export default Footer;
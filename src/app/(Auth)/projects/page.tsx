import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import p1 from '../../../../public/p1.png';
import p2 from '../../../../public/p2.png';
import p3 from '../../../../public/p3.png';
import p5 from '../../../../public/p5.png';
import ecommerce from '../../../../public/ecommerce.png';


function projects() {
  return (
    <div data-aos="fade-up" className='project-div'>

    <div className='project-head-div'>
    <h1 data-aos="fade-up" className='project-heading'>Projects</h1>
    </div>

    <div className='projects'>
      <div data-aos="fade-up" className='project-one'>
        <div data-aos="fade-up" className='projects-content-one'>
        <h3 className='project-one-h'>GIAIC Wbsite Clone Project</h3>
        <div className='project-one-content-div'> 
        <p className='project-one-p'>Developed a responsive clone of the Governor of Sindh&apos;s website using Tailwind CSS and TypeScript, focusing on clean design and cross-device functionality</p>
          <div>
          <Link href='https://giaic-website-three.vercel.app/'>
            <button className='project-btn'>View My Project</button>
          </Link>
          </div>
        </div>
        </div>
        <div>
        <Image data-aos="fade-up" className='project-one-img' alt='img' src={p1}/>
        </div>
      </div>

      <div data-aos="fade-up" className='project-two'>
      <div>
          <Image data-aos="fade-up" className='project-two-img' alt='img' src={p2}/>
        </div>
        <div data-aos="fade-up" className='projects-content-two'>
        <h3 className='project-two-h'>Storm Safe Website Project</h3>
        <div className='project-two-content-div'>
        <p className='project-two-p'>Created a comprehensive hurricane information website with responsive design. Features include real-time updates, safety tips, historical data, and emergency resources.</p>
          <div>
          <Link href='https://storm-safe-site.vercel.app/'>
          <button className='project-btn'>View My Project</button>
          </Link>
          </div>
        </div>
        </div>
      </div>

      <div data-aos="fade-up" className='project-one'>
      <div className='projects-content-one'>
        <h3 className='project-one-h'>Editable Resume Generator Project</h3>
        <div className='project-one-content-div'>  
        <p className='project-one-p'>Developed a dynamic resume builder using HTML, CSS, and TypeScript, featuring a user-friendly interface for real-time resume generation based on user input.</p>
          <div>
          <Link href='https://editable-resume-ten-phi.vercel.app/'>
          <button className='project-btn'>View My Project</button>
          </Link>
          </div>
        </div>
        </div>
        <div>
        <Image data-aos="fade-up" className='project-one-img' alt='img' src={p3}/>
        </div>
      </div>

      <div data-aos="fade-up" className='project-two'>
      <div>
        <Image data-aos="fade-up" className='project-two-img' alt='img' src={p3}/>
        </div>
        <div className='projects-content-two'>
        <h3 data-aos="fade-up" className='project-two-h'>Dynamic Resume Generator Project</h3>
        <div className='project-two-content-div'>  
        <p className='project-two-p'>Created a dynamic resume builder using HTML, CSS, and TypeScript, offering a user-friendly interface for real-time resume customization and generation.</p>
          <div>
          <Link href='https://dynamic-resume-builder-rho-ruddy.vercel.app/'>
          <button className='project-btn'>View My Project</button>
          </Link>
          </div>
        </div>
        </div>
      </div>
      
      <div data-aos="fade-up" className='project-one'>
      <div data-aos="fade-up" className='projects-content-one'>
        <h3 className='project-one-h'>PanaCloud Website Clone Project</h3>
        <div className='project-one-content-div'>  
        <p className='project-one-p'>Developed a comprehensive website for Pana Cloud, highlighting expertise in web and graphic design, branding, and marketing. The site features client testimonials, a systematic work process, and dedicated support.</p>
          <div>
          <Link href='https://pana-cloud-nextjs.vercel.app/'>
          <button className='project-btn'>View My Project</button>
          </Link>
          </div>
        </div>
        </div>
        <div>
        <Image data-aos="fade-up" className='project-one-img' alt='img' src={p5}/>
        </div>
      </div>

       <div data-aos="fade-up" className='project-two'>
      <div>
        <Image width="435" height="275" data-aos="fade-up" className='project-two-img' alt='img' src={ecommerce}/>
        </div>
        <div className='projects-content-two'>
        <h3 data-aos="fade-up" className='project-two-h'>E-commerce Furniture Website</h3>
        <div className='project-two-content-div'>  
        <p className='project-two-p'>For our latest hackathon, I developed a comprehensive and visually appealing E-commerce Furniture Website. The project showcases a modern approach to online shopping, featuring a range of furniture products.</p>
          <div>
          <Link href='https://ui-ux-hackathon-xi.vercel.app/'>
          <button className='project-btn'>View My Project</button>
          </Link>
          </div>
        </div>
        </div>
      </div>

      
    </div>

  </div>
  )
}

export default projects;

'use client'

import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillInstagram, AiFillMail} from 'react-icons/ai'
import Image from 'next/image'
import portrait from '../public/my-portrait.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState } from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
       <Head>
        <title>Charlotte Berry Portfolio</title>
        <meta name="description" content="Generated by creator" />
        <link rel="icon" href="/favicon.ico" />
       </Head>

       <main className="bg-gradient-to-r from-lorange/40 to-pink2/40 px-3 md:px-10 md:pt-0 lg:px-35 pt-5 dark:bg-gradient-to-r dark:from-purple-950/100 dark:to-dpink">
        <section className="min-h-screen mx-10">

          <div className="md:invisible">
              <ul className="py-4 flex justify-center items-center md:py-0">
                <li>
                  <a href="https://www.instagram.com/charleeyberry/"><AiFillInstagram className="text-dpink text-5xl dark:text-lpink mx-5 md:text-xs md:m-0"/></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/charlotte-berry-ba3061190/"><AiFillLinkedin className="text-dpink text-5xl dark:text-lpink mx-5 md:text-xs md:m-0"/></a>
                </li>
                <li>
                  <a href="mailto:charleey.louise.berry@gmail.com"><AiFillMail className="text-dpink text-5xl dark:text-lpink mx-5 md:text-xs md:m-0"/></a>
                </li>
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="text-purple-950 cursor-pointer text-4xl dark:text-lpurple mx-5 md:text-xs md:m-0"/>
                </li>
              </ul>
            <h1 className="text-2xl pt-3 font-handmadetypewriter text-center text-purple-950 dark:text-lpink md:p-0">Welcome to my Portfolio!</h1>
          </div>

          <nav className="invisible md:visible md:p-10 md:flex md:justify-between md:-mt-10">
            <h1 className="md:text-2xl md:font-handmadetypewriter text-purple-950 dark:text-lpink md:pt-2">Welcome to my Portfolio!</h1>
            <ul className="flex items-center md:gap-10">
              <li>
                <a href="https://www.instagram.com/charleeyberry/"><AiFillInstagram className="text-dpink md:text-5xl dark:text-lpink"/></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/charlotte-berry-ba3061190/"><AiFillLinkedin className="text-dpink md:text-5xl dark:text-lpink"/></a>
              </li>
              <li>
              <a href="mailto:charleey.louise.berry@gmail.com"><AiFillMail className="text-dpink md:text-5xl dark:text-lpink"/></a>
              </li>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="text-purple-950 md:cursor-pointer md:text-4xl dark:text-lpurple"/>
              </li>
            </ul>
          </nav>
          

          <div className="text-center md:px-10">
            <h2 className="font-whitescratches -mt-5 -mx-5 text-dpink text-7xl md:pb-0 sm:text-5xl sm:pt-3 md:text-9xl dark:text-lpink">Charlotte L Berry</h2>
            <h3 className="font-handmadetypewriter text-purple-950 text-3xl sm:text-xl sm:pb-2 md:text-3xl dark:text-lpurple">Developer in training</h3>
            <p className="pt-3 -mx-3 font-handmadetypewriter text-purple-950 text-xl sm:text-md sm:py-3 leading-8 md:text-xl max-w-lg sm:mx-auto dark:text-lpurple">  
              An Open University student on a quest to become an excellent programmer.
            </p>
          </div>

          <div className="relative mx-auto rounded-full sm:w-80 sm:h-80 mt-6 overflow-hidden md:h-86 md:w-86">
            <Image src={portrait} className="bg-dpink dark:bg-lpink"/>
          </div>
        </section>
        
        <section>
          <div>
            <h3 className="-mt-7 -mb-2 text-5xl text-center sm:text-left sm:m-0 font-whitescratches text-dpink sm:text-6xl pb-1 dark:text-lpink">A little about me</h3>
            <p className="mx-5 sm:mx-0 font-handmadetypewriter text-purple-950 text-xl py-2 leading-8 dark:text-lpurple"> 
              I&apos;ve loved film, music and technology throughout my life, but struggled
              when it came to choosing a career path. In 2020, I felt inspired make  
              something of my love of puzzles and problem solving, and signed up to study
              a BSc in Computing & IT and Mathematics at the Open University.
            </p>
            <p className="mx-5 sm:mx-0 font-handmadetypewriter text-purple-950 text-xl py-2 leading-8 dark:text-lpurple">
              Since the beginning of my journey, I have worked for 
              <span className="text-dpink"> <a href="https://simplycakeco.com">Simply Cake Co. </a></span>
              as Social Media Manager and Website Maintenance, taking care of all things online, and have been 
              working on a few projects of my own outside of university.
            </p>
            <p className="mx-5 sm:mx-0 font-handmadetypewriter text-purple-950 text-xl py-2 leading-8 dark:text-lpurple">
              I would like to gain more experience in the real world, particularly in 
              software development, website development and any IT roles within the film & TV sector.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <h3 className="font-whitescratches text-dpink text-5xl dark:text-lpink font-medium py-2">Creativity</h3>
              <p className="font-handmadetypewriter text-purple-950 text-xl py-2 leading-8 dark:text-lpurple">A few design and editing tools I have experience with:</p>
              <p className="font-handmadetypewriter text-dpink text-xl py-1 leading-8 dark:text-lpink">Photoshop</p>
              <p className="font-handmadetypewriter text-purple-950 text-xl py-1 leading-8 dark:text-lpurple">Procreate</p>
              <p className="font-handmadetypewriter text-dpink text-xl py-1 leading-8 dark:text-lpink">Premier Pro</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <h3 className="font-whitescratches text-dpink text-5xl dark:text-lpink font-medium py-2">Languages</h3>
              <p className="font-handmadetypewriter text-purple-950 text-xl py-2 leading-8 dark:text-lpurple">Programming languages I have experience with:</p>
              <p className="font-handmadetypewriter text-dpink text-xl py-1 leading-8 dark:text-lpink">HTML5, CSS, JavaScript</p>
              <p className="font-handmadetypewriter text-purple-950 text-xl py-1 leading-8 dark:text-lpurple">Java, PHP, SQL</p>
              <p className="font-handmadetypewriter text-dpink text-xl py-1 leading-8 dark:text-lpink">React, C</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <h3 className="font-whitescratches text-dpink text-5xl dark:text-lpink font-medium py-2">Learning</h3>
              <p className="font-handmadetypewriter text-purple-950 text-xl py-2 leading-8 dark:text-lpurple">Other things I&apos;m teaching myself at the moment:</p>
              <p className="font-handmadetypewriter text-dpink text-xl py-1 leading-8 dark:text-lpink">French</p>
              <p className="font-handmadetypewriter text-purple-950 text-xl py-1 leading-8 dark:text-lpurple">Guitar</p>
              <p className="font-handmadetypewriter text-dpink text-xl py-1 leading-8 dark:text-lpink">Mindfulness</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-5xl text-center sm:text-left sm:m-0 font-whitescratches text-dpink sm:text-6xl pb-1 dark:text-lpink">Portfolio</h3>
            <p className="mx-5 sm:mx-0 font-handmadetypewriter text-purple-950 text-xl py-2 leading-8 dark:text-lpurple"> 
              Below is a collection of projects that I&apos;ve worked on at university for your 
              observation (and kind judgement) until my personal side projects are ready
              to take the leap online!
            </p>
          </div>
          <div className="flex flex-column gap-10 py-10 lg:flex-row flex-wrap">
            <div className="basis-auto lg:basis-1/3 flex-1">
              <Image src={web1}  className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-auto lg:basis-1/3 flex-1">
              <Image src={web2}  className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-auto lg:basis-1/3 flex-1">
              <Image src={web3}  className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-auto lg:basis-1/3 flex-1">
              <Image src={web4}  className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-auto lg:basis-1/3 flex-1">
              <Image src={web5}  className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-auto lg:basis-1/3 flex-1">
              <Image src={web6}  className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>
          <p className="mx-5 sm:mx-0 font-handmadetypewriter text-purple-950 text-xl py-2 leading-8 dark:text-lpurple pb-20"> 
              Thanks for taking the time to check out my porfolio, if you&apos;d like to work or 
              collaborate with me please get in touch via LinkedIn or email at the top of my page!
            </p>
        </section>
       </main>
    </div> 

    
  )
}


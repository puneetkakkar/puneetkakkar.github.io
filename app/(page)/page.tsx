import { Button } from '@nextui-org/button'
import { EmblaOptionsType } from 'embla-carousel'
import Image from 'next/image'
import NextLink from 'next/link'

import BitnetThumbnail from '@/assets/bitnet-thumbnail.svg'
import ForecastingThumbnail from '@/assets/forecasting-thumbnail.svg'
import RADARThumbnail from '@/assets/radar-thumbnail.svg'
import SecureVaultThumbnail from '@/assets/secure-vault-thumbnail.svg'
import UpvoiceThumbnail from '@/assets/upvoice-thumbnail.svg'
import EmblaCarousel from '@/components/embla-carousel'
import {
  JavaIcon,
  MapMarker,
  NoSQLDBIcon,
  PythonIcon,
  TSIcon
} from '@/components/icons'
import '@/styles/embla.css'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDES = [
  {
    experience:
      'Migrated a monolithic logistics/WMS platform (PHP) to Spring Boot microservices on AWS ECS + Fargate, enabling elastic scaling, zero-downtime rollouts, and real-time data sync via Kafka.',
    position: 'SDE II',
    company: 'Dealshare',
    year: 'Mar 2022 - Aug 2023',
    location: 'Bangalore, India'
  },
  {
    experience:
      'Enhanced Next.js and React.js application security with bot protection, reCAPTCHA, OWASP-compliant input validation, XSS/SQL injection safeguards, rate limiting, and PCI-compliant API design.',
    position: 'Senior Software Engineer',
    company: 'Chqbook',
    year: 'Jun 2020 - Mar 2022',
    location: 'Gurugram, India'
  },
  {
    experience:
      'Improved query execution times and indexing strategies for high-volume MySQL and PostgreSQL database systems, reducing response times by 30% and enhancing data retrieval performance.',
    position: 'Software Engineer',
    company: 'Bijnis',
    year: 'Jun 2019 - Jul 2020',
    location: 'New Delhi, India'
  },
  {
    experience:
      'Led the development and launch of an e-commerce platform from zero to one as an early engineer with Angular, TypeScript, Node.js, and AWS, implementing SSR and A/B testing to ensure smooth migration without impacting SEO rankings.',
    position: 'Software Engineer',
    company: 'DailyObjects',
    year: 'Aug 2018 - Jun 2019',
    location: 'Gurugram, India'
  }
]

const ABOUT_ME = `I'm a senior software engineer with a Master's in CS
  from the University at Buffalo and 5+ years of experience
  building scalable backend systems and intuitive frontends. I
  love solving real-world problems and enjoy working across the
  stack, especially at the intersection of backend, infra, and AI.`

const PROJECTS = [
  {
    title: 'Secure Vault',
    detailedTitle: 'Secure Vault: The Only Key Is You',
    description: `Secure Vault is a privacy-focused application designed to 
			safeguard your passwords, documents, and other confidential 
			information. It's built with end-to-end encryption, ensuring 
			that only you have access to your data. We never have access 
			to your passwords or sensitive information.`,
    thumbnail: {
      src: SecureVaultThumbnail,
      alt: 'Secure Vault Thumbnail'
    },
    year: '2025 - In Progress',
    link: 'https://github.com/puneetkakkar/secure-vault'
  },
  {
    title: 'Road Analysis and Damage Assessment Research (RADAR)',
    detailedTitle: 'RADAR: Road Analysis and Damage Assessment Research',
    description: `It's a research project where we fine-tuned and implemented state-of-the-art models like 
			DINOv2 and SegFormer for damage detection in road images. The project lets users train models on given dataset 
			and run inference to detect and identify damage areas in road images.`,
    thumbnail: {
      src: RADARThumbnail,
      alt: 'RADAR Thumbnail'
    },
    year: '2024',
    link: 'https://github.com/puneetkakkar/road-damage-detection'
  },
  {
    title: 'Upvoice',
    detailedTitle:
      'Join UpVoice: Voice concerns for transparency and accountability.',
    description: `A web-app that provides a platform for citizens to voice
      concerns directly to company stakeholders, fostering transparency and accountability.`,
    thumbnail: {
      src: UpvoiceThumbnail,
      alt: 'Upvoice Thumbnail'
    },
    year: '2024',
    link: 'https://devpost.com/software/upvoice'
  },
  {
    title: 'Bitnet 1.58B',
    detailedTitle:
      'Bitnet 1.58b: 1-bit LLM for efficient training and collaboration.',
    description: `Bitnet 1.58b: This project implements the innovative 1-bit LLM
      architecture described in recent whitepapers, focusing on efficient training, inference, and open-source collaboration.`,
    thumbnail: {
      src: BitnetThumbnail,
      alt: 'Bitnet Thumbnail'
    },
    year: '2024',
    link: 'https://github.com/puneetkakkar/Bitnet-1.58B'
  },
  {
    title: 'Forecasting Mental WellBeing',
    detailedTitle:
      'Forecasting Mental WellBeing: A data-driven approach to mental health.',
    description: `This project aims to forecast mental well-being using data-driven
			approaches, leveraging machine learning and statistical methods to provide insights into mental health trends.`,
    thumbnail: {
      src: ForecastingThumbnail,
      alt: 'Forecasting Mental WellBeing Thumbnail'
    },
    year: '2024',
    link: 'https://github.com/puneetkakkar/forecasting-mental-wellbeing'
  }
]

export default function Home() {
  return (
    <section className='sm:flex sm:flex-col '>
      <div className='flex flex-col lg:flex-row sm:gap-4 sm:py-8 md:py-10'>
        <div className='group w-full sm:w-full mb-4 md:mb-0 relative mx-auto overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-400 hover:cursor-pointer'>
          <div className='animate-spin-slow invisible absolute -top-40 -bottom-40 left-5 right-5 bg-gradient-to-r from-transparent via-blue-800 to-transparent group-hover:visible' />
          <div className='flex flex-col relative h-full rounded-[15px] sm:text-left w-full bg-[#F9F9F9] dark:bg-[#171D27] p-7'>
            <div className='font-rubik text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-black'>
              <span>
                I build{' '}
                <span className='font-rubik bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 bg-clip-text text-transparent'>
                  software
                </span>{' '}
                <br />
                for the <br />
                internet.
              </span>
            </div>
            <div className='py-[11px] pr-2 md:min-h-[90px]'>
              <span className='font-inter text-xs sm:text-xs md:text-sm'>
                {ABOUT_ME}
              </span>
            </div>
            <Button
              as={NextLink}
              className='font-normal font-inter text-xs sm:text-sm md:text-sm rounded-md mt-5 w-1/2 sm::w-1/3 md:w-4/12 lg:w-5/12 xl:w-4/12 bg-[linear-gradient(105.36deg,_#043872_0%,_#0052F4_76.61%,_#0054F5_150.11%)]'
              color='primary'
              href='#projects'
            >
              Discover projects
            </Button>
          </div>
        </div>

        <div className='flex flex-col w-full sm:w-full gap-4'>
          <div className='flex sm:flex-row w-full h-full gap-4'>
            <div className='group w-full relative mx-auto overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-400 hover:cursor-pointer'>
              <div className='animate-spin-slow invisible absolute -top-40 -bottom-40 left-5 right-5 bg-gradient-to-r from-transparent via-blue-800 to-transparent group-hover:visible' />
              <div className='relative h-full rounded-[15px] bg-[#FFFFFF]  dark:bg-[#171D27] w-full p-4'>
                <span className='text-lg font-bold font-rubik'>
                  Technologies
                </span>
                <div className='flex flex-col'>
                  <div className='flex items-center py-1'>
                    <PythonIcon
                      className='fill-black dark:fill-white '
                      size={18}
                    />
                    <span className='px-1 font-inter text-xs sm:text-sm'>
                      Python
                    </span>
                  </div>
                  <div className='flex items-center py-1'>
                    <JavaIcon
                      className='fill-black dark:fill-white '
                      size={18}
                    />
                    <span className='px-1 font-inter text-xs sm:text-sm'>
                      Java
                    </span>
                  </div>
                  <div className='flex items-center py-1'>
                    <TSIcon className='fill-black dark:fill-white ' size={18} />
                    <span className='px-1 font-inter text-xs sm:text-sm'>
                      TypeScript
                    </span>
                  </div>
                  <div className='flex items-center py-1'>
                    <NoSQLDBIcon
                      className='fill-black dark:fill-white '
                      size={18}
                    />
                    <span className='px-1 font-inter text-xs sm:text-sm'>
                      NoSQL
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className='group flex w-full relative mx-auto overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-400 hover:cursor-pointer'>
              <div className='animate-spin-slow invisible absolute -top-40 -bottom-40 left-5 right-5 bg-gradient-to-r from-transparent via-blue-800 to-transparent group-hover:visible' />
              <div className='relative rounded-[15px] bg-[#FFFFFF] dark:bg-[#171D27] w-full flex flex-col justify-center items-center'>
                <MapMarker className='fill-black dark:fill-white ' />
                <span className='font-rubik text-lg sm:text-xl lg:text-xl font-extrabold mt-3 '>
                  Based in
                </span>
                <span className='font-inter text-sm my-1 '>San Mateo, CA</span>
              </div>
            </div>
          </div>

          <div className='group flex w-full h-full relative mx-auto overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-sky-400 hover:to-sky-400 hover:cursor-pointer'>
            <div className='animate-spin-slow invisible absolute -top-52 -bottom-52 left-5 right-5 bg-gradient-to-r from-transparent via-blue-600 to-transparent group-hover:visible' />
            <div className='relative rounded-[15px] flex flex-col bg-[#FFFFFF] dark:bg-[#171D27] w-full p-4'>
              <div className='font-rubik font-extrabold text-lg'>
                Work Experience
              </div>
              <div className='flex items-start w-full'>
                <EmblaCarousel options={OPTIONS}>
                  {SLIDES.map((content, index) => (
                    <div key={index} className='embla__slide'>
                      <div className='embla__slide__number flex flex-col items-start justify-start mt-1'>
                        <div className='text-xs sm:text-sm font-inter font-normal'>
                          &quot;{content.experience}&quot;
                        </div>
                        <div className='w-auto text-[9px] sm:text-xs font-inter font-normal text-[#818181] mt-2'>
                          <span>
                            {content.position}, {content.company}
                          </span>{' '}
                          | <span>{content.year}</span> |{' '}
                          <span>{content.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </EmblaCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='flex flex-col items-center justify-center py-48'
        id='projects'
      >
        <div className='font-rubik text-xs text-[#818181] mb-4'>
          Curated Work
        </div>
        <div className='font-rubik text-lg font-extrabold'>
          Things I&apos;ve built from the ground
        </div>
        {PROJECTS.map((project, index) => (
          <div className='flex flex-col items-center justify-center bg-[#F9F9F9] dark:bg-[#171D27] mt-16 mb-6 pb-8 md:pb-14 w-full rounded-lg'>
            <div className='font-rubik uppercase text-sm font-normal pt-10 md:pt-18 pb-4 pl-5'>
              {project.title}, {project.year}
            </div>
            <div className='flex flex-col-reverse gap-4 sm:flex-row items-center justify-center p-5 sm:p-10 w-full'>
              <div className='flex flex-col sm:w-full lg:w-10/12'>
                <div className='font-rubik font-extrabold text-lg sm:text-xl lg:text-2xl mb-5'>
                  {project.detailedTitle || project.title}
                </div>
                <div className='font-inter text-xs sm:text-sm text-[#818181]'>
                  {project.description}
                </div>
                <Button
                  as={NextLink}
                  className='font-normal font-inter text-xs sm:text-sm rounded-md mt-5 w-36 bg-[linear-gradient(105.36deg,_#043872_0%,_#0052F4_76.61%,_#0054F5_150.11%)]'
                  color='primary'
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Learn More
                </Button>
              </div>
              <div className='flex w-full justify-center p-2 md:p-0'>
                <Image
                  alt={project.thumbnail.alt}
                  src={project.thumbnail.src}
                  className='w-40 h-34 sm:w-56 sm:h-32 md:w-72 md:h-40 lg:w-80 lg:h-48 xl:w-96 xl:h-56 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

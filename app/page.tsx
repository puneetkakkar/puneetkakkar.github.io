import { Button } from '@nextui-org/button'
import Image from 'next/image'
import NextLink from 'next/link'

import BitnetThumbnail from '@/assets/bitnet-thumbnail.svg'
import ForecastingThumbnail from '@/assets/forecasting-thumbnail.svg'
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
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDES = [
  {
    experience:
      'Implemented custom relevance scoring algorithms, synonyms, and stemming using Elasticsearch, expanding search queries by 20% and accommodating diverse user inputs.',
    position: 'SDE II',
    company: 'Dealshare',
    year: 'Mar 2022 - Aug 2023',
    location: 'Bangalore, India'
  },
  {
    experience:
      'Integrated gRPC and Consul for efficient inter-service communication, enabling seamless scaling of our microservices architecture.',
    position: 'Senior Software Engineer',
    company: 'Chqbook',
    year: 'Jun 2020 - Mar 2022',
    location: 'Gurugram, India'
  },
  {
    experience:
      'Drove a twofold increase in platform profit by implementing AWS Lambda for real-time filtering of seller-buyer combinations, slashing infrastructure costs by 40% and streamlining operations.',
    position: 'Software Engineer',
    company: 'Bijnis',
    year: 'Jun 2019 - Jul 2020',
    location: 'New Delhi, India'
  },
  {
    experience:
      'Decreased overall page load times by 66.6%, assessed by the time it takes for the e-commerce platform pages built with React.js to load completely, maximizing user satisfaction',
    position: 'Software Engineer',
    company: 'DailyObjects',
    year: 'Aug 2018 - Jun 2019',
    location: 'Gurugram, India'
  }
]

export default function Home() {
  return (
    <section className='sm:flex sm:flex-col '>
      <div className='flex flex-col lg:flex-row sm:gap-4 sm:py-8 md:py-10'>
        <div className='group w-full sm:w-full mb-4 md:mb-0 relative mx-auto overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 hover:cursor-pointer'>
          <div className='animate-spin-slow invisible absolute -top-40 -bottom-40 left-5 right-5 bg-gradient-to-r from-transparent via-pink-600 to-transparent group-hover:visible' />
          <div className='flex flex-col relative h-full rounded-[15px] sm:text-left w-full bg-[#F9F9F9] dark:bg-[#171D27] p-7'>
            <div className='font-rubik text-3xl sm:text-4xl font-extrabold'>
              <span>
                I build things <br />
                for the <br />
                internet.
              </span>
            </div>
            <div className='py-[11px] pr-2 md:min-h-[90px]'>
              <span className='font-inter text-xs sm:text-xs md:text-sm'>
                I&apos;m a CS Master&apos;s student at the University at
                Buffalo. I bring 5+ years of experience building
                high-performance and scalable backend systems. I thrive on
                tackling complex problems and turning innovative ideas into
                reality through code.
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
            <div className='group w-full relative mx-auto overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 hover:cursor-pointer'>
              <div className='animate-spin-slow invisible absolute -top-40 -bottom-40 left-5 right-5 bg-gradient-to-r from-transparent via-pink-600 to-transparent group-hover:visible' />
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

            <div className='group flex w-full relative mx-auto overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 hover:cursor-pointer'>
              <div className='animate-spin-slow invisible absolute -top-40 -bottom-40 left-5 right-5 bg-gradient-to-r from-transparent via-pink-600 to-transparent group-hover:visible' />
              <div className='relative rounded-[15px] bg-[#FFFFFF] dark:bg-[#171D27] w-full flex flex-col justify-center items-center'>
                <MapMarker className='fill-black dark:fill-white ' />
                <span className='font-rubik text-medium font-extrabold mt-3'>
                  Based in
                </span>
                <span className='font-inter text-xs my-1'>
                  Buffalo, New York
                </span>
              </div>
            </div>
          </div>

          <div className='group flex w-full h-full relative mx-auto overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 hover:cursor-pointer'>
            <div className='animate-spin-slow invisible absolute -top-40 -bottom-40 left-5 right-5 bg-gradient-to-r from-transparent via-pink-600 to-transparent group-hover:visible' />
            <div className='relative rounded-[15px] flex flex-col bg-[#FFFFFF] dark:bg-[#171D27] w-full p-4'>
              <div className='font-rubik font-extrabold text-lg'>
                Work Experience
              </div>
              <div className='flex items-start w-full'>
                <EmblaCarousel options={OPTIONS}>
                  {SLIDES.map((content, index) => (
                    <div className='embla__slide' key={index}>
                      <div className='embla__slide__number flex flex-col items-start justify-start mt-1'>
                        <div className='text-xs sm:text-sm font-inter font-normal'>
                          "{content.experience}"
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
        <div className='flex flex-col items-center justify-center bg-[#F9F9F9] dark:bg-[#171D27] mt-16 mb-6 pb-14 w-full rounded-lg'>
          <div className='font-rubik uppercase text-sm font-normal pt-20 pb-2'>
            UpVoice, 2024
          </div>
          <div className='flex flex-col-reverse gap-4 sm:flex-row items-center justify-center p-5 sm:p-10 w-full'>
            <div className='flex flex-col sm:w-full lg:w-10/12'>
              <div className='font-rubik font-extrabold text-medium sm:text-lg mb-5'>
                Join UpVoice: Voice concerns for transparency and
                accountability.
              </div>
              <div className='font-inter text-xs sm:text-sm text-[#818181]'>
                A web-app that provides a platform for citizens to voice
                concerns directly to company stakeholders, fostering
                transparency and accountability.
              </div>
              <Button
                as={NextLink}
                className='font-normal font-inter text-xs sm:text-base rounded-md mt-5 w-36 bg-[linear-gradient(105.36deg,_#043872_0%,_#0052F4_76.61%,_#0054F5_150.11%)]'
                color='primary'
                href='https://devpost.com/software/upvoice'
              >
                Learn More
              </Button>
            </div>
            <div className='flex w-full justify-center'>
              <Image
                alt="Citizen's Voice"
                height={350}
                src={UpvoiceThumbnail}
                width={350}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center bg-[#F9F9F9] dark:bg-[#171D27] mt-6 mb-6 pb-14 w-full rounded-lg'>
          <div className='font-rubik uppercase text-sm font-normal pt-20 pb-10'>
            Bitnet 1.58B, 2024
          </div>
          <div className='flex flex-col-reverse gap-4 sm:flex-row items-center justify-center p-5 sm:p-10 w-full'>
            <div className='flex flex-col sm:w-full lg:w-10/12'>
              <div className='font-rubik font-extrabold text-medium sm:text-lg mb-5'>
                Bitnet 1.58b: 1-bit LLM for efficient training and
                collaboration.
              </div>
              <div className='font-inter text-xs sm:text-sm text-[#818181]'>
                Bitnet 1.58b: This project implements the innovative 1-bit LLM
                architecture described in recent whitepapers, focusing on
                efficient training, inference, and open-source collaboration.
              </div>
              <Button
                as={NextLink}
                className='font-normal font-inter text-xs sm:text-base rounded-md mt-5 w-36 bg-[linear-gradient(105.36deg,_#043872_0%,_#0052F4_76.61%,_#0054F5_150.11%)]'
                color='primary'
                href='https://github.com/puneetkakkar/Bitnet-1.58B'
              >
                Learn More
              </Button>
            </div>
            <div className='flex w-full justify-center'>
              <Image alt='NLP' height={500} src={BitnetThumbnail} width={500} />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center bg-[#F9F9F9] dark:bg-[#171D27] mt-6 mb-6 pb-14 w-full rounded-lg'>
          <div className='font-rubik uppercase text-sm font-normal pt-20 pb-10'>
            Forecasting Mental WellBeing, 2024
          </div>
          <div className='flex flex-col-reverse gap-4 sm:flex-row items-center justify-center p-5 sm:p-10 w-full'>
            <div className='flex flex-col sm:w-full lg:w-10/12'>
              <div className='font-rubik font-extrabold text-medium sm:text-lg mb-5'>
                Estimating countries suicide rates for precision interventions,
                prioritizing mental wellbeing.
              </div>
              <div className='font-inter text-xs sm:text-sm text-[#818181]'>
                Our project&apos;s AI-driven regressor forecasts county suicide
                rates, integrating mental health data to empower targeted
                interventions by public health and policymakers, bolstering
                mental health initiatives.
              </div>
              <Button
                as={NextLink}
                className='font-normal font-inter text-xs sm:text-base rounded-md mt-5 w-36 bg-[linear-gradient(105.36deg,_#043872_0%,_#0052F4_76.61%,_#0054F5_150.11%)]'
                color='primary'
                href='https://github.com/puneetkakkar/forecasting-mental-wellbeing'
              >
                Learn More
              </Button>
            </div>
            <div className='flex w-full justify-center'>
              <Image
                alt='Human Hug'
                className='h-[250] w-[250] sm:h-[380] sm:w-[350]'
                src={ForecastingThumbnail}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

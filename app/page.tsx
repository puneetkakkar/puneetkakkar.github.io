import { Button } from '@nextui-org/button'
import Image from 'next/image'
import NextLink from 'next/link'

import BitnetThumbnail from '@/assets/bitnet-thumbnail.svg'
import ForecastingThumbnail from '@/assets/forecasting-thumbnail.svg'
import UpvoiceThumbnail from '@/assets/upvoice-thumbnail.svg'
import {
  CompanyLogo,
  JavaIcon,
  MapMarker,
  NoSQLDBIcon,
  PythonIcon,
  TSIcon
} from '@/components/icons'

export default function Home() {
  return (
    <section className='sm:flex sm:flex-col '>
      <div className='flex flex-col lg:flex-row sm:gap-4 sm:py-8 md:py-10'>
        <div className='group w-full sm:w-full mb-4 md:mb-0 relative mx-auto overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 hover:cursor-pointer'>
          <div className='animate-spin-slow invisible absolute -top-40 -bottom-40 left-5 right-5 bg-gradient-to-r from-transparent via-pink-600 to-transparent group-hover:visible' />
          <div className='relative rounded-[15px] sm:text-left w-full bg-[#F9F9F9] dark:bg-[#171D27] p-5'>
            <div className='font-rubik font-extrabold text-4xl'>
              <span>
                I build things <br />
                for the <br />
                internet.
              </span>
            </div>
            <div className='py-[11px] pr-2 md:min-h-[90px] md:max-h-[100px]'>
              <span className='font-inter sm:text-xs md:text-sm'>
                I&apos;m a CS Master&apos;s student at the University at
                Buffalo. I hold 5+ YOE as a software engineer specializing in
                building high-performance, and highly scalable applications.
              </span>
            </div>
            <Button
              as={NextLink}
              className='font-normal font-inter rounded-md mt-5 bg-[linear-gradient(105.36deg,_#043872_0%,_#0052F4_76.61%,_#0054F5_150.11%)]'
              color='primary'
              href='#projects'
            >
              Discover projects
            </Button>
          </div>
        </div>

        <div className='flex flex-col w-full sm:w-full gap-4'>
          <div className='flex sm:flex-row w-full gap-4'>
            <div className='group w-full relative mx-auto overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 hover:cursor-pointer'>
              <div className='animate-spin-slow invisible absolute -top-40 -bottom-40 left-5 right-5 bg-gradient-to-r from-transparent via-pink-600 to-transparent group-hover:visible' />
              <div className='relative rounded-[15px] bg-[#FFFFFF]  dark:bg-[#171D27] w-full p-4'>
                <span className='text-lg font-bold font-rubik'>
                  Technologies
                </span>
                <div className='flex flex-col'>
                  <div className='flex items-center'>
                    <PythonIcon
                      className='fill-black dark:fill-white '
                      size={18}
                    />
                    <span className='px-1 font-rubik text-sm'>Python</span>
                  </div>
                  <div className='flex items-center'>
                    <JavaIcon
                      className='fill-black dark:fill-white '
                      size={18}
                    />
                    <span className='px-1 font-rubik text-sm'>Java</span>
                  </div>
                  <div className='flex items-center'>
                    <TSIcon className='fill-black dark:fill-white ' size={18} />
                    <span className='px-1 font-rubik text-sm'>TypeScript</span>
                  </div>
                  <div className='flex items-center'>
                    <NoSQLDBIcon
                      className='fill-black dark:fill-white '
                      size={18}
                    />
                    <span className='px-1 font-rubik text-sm'>NoSQL</span>
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
                <span className='font-rubik text-xs my-1'>
                  Buffalo, New York
                </span>
              </div>
            </div>
          </div>

          <div className='group flex w-full relative mx-auto overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 hover:cursor-pointer'>
            <div className='animate-spin-slow invisible absolute -top-40 -bottom-40 left-5 right-5 bg-gradient-to-r from-transparent via-pink-600 to-transparent group-hover:visible' />
            <div className='relative rounded-[15px] flex flex-col bg-[#FFFFFF] dark:bg-[#171D27] w-full'>
              <div className='font-rubik font-extrabold text-lg pt-4 pl-4'>
                Work Experience
              </div>
              <div className='flex justify-center items-center py-7'>
                <div className='flex flex-col items-center mx-3 sm:mx-5 mb-2 mt-2'>
                  <CompanyLogo
                    className='fill-black dark:fill-white'
                    size={24}
                  />
                  <span className='font-rubik text-xs'>Dealshare</span>
                </div>
                <div className='flex flex-col items-center mx-3 sm:mx-5 mb-2 mt-2'>
                  <CompanyLogo
                    className='fill-black dark:fill-white '
                    size={24}
                  />
                  <span className='font-rubik text-xs'>Chqbook</span>
                </div>
                <div className='flex flex-col items-center mx-3 sm:mx-5 mb-2 mt-2'>
                  <CompanyLogo
                    className='fill-black dark:fill-white '
                    size={24}
                  />
                  <span className='font-rubik text-xs'>Bijnis</span>
                </div>
                <div className='flex flex-col items-center mx-3 sm:mx-5 mb-2 mt-2'>
                  <CompanyLogo
                    className='fill-black dark:fill-white '
                    size={24}
                  />
                  <span className='font-rubik text-xs'>DailyObjects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='flex flex-col items-center justify-center py-48'
        id='projects'
      >
        <div className='font-rubik text-xs text-[#818181]'>Curated Work</div>
        <div className='font-rubik text-lg font-extrabold'>
          Things I&apos;ve built from the ground
        </div>
        <div className='flex flex-col items-center justify-center bg-[#F9F9F9] dark:bg-[#171D27] mt-16 mb-6 pb-14 w-full rounded-lg'>
          <div className='font-rubik uppercase text-sm font-normal pt-20 pb-2'>
            UpVoice, 2024
          </div>
          <div className='flex flex-row items-center justify-center pl-16 w-full'>
            <div className='flex flex-col sm:w-10/12 lg:w-8/12'>
              <div className='font-rubik font-extrabold text-lg mb-5'>
                Join UpVoice: Voice concerns for transparency and
                accountability.
              </div>
              <div className='font-rubik text-sm text-[#818181]'>
                A web-app that provides a platform for citizens to voice
                concerns directly to company stakeholders, fostering
                transparency and accountability.
              </div>
              <Button
                as={NextLink}
                className='font-normal font-rubik rounded-md mt-5 w-36 bg-[linear-gradient(105.36deg,_#043872_0%,_#0052F4_76.61%,_#0054F5_150.11%)]'
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
          <div className='flex flex-row items-center justify-center pl-16 w-full'>
            <div className='flex flex-col sm:w-10/12 lg:w-8/12'>
              <div className='font-rubik font-extrabold text-lg mb-5'>
                Bitnet 1.58b: 1-bit LLM for efficient training and
                collaboration.
              </div>
              <div className='font-rubik text-sm text-[#818181]'>
                Bitnet 1.58b: This project implements the innovative 1-bit LLM
                architecture described in recent whitepapers, focusing on
                efficient training, inference, and open-source collaboration.
              </div>
              <Button
                as={NextLink}
                className='font-normal font-rubik rounded-md mt-5 w-36 bg-[linear-gradient(105.36deg,_#043872_0%,_#0052F4_76.61%,_#0054F5_150.11%)]'
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
          <div className='flex flex-row items-center justify-center pl-16 w-full'>
            <div className='flex flex-col sm:w-10/12 lg:w-8/12'>
              <div className='font-rubik font-extrabold text-lg mb-5'>
                Estimating countries suicide rates for precision interventions,
                prioritizing mental wellbeing.
              </div>
              <div className='font-rubik text-sm text-[#818181]'>
                Our project&apos;s AI-driven regressor forecasts county suicide
                rates, integrating mental health data to empower targeted
                interventions by public health and policymakers, bolstering
                mental health initiatives.
              </div>
              <Button
                as={NextLink}
                className='font-normal font-rubik rounded-md mt-5 w-36 bg-[linear-gradient(105.36deg,_#043872_0%,_#0052F4_76.61%,_#0054F5_150.11%)]'
                color='primary'
                href='https://github.com/puneetkakkar/forecasting-mental-wellbeing'
              >
                Learn More
              </Button>
            </div>
            <div className='flex w-full justify-center'>
              <Image
                alt='Human Hug'
                height={350}
                src={ForecastingThumbnail}
                width={350}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

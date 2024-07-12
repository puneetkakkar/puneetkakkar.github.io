import {
  CompanyLogo,
  JavaIcon,
  MapMarker,
  NoSQLDBIcon,
  PythonIcon,
  TSIcon,
} from "@/components/icons";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";

export default function Home() {
  return (
    <section className="sm:flex sm:flex-row sm:gap-4 py-8 sm:mx-16 md:py-10">
      <div className="group w-full relative mx-auto overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 hover:cursor-pointer">
        <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-5 right-5 bg-gradient-to-r from-transparent via-pink-600 to-transparent group-hover:visible"></div>
        <div className="relative rounded-[15px] sm:text-left w-full bg-[#F9F9F9] dark:bg-[#171D27] p-5">
          <div className="font-rubik font-extrabold text-4xl">
            <span>
              I build things <br />
              for the <br />
              internet.
            </span>
          </div>
          <div>
            <span className="font-inter text-xs">
              I'm a software engineer specializing in building exceptional
              digital experiences. I'm a software engineer specializing in
              building exceptional digital experiences. I'm a software engineer
              specializing in building exceptional digital experiences.
            </span>
          </div>
          <Button
            as={NextLink}
            href="/"
            color="primary"
            className="font-normal font-rubik rounded-md mt-5 bg-[linear-gradient(105.36deg,_#043872_0%,_#0052F4_76.61%,_#0054F5_150.11%)]"
          >
            Discover projects
          </Button>
        </div>
      </div>

      <div className="flex sm:flex-col w-full sm:gap-4 sm:justify-start">
        <div className="flex sm:flex-row w-full sm:gap-4">
          <div className="group w-full relative mx-auto overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 hover:cursor-pointer">
            <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-5 right-5 bg-gradient-to-r from-transparent via-pink-600 to-transparent group-hover:visible"></div>
            <div className="relative rounded-[15px] bg-[#FFFFFF]  dark:bg-[#171D27] w-full p-4">
              <span className="text-lg font-bold font-rubik">Technologies</span>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <PythonIcon
                    className="fill-black dark:fill-white "
                    size={18}
                  />
                  <span className="px-1 font-inter text-sm">Python</span>
                </div>
                <div className="flex items-center">
                  <JavaIcon className="fill-black dark:fill-white " size={18} />
                  <span className="px-1 font-inter text-sm">Java</span>
                </div>
                <div className="flex items-center">
                  <TSIcon className="fill-black dark:fill-white " size={18} />
                  <span className="px-1 font-inter text-sm">TypeScript</span>
                </div>
                <div className="flex items-center">
                  <NoSQLDBIcon
                    className="fill-black dark:fill-white "
                    size={18}
                  />
                  <span className="px-1 font-inter text-sm">NoSQL</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group flex w-full relative mx-auto overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 hover:cursor-pointer">
            <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-5 right-5 bg-gradient-to-r from-transparent via-pink-600 to-transparent group-hover:visible"></div>
            <div className="relative rounded-[15px] bg-[#FFFFFF] dark:bg-[#171D27] w-full flex flex-col justify-center items-center">
              <MapMarker className="fill-black dark:fill-white " />
              <span className="font-rubik text-medium font-extrabold mt-3">
                Based in
              </span>
              <span className="font-inter text-xs my-1">Buffalo, New York</span>
            </div>
          </div>
        </div>

        <div className="group flex w-full relative mx-auto overflow-hidden rounded-[16px] p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-500 hover:cursor-pointer">
          <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-5 right-5 bg-gradient-to-r from-transparent via-pink-600 to-transparent group-hover:visible"></div>
          <div className="relative rounded-[15px] flex flex-col bg-[#FFFFFF] dark:bg-[#171D27] w-full">
            <div className="font-rubik font-extrabold text-lg pt-4 pl-4">
              Work Experience
            </div>
            <div className="flex justify-center items-center py-7">
              <div className="flex flex-col items-center mx-5 mb-2 mt-2">
                <CompanyLogo
                  className="fill-black dark:fill-white "
                  size={24}
                />
                <span className="font-inter text-xs">Dealshare</span>
              </div>
              <div className="flex flex-col items-center mx-5 mb-2 mt-2">
                <CompanyLogo
                  className="fill-black dark:fill-white "
                  size={24}
                />
                <span className="font-inter text-xs">Chqbook</span>
              </div>
              <div className="flex flex-col items-center mx-5 mb-2 mt-2">
                <CompanyLogo
                  className="fill-black dark:fill-white "
                  size={24}
                />
                <span className="font-inter text-xs">Bijnis</span>
              </div>
              <div className="flex flex-col items-center mx-5 mb-2 mt-2">
                <CompanyLogo
                  className="fill-black dark:fill-white "
                  size={24}
                />
                <span className="font-inter text-xs">DailyObjects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

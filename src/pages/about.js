"use client";

import Pagetitle from "components/pagetitle";

import { Carousel } from "flowbite-react";

import source4 from "assets/workData/4.jpeg";

function About() {
  return (
    <>
      <div className="bg-primaryBackground relative">
        <div className="max-w-screen-xl mx-auto px-6 py-12 md:px-4 md:py-16">
          <Pagetitle title="關於60週年" />
          <div className="flex md:flex-row flex-col md:gap-0 gap-8 min-h-fit">
            <div className="md:flex-[2]">
              <div className="md:mt-4 font-bold text-base md:pr-40">
                牧者的話
                <div className="font-normal mt-8 md:mt-16 leading-8">
                  「一甲子的恩、跨世代的夢」是慈光六十周年的主題。一甲子就是60年，對堂會而言不長但也不短。揭開慈光這60年歷程，是充滿挑戰但也滿載神的恩典篇章；又是在使命傳承下激發多代攜手同尋的天國夢。
                </div>
              </div>
            </div>
            <div className="md:flex-[3]">
              <div className="md:h-96 h-64">
                <Carousel
                  theme={{
                    scrollContainer: {
                      base: "flex h-full snap-mandatory !overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
                      snap: "snap-x",
                    },
                  }}
                >
                  <img
                    alt="..."
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  />
                  <img
                    alt="..."
                    src={source4}
                    className="h-full object-contain"
                  />
                  <img
                    alt="..."
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  />
                  <img
                    alt="..."
                    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                  />
                  <img
                    alt="..."
                    src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                  />
                </Carousel>
              </div>
              <div className="w-full pb-4 mt-4 flex flex-row justify-end items-center">
                <a
                  href="https://drive.google.com/drive/folders/11Emhan3J-vdUOF_tlsxr8NaWctCqBTPw?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center text-primary">查看更多照片(歡迎下載)</div>
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

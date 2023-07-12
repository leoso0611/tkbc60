"use client";

import Pagetitle from "components/pagetitle";

import { Carousel } from "flowbite-react";

import Tkbc1 from "assets/slideshowPhotos/TKBC1.jpg";
import Tkbc2 from "assets/slideshowPhotos/TKBC2.jpg";
import Tkbc3 from "assets/slideshowPhotos/TKBC3.jpg";
import Tkbc4 from "assets/slideshowPhotos/TKBC4.jpg";
import Tkbc5 from "assets/slideshowPhotos/TKBC5.jpg";
import Tkbc6 from "assets/slideshowPhotos/TKBC6.jpg";
import Tkbc7 from "assets/slideshowPhotos/TKBC7.jpg";
import Tkbc8 from "assets/slideshowPhotos/TKBC8.jpg";
import Tkbc9 from "assets/slideshowPhotos/TKBC9.jpg";

function About() {
  const photos = [
    Tkbc1,
    Tkbc2,
    Tkbc3,
    Tkbc4,
    Tkbc5,
    Tkbc6,
    Tkbc7,
    Tkbc8,
    Tkbc9,
  ];
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
                    root: {
                      base: "relative h-full w-full bg-primary",
                    },
                    scrollContainer: {
                      base: "flex h-full snap-mandatory !overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
                      snap: "snap-x",
                    },
                  }}
                >
                  {photos.map((item, idx) => (
                    <img
                      key={idx}
                      alt={`tkcb${idx}`}
                      src={item}
                      className="h-full object-contain"
                    />
                  ))}
                </Carousel>
              </div>
              <div className="w-full pb-4 mt-4 flex flex-row justify-end items-center">
                <a
                  href="https://photos.app.goo.gl/3yKHJX6RWGZghS1o8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center text-primary underline">
                    查看更多照片(歡迎下載)
                  </div>
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

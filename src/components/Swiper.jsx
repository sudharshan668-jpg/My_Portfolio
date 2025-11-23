import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { certifications } from "./Constants";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Loader from "./Loader";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CertificationsCarousel() {
  return (
    <section className="py-16 Desktop:pl-[17rem] flex items-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>

        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          navigation={true}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          spaceBetween={24}
          slidesPerView={1}
          allowTouchMove={true}
          simulateTouch={true}
          touchRatio={1}
          grabCursor={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10 !touch-pan-y"
        >
          {certifications.map((cert, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-1/2 w-[21rem] p-6 rounded-2xl border 
                bg-white/70 dark:bg-white/5 
                border-gray-300 dark:border-white/10
                backdrop-blur-md
                shadow-[0_0_20px_rgba(0,0,0,0.05)]
                dark:shadow-[0_0_25px_rgba(255,255,255,0.05)]
                transition-all duration-300 
                hover:scale-[1.02] hover:shadow-lg 
                dark:hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]
                flex flex-col justify-between"
              >
                <div>
                  {() => {
                    if (cert.image.indexOf("UI_UX") !== -1) {
                      cert.image && (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-32 object-contain mb-4"
                        />
                      );
                    }
                  }}

                  <h3
                    className="text-xl font-semibold 
                    text-gray-900 dark:text-white"
                  >
                    {cert.title}
                  </h3>

                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.date}
                  </p>
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-black dark:text-white hover:underline inline-flex items-center gap-1"
                  >
                    View Certificate
                    <ArrowUpRightIcon
                      className="w-4 h-16 text-black dark:text-white"
                      textAnchor="end"
                    />
                  </a>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

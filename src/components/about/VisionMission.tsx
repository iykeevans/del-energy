"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const VisionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="50"
    viewBox="0 0 60 50"
    fill="none"
  >
    <path
      d="M59.12 31.41L49.4475 5.6875C49.445 5.6825 49.445 5.6775 49.4425 5.6725L49.44 5.67C48.165 2.2775 44.8725 0 41.25 0C37.6275 0 34.335 2.2775 33.0575 5.6725C32.6875 6.6575 32.5 7.695 32.5 8.75V20H27.5V8.75C27.5 3.925 23.575 0 18.75 0C15.1275 0 11.835 2.2775 10.5575 5.6725C10.555 5.6775 10.555 5.6825 10.5525 5.6875L0.88 31.4025L0.8775 31.405C0.295 32.9575 0 34.585 0 36.25C0 43.8325 6.17 50 13.75 50C21.33 50 27.5 43.8325 27.5 36.25V35H32.5V36.25C32.5 43.8325 38.67 50 46.25 50C53.83 50 60 43.8325 60 36.25C60 34.585 59.705 32.9575 59.12 31.41ZM13.75 45C8.925 45 5 41.075 5 36.25C5 35.19 5.1875 34.1525 5.5575 33.17C6.8325 29.78 10.125 27.5 13.75 27.5C18.575 27.5 22.5 31.425 22.5 36.25C22.5 41.075 18.575 45 13.75 45ZM46.25 45C41.425 45 37.5 41.075 37.5 36.25C37.5 31.425 41.425 27.5 46.25 27.5C49.875 27.5 53.1675 29.78 54.4425 33.17C54.8125 34.1525 55 35.19 55 36.25C55 41.075 51.075 45 46.25 45Z"
      fill="#00B050"
    />
  </svg>
);

const MissionIcon = () => (
  <svg
    width="51"
    height="50"
    viewBox="0 0 51 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M49.7506 1.0259C49.7059 0.624172 49.3756 0.293781 48.9738 0.249149C45.5454 -0.161516 42.1349 -0.0633176 38.8314 0.534864C31.9262 1.71878 25.0994 5.47106 19.8055 10.5881C19.3166 11.0535 18.1505 12.1546 17.6806 12.6059C14.8939 15.8273 11.682 20.0946 9.81498 23.7038C9.54563 24.2506 9.81124 24.6657 10.2703 25.0608C10.6988 25.4894 11.5202 26.3018 12.5648 27.3465C16.5579 31.3494 20.9179 35.7078 24.9392 39.73L25.2428 40.0335C25.6664 40.4663 26.2699 40.2723 26.707 39.962C28.7873 38.8014 31.6353 37.0336 34.6352 34.6051C44.7567 26.6782 51.5398 14.0471 49.7506 1.0259ZM38.1351 22.0073C33.7263 26.5147 25.8215 23.249 25.8946 16.9359C25.8356 10.6153 33.6999 7.35506 38.1351 11.8649C40.9385 14.6594 40.9385 19.2128 38.1351 22.0073Z"
      fill="#00B050"
    />
    <path
      d="M1.69949 26.0967C1.73518 26.0967 1.77087 26.0967 1.80662 26.0878L8.2081 25.311C7.73144 24.4063 7.89673 23.311 8.45812 22.4629C8.90448 21.6415 9.63659 20.3826 10.6544 18.838C12.3426 16.2054 14.425 13.6901 16.422 11.3472C16.422 11.3472 17.7077 10.124 17.7077 10.124C7.0076 10.0175 1.53053 19.4234 0.824677 25.0701C0.722074 25.5858 1.16547 26.1138 1.69949 26.0967Z"
      fill="#00B050"
    />
    <path
      d="M35.7603 35.9893C33.2158 38.0518 30.4659 39.9089 27.5732 41.5249C26.7499 42.0896 25.6001 42.2879 24.6894 41.7927C24.6894 41.7927 23.9127 48.1943 23.9127 48.1943C23.8366 48.7036 24.2747 49.2069 24.7966 49.1942C26.4832 48.9475 34.0832 47.4221 37.9834 40.1143C39.2058 37.8213 39.9227 34.7442 39.8851 32.2751C38.585 33.5762 37.2389 34.7939 35.7603 35.9893Z"
      fill="#00B050"
    />
    <path
      d="M20.0644 37.3817C17.4044 34.7146 14.3415 31.6553 11.7255 29.0338L11.1184 30.2659C10.6095 31.2927 10.8058 32.5337 11.6183 33.3462L16.6538 38.3817C17.4727 39.194 18.7142 39.4011 19.734 38.8817L20.9661 38.2746C20.6681 37.9777 20.3768 37.6819 20.0644 37.3817Z"
      fill="#00B050"
    />
    <path
      d="M11.7168 38.3189C5.54764 32.8294 0.0927454 43.6554 0.00315219 49.0506C-0.043418 49.564 0.433337 50.0424 0.949416 49.997C6.32899 49.9065 17.1285 44.4814 11.7168 38.3189Z"
      fill="#00B050"
    />
    <path
      d="M33.064 11.5524C25.9671 11.7372 25.9232 22.1155 33.0641 22.3199C40.2072 22.1107 40.1607 11.7369 33.064 11.5524Z"
      fill="#00B050"
    />
  </svg>
);

export function VisionMission() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 lg:px-12 lg:py-24">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto max-w-(--del-max-screen-width) flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10"
      >
        {/* Vision Card */}
        <motion.div
          variants={fadeInUp}
          className="flex-1 border-[1.5px] border-del-primary rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-[60px] flex flex-col min-h-[280px] sm:min-h-[350px] lg:min-h-[450px]"
        >
          <div>
            <VisionIcon />
          </div>
          <div className="mt-auto pt-8 sm:pt-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-medium leading-tight lg:leading-[56px] tracking-[-0.4px] text-[#f3f3f3]">
              Vision
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#f3f3f3] leading-relaxed">
              To make clean, uninterrupted power a daily reality across Nigeria
              and West Africa.
            </p>
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          variants={fadeInUp}
          className="flex-1 border-[1.5px] border-del-primary rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-[60px] flex flex-col min-h-[280px] sm:min-h-[350px] lg:min-h-[450px]"
        >
          <div>
            <MissionIcon />
          </div>
          <div className="mt-auto pt-8 sm:pt-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-medium leading-tight lg:leading-[56px] tracking-[-0.4px] text-[#f3f3f3]">
              Mission
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#f3f3f3] leading-relaxed">
              To build and operate the infrastructure that makes reliable,
              affordable energy flow to where it&apos;s needed.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

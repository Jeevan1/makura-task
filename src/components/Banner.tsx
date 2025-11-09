import { useEffect, useState } from "react";
import Badge from "../components/ui/Badge";
import { Link } from "react-router";
import { Button } from "./ui/Button";

type BannerProps = {
  id: number;
  title: string;
};

const bannerList: BannerProps[] = [
  {
    id: 1,
    title: "Verifying and Onboarding customer quickly",
  },
  {
    id: 2,
    title: "Move money instantly",
  },
  {
    id: 3,
    title: "Automate Recurring Payment",
  },
  {
    id: 4,
    title: "Process Account to Account Transfer Effortlessly",
  },
  {
    id: 5,
    title: "Easily Affordability Check",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="bg-dark min-h-[calc(100vh-80px)] flex text-white relative overflow-hidden pt-[100px] pb-[100px] lg:pt-[124px] lg:pb-[132px] before:bg-dark before:absolute before:top-0 before:left-0 before:w-full before:h-[100px] before:-z-1 after:bg-dark after:absolute after:bottom-0 after:left-0 after:w-full after:h-[100px] after:-z-1"
      style={{
        background:
          'url("/assets/images/baner/banner-bg.png") left center / cover no-repeat',
      }}
    >
      <div className="container flex-1">
        <div className="flex h-full flex-col items-center lg:flex-row justify-start gap-9 lg:gap-0">
          {/* Banner details */}
          <div className="w-full lg:w-3/5 z-1">
            {/* Badge */}
            <Badge
              icon="/assets/images/icons/trust.svg"
              title="Delivering Trust"
            />

            {/* Title and list */}
            <div>
              <h1 className="text-white opacity-100 transform-none leading-[72px] text-4xl font-normal -tracking-[1px]">
                Finconex can help you to
              </h1>
              <div className="opacity-100 transform-none">
                <ul className="relative h-48 w-full min-w-4xl overflow-hidden">
                  {bannerList.map((item, index) => (
                    <li
                      key={item.id}
                      className={`text-[4rem] font-bold text-primary leading-19 -tracking-[1px] absolute transition-all duration-700 ease-in-out
                            ${
                              index === currentIndex
                                ? "opacity-100 translate-y-0"
                                : index ===
                                  (currentIndex - 1 + bannerList.length) %
                                    bannerList.length
                                ? "opacity-0 -translate-y-40"
                                : "opacity-0 translate-y-40"
                            }`}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Features */}
            <div className="opacity-100 transform-none flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <img
                  alt="banner"
                  src="/assets/images/icons/feature/feature-1.svg"
                  className="h-5 w-5 object-cover"
                />
                <span>Without hassle</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  alt="banner"
                  src="/assets/images/icons/feature/feature-2.svg"
                  className="h-5 w-5 object-cover"
                />
                <span>Without costly fee</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  alt="banner"
                  src="/assets/images/icons/feature/feature-3.svg"
                  className="h-5 w-5 object-cover"
                />
                <span>With speed you deserve</span>
              </div>
            </div>

            <p className="opacity-100 transform-none mt-4">
              Your trusted, secured and transparent Partner in navigating Open
              Banking Opportunities in the Kingdom of Bahrain, Under CBB
              Guidelines.
            </p>

            <Link to="#contact" className="mt-8 inline-block">
              <Button className="button-primary">Get In Touch With Us</Button>
            </Link>
          </div>

          {/* Banner image and elements */}
          <div className="relative w-ful lg:w-1/2 flex justify-center pt-8 md:pt-0 lg:absolute right-0 -bottom-3 lg:max-w-[804px]">
            <img
              alt="Finconex App Interface"
              className="lg:max-w-[804px] w-[498px] h-[590px] object-cover z-1"
              src="/assets/images/baner/banner-img.png"
            />

            <div
              className="absolute w-full h-full -top-24 -left-10 z-0"
              style={{
                backgroundImage: 'url("/assets/images/baner/circle.svg")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />

            {/* element-1  */}
            <Badge
              icon="/assets/images/icons/bank.svg"
              title="Your bank was successfully connected"
              className="absolute gap-4 h-auto w-[330px] -top-6 left-[35%] text-xl z-1 backdrop-blur-md"
              iconSize="md"
            />

            {/* element-2  */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 backdrop-blur-sm z-1 ">
              <img
                alt="banner element 2"
                src="/assets/images/baner/banner-element-2.svg"
                className="w-48.5 object-cover"
              />
            </div>

            {/* element-3  */}
            <div className="absolute -bottom-10 left-10 transform -translate-y-1/2 backdrop-blur-sm z-1 ">
              <img
                alt="banner element 3"
                src="/assets/images/baner/banner-element-3.svg"
                className="w-53.5 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

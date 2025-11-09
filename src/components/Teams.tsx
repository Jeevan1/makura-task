import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import Badge from "./ui/Badge";
import { Button } from "./ui/Button";
import Slider from "react-slick";

type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Faisal Yaqoob Alhamer",
    position: "Chairman",
    image: "/assets/images/team/team-1.jpg",
  },
  {
    id: 2,
    name: "Abdulhakeem Al Mutawa",
    position: "Board of Director",
    image: "/assets/images/team/team-2.jpg",
  },
  {
    id: 3,
    name: "Ibrahim Abdulla Alhamer",
    position: "Board of Director",
    image: "/assets/images/team/team-3.jpg",
  },
  {
    id: 4,
    name: "Khalil Ismaeel Khalil Al Meer",
    position: "Board of Director",
    image: "/assets/images/team/team-4.jpg",
  },
  {
    id: 5,
    name: "Devesh Vijay",
    position: "Board of Director",
    image: "/assets/images/team/team-5.png",
  },
  {
    id: 6,
    name: "Ibrahim Abdulla Alhamer",
    position: "Board of Director",
    image: "/assets/images/team/team-3.jpg",
  },
];

const Teams = () => {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section className=" bg-white py-16 lg:py-26 text-dark overflow-hidden">
      <div className="container">
        <div className="space-y-8">
          <Badge
            icon="/assets/images/menu/menu-4.svg"
            title="Teams"
            className="bg-background"
            textStyle="text-dark font-semibold"
          />
          <SectionHeading className="items-end">
            <div className="max-w-xl">
              <h2 className="text-5xl leading-14 font-semibold">
                <span className="italic text-primary">The Minds</span> Behind
                Finconex
              </h2>
            </div>
            <div className="slider-controller md:flex justify-center lg:justify-end gap-3 hidden">
              {/* Prev Button */}
              <Button
                className="group prev-slider w-14 h-14 aspect-square rounded-full flex justify-center items-center bg-background hover:bg-primary transition-colors duration-300"
                onClick={() => {
                  sliderRef.current?.slickPrev();
                }}
              >
                <svg
                  width="24"
                  height="9"
                  viewBox="0 0 24 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-colors duration-300 group-hover:fill-white"
                >
                  <path
                    d="M5.12 8.78C4.45867 7.99067 3.76533 7.308 3.04 6.732C2.336 6.13467 1.58933 5.644 0.8 5.26V3.884C2.37867 3.07333 3.81867 1.88933 5.12 0.331999H7.584C7.34933 0.950666 7.072 1.53733 6.752 2.092C6.45333 2.62533 6.13333 3.13733 5.792 3.628V5.516C6.13333 5.964 6.45333 6.46533 6.752 7.02C7.072 7.55333 7.34933 8.14 7.584 8.78H5.12ZM5.6 5.868L5.632 3.244H23.2V5.868H5.6Z"
                    fill="#EE2248"
                    className="group-hover:fill-white transition-colors duration-300"
                  />
                </svg>
              </Button>

              {/* Next Button */}
              <Button
                className="group next-slider w-14 h-14 aspect-square rounded-full flex justify-center items-center bg-background hover:bg-primary rotate-180 transition-colors duration-300"
                onClick={() => sliderRef.current?.slickNext()}
              >
                <svg
                  width="24"
                  height="9"
                  viewBox="0 0 24 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-colors duration-300 group-hover:fill-white"
                >
                  <path
                    d="M5.12 8.78C4.45867 7.99067 3.76533 7.308 3.04 6.732C2.336 6.13467 1.58933 5.644 0.8 5.26V3.884C2.37867 3.07333 3.81867 1.88933 5.12 0.331999H7.584C7.34933 0.950666 7.072 1.53733 6.752 2.092C6.45333 2.62533 6.13333 3.13733 5.792 3.628V5.516C6.13333 5.964 6.45333 6.46533 6.752 7.02C7.072 7.55333 7.34933 8.14 7.584 8.78H5.12ZM5.6 5.868L5.632 3.244H23.2V5.868H5.6Z"
                    fill="#EE2248"
                    className="group-hover:fill-white transition-colors duration-300"
                  />
                </svg>
              </Button>
            </div>
          </SectionHeading>
        </div>
      </div>
      <div className="team-slider ps-40">
        <Slider {...settings} ref={sliderRef}>
          {teamMembers.map((member) => (
            <div key={member.id} className="cursor-pointer p-4">
              <div className="">
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto w-full h-[380px] object-cover hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-2xl leading-6">
                    {member.name}
                  </h4>
                  <p className="text-gray-500 text-lg mt-4">
                    {member?.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Teams;

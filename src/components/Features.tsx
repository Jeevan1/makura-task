import { useState } from "react";
import SectionHeading from "./SectionHeading";

const featuresData = [
  {
    id: 1,
    title: "Save Time Save Money",
    subtitle: "Fastest onboard users",
    image: "/assets/images/feature/feature-1.png",
    content: {
      id: 1,
      icon: "/assets/images/icons/feature/icon-1.png",
      title: "Save Time Save Money",
      subtitle: "Fastest onboard users",
      description:
        "Why wait days when you can connect in minutes? Our streamlined onboarding process gets you up and running quickly, saving valuable time and resources for what matters most – growing your business.",
    },
  },
  {
    id: 2,
    title: "Money at the Speed of Now",
    subtitle: "Instant A-to-A payments with a bank account",
    image: "/assets/images/feature/feature-2.png",
    content: {
      id: 1,
      icon: "/assets/images/icons/feature/icon-2.png",
      title: "Money at the Speed of Now",
      subtitle: "Instant A-to-A payments with a bank account",
      description:
        "Experience the freedom of immediate transfers. Send and receive funds between accounts instantly, eliminating waiting periods and giving you complete control over your cash flow.",
    },
  },
  {
    id: 3,
    title: "Payments That Work For You",
    subtitle: "Automated Recurring Payment",
    image: "/assets/images/feature/feature-3.png",
    content: {
      id: 1,
      icon: "/assets/images/icons/feature/icon-3.svg",
      title: "Payments That Work For You",
      subtitle: "Automated Recurring Payment",
      description:
        "Perfect for subscription services, installment plans, and invoice payments – set it once and let our system handle the rest, ensuring timely payments without the hassle of manual processing.",
    },
  },
];

const Features = () => {
  const [data] = useState(featuresData);
  const [activeFeature, setActiveFeature] = useState(data[0]);

  const handleFeatureClick = (feature: any) => {
    setActiveFeature(feature);
  };

  return (
    <section className="bg-white [clip-path:polygon(80px_0,100%_0,100%_100%,0_100%,0_80px)] pt-16 lg:pt-26 transform translate-y-px">
      <div className="container">
        <SectionHeading>
          <div className="mb-4 lg:max-w-139 md:mb-0">
            <h2 className="font-semibold text-5xl leading-14 tracking-normal">
              No Middle Man : Just Bank to Bank with{" "}
              <span className="text-primary">Finconex Bahrain</span>
            </h2>
          </div>
          <p className="lg:max-w-147 text-base">
            At Finconex Bahrain, we believe your financial information belongs
            to you. Our platform empowers you to securely share your data with
            licensed providers, unlocking a new generation of financial products
            and services tailored to your needs.
          </p>
        </SectionHeading>
        <div className="pt-14 bg-background p-8 rounded-2xl lg:px-16 lg:py-12">
          <div className="lg:grid lg:grid-cols-3 items-center">
            <div className="col-span-1">
              <ul className="mb-6 lg:mb-0 border-l-2 border-gray-300">
                {data.map((item, index) => (
                  <li
                    key={item.id}
                    className={`ps-5 pb-12 ${
                      activeFeature?.id === item.id
                        ? "border-l-2 border-primary -translate-x-0.5"
                        : ""
                    }`}
                  >
                    <button
                      className="text-left cursor-pointer lg:max-w-[278px] lg:mx-auto font-semibold text-lg lg:text-xl leading-5 lg:leading-6"
                      onClick={() => handleFeatureClick(data[index])}
                    >
                      <h5
                        className={`transition duration-300 ${
                          activeFeature?.id === item.id
                            ? "text-primary"
                            : "text-dark/60"
                        }`}
                      >
                        {item.title}
                      </h5>
                      <p
                        className={`hidden lg:block lg:text-[18px] mt-2 ${
                          activeFeature?.id === item.id
                            ? "text-dark"
                            : "text-dark/40"
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2">
              <div className="">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-13 items-center">
                  <div
                    className={`md:order-2 flex flex-col gap-4 transition duration-300`}
                  >
                    <img
                      alt={activeFeature?.content?.title}
                      className="max-w-14"
                      src={activeFeature?.content?.icon}
                    />
                    <h4 className="font-semibold text-2xl">
                      {activeFeature?.content?.title}
                    </h4>
                    <strong className="text-[18px] text-dark/50">
                      {activeFeature?.content?.subtitle}
                    </strong>
                    <p className="text-md">
                      {activeFeature?.content?.description}
                    </p>
                  </div>
                  <div className="md:order-1 w-[348px] rounded-lg overflow-hidden">
                    <img
                      alt=""
                      className="w-[348px] h-[386px] object-cover"
                      src={activeFeature?.image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

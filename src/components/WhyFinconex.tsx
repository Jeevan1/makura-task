const featuresData = [
  {
    id: 1,
    title: "Protect consumers and businesses",
    subtitle: "with multiple layers of security",
  },
  {
    id: 2,
    title: "Foster innovation",
    subtitle: "through seamless connectivity",
  },
  {
    id: 3,
    title: "Ensure a level playing field",
    subtitle: "for all participants in the financial ecosystem",
  },
];

const WhyFinconex = () => {
  return (
    <section
      className="relative bg-white py-16 lg:py-26 overflow-hidden"
      id="why-finconex"
    >
      <div className="absolute right-0 bottom-0 h-87 transform translate-x-3 translate-y-8">
        <img
          src="/assets/images/why/bg.svg"
          alt="finconex"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div
            className="min-h-[350px]"
            style={{
              backgroundImage: 'url("/assets/images/why/why-finconex.png")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
              clipPath:
                "polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0% 100%)",
            }}
          />
          <div className="lg:py-8 space-y-4">
            <img
              src="/favicon.png"
              alt="finconex"
              className="w-16 h-16 object-cover"
            />
            <h3 className="font-semibold text-[32px] leading-tight text-dark">
              Finconex Bahrain is designed to
            </h3>
            <p className="text-base text-dark/70">
              Our streamlined onboarding process gets you up and running
              quickly, saving valuable time and resources for what matters most.
            </p>
            <div>
              {featuresData.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-4 ${
                    index !== featuresData.length - 1
                      ? "border-b border-gray-300 py-2 md:py-4"
                      : ""
                  }`}
                >
                  <span className="text-primary text-[56px] italic font-bold">
                    {index + 1}
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-xl leading-snug text-dark">
                      {item.title}
                    </h4>
                    <p className="text-lg text-dark/70">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFinconex;

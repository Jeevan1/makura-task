import Badge from "./ui/Badge";

const keyAspects = [
  {
    icon: "/assets/images/icons/aspects/icon-1.png",
    title: "Robust Security Standards",
    description: "that protect your data at every step",
  },
  {
    icon: "/assets/images/icons/aspects/icon-2.png",
    title: "Stringent Data Privacy",
    description: "measures that put your information security first",
  },
  {
    icon: "/assets/images/icons/aspects/icon-3.png",
    title: "Clear Guidelines",
    description: "for customer authentication and communication",
  },
];

const KeyAspects = () => {
  return (
    <section className="bg-white pt-16 lg:pt-26 ">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8 mb-8">
          <Badge
            icon="/assets/images/icons/trust.svg"
            title="Delivering Trust"
            className="bg-background"
            textStyle="text-dark font-semibold"
          />
          <p className="font-semibold text-2xl leading-8">
            Finconex Bahrain follow the Key aspects of Bahrain's Open Banking
            Framework include :
          </p>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl p-8 lg:px-10 lg:py-8 lg:max-w-[90%] mx-auto">
            <div className="absolute inset-0 bg-background rounded-2xl"></div>
            <div className="relative z-3">
              <div className="lg:grid lg:grid-cols-3 items-center gap-6 pe-6">
                {keyAspects.map((item, index) => (
                  <div
                    className={`mb-6 ${
                      index !== keyAspects.length - 1
                        ? "border-r border-gray-300"
                        : ""
                    }`}
                    key={index}
                  >
                    <img
                      alt=""
                      className="mb-4 h-10 w-10 object-contain"
                      src={item.icon}
                    />
                    <h5 className="font-semibold text-xl text-black/90">
                      {item.title}
                    </h5>
                    <p className="lg:text-[18px] mt-3 text-gray-700">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center pt-6 border-t border-solid border-gray-300 gap-2 sm:gap-4 flex-col sm:flex-row">
                <img
                  alt=""
                  className="mix-blend-multiply w-37 h-6 object-cover"
                  src="/assets/images/aspects/bank.png"
                />
                <strong>all overseen by the CBB</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyAspects;

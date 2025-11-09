import Badge from "./ui/Badge";
import SectionHeading from "./SectionHeading";

const Vison = () => {
  return (
    <section className="pt-16 lg:py-26 text-dark" id="vision">
      <div className="container">
        <div
          className="bg-white p-6 md:p-12 lg:p-20"
          style={{
            clipPath:
              "polygon(0px 0px, calc(100% - 60px) 0px, 100% 60px, 100% 100%, 0% 100%, 0px 0px)",
          }}
        >
          <SectionHeading>
            <div className="w-full">
              <Badge
                icon="/assets/images/menu/menu-3.svg"
                title="Vision"
                className="bg-background"
                textStyle="text-dark font-semibold"
              />
              <h2 className="text-3xl md:text-5xl leading-snug md:leading-14 font-semibold mt-4 md:mt-8">
                Your Gateway to the Evolving{" "}
                <span className="italic text-primary">
                  Financial Ecosystem in the Kingdom.
                </span>
              </h2>
            </div>
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
            <div className="flex gap-6">
              <img
                src="/assets/icons/quote.svg"
                alt="quote"
                className="h-12 w-12 object-cover"
              />
              <p className="text-lg lg:text-[22px] text-dark/70">
                We envision a future where financial services are more
                intuitive, accessible, and tailored to the unique needs of every
                individual and business in Bahrain. As Finconex prepares to
                launch, we are dedicated to being a key enabler of this future,
                fostering innovation, and contributing to the Kingdom's
                reputation as a leading FinTech hub.
              </p>
            </div>
            <div
              className="min-h-90 md:min-h-80 w-full"
              style={{
                backgroundImage: 'url("/assets/images/visons/vison-img.png")',
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100%",
                width: "100%",
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 60px 100%, 0% calc(100% - 60px))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vison;

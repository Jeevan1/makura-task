import ContactForm from "./form/ContactForm";
import SectionHeading from "./SectionHeading";
import Badge from "./ui/Badge";

const ContactUs = () => {
  return (
    <section className="border-b border-solid border-background/10">
      <div className="lg:pe-40">
        <div className="grid grid-cols-1 md:grid-cols-5 h-full">
          <div className="col-span-2 h-fit hidden md:block">
            <img
              src="/assets/images/contact/contact-img.png"
              alt="contact"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 flex flex-col items-start justify-center py-16 px-4 lg:px-0 lg:ps-14 lg:py-26 text-white">
            <SectionHeading className="items-end">
              <div className="max-w-lg">
                <Badge
                  icon="/assets/images/menu/menu-4.svg"
                  title="Teams"
                  className="bg-background"
                  textStyle="text-dark font-semibold"
                />
                <h2 className="text-3xl lg:text-5xl leading-snug lg:leading-14 font-semibold mt-4 lg:mt-8">
                  Experience the{" "}
                  <span className="italic text-primary">Future of Banking</span>
                </h2>
                <p className="mt-6">
                  Ready to experience the future of banking? We're here to
                  answer your questions and help you get started.
                </p>
              </div>
            </SectionHeading>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

import { Link } from "react-router";
import SectionHeading from "./SectionHeading";
import Badge from "./ui/Badge";
import { Button } from "./ui/Button";

type ComplianceCard = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const complianceCards: ComplianceCard[] = [
  {
    id: 1,
    title: "Security and Compliance",
    description: "The Cornerstones of Finconex’s Open Banking Services.",
    image: "/assets/images/compliance/compliance-1.png",
  },
  {
    id: 2,
    title: "Built on Trust",
    description: "Finconex and the CBB Open Banking Framework.",
    image: "/assets/images/compliance/compliance-2.png",
  },
  {
    id: 3,
    title: "Your Data, Secured",
    description: "Our Adherence to Bahrain’s Regulatory Standards.",
    image: "/assets/images/compliance/compliance-3.png",
  },
];

const Compliance = () => {
  return (
    <section className="pt-16 lg:pt-26 text-white">
      <div className="container">
        <div className="space-y-8">
          <Badge icon="/assets/icons/compliance.svg" title="Compliance" />
          <SectionHeading>
            <div className="max-w-3xl">
              <h2 className="text-5xl leading-14 font-semibold">
                Central Bank of Bahrain{" "}
                <span className="italic">Compliance &amp; Security</span>
              </h2>
            </div>
            <Link to="#contact-us" className="button-primary">
              <Button>Contact Us</Button>
            </Link>
          </SectionHeading>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {complianceCards.map((item) => (
            <div key={item.id} className="text-dark">
              <div className=" bg-white rounded-2xl md:h-full md:flex flex-col justify-between border border-solid border-transparent hover:border-background">
                <div className="pt-9 lg:pr-12 px-8">
                  <h4 className="mb-3 font-bold text-2xl">{item.title}</h4>
                  <p className="text-lg text-dark/70">{item.description}</p>
                </div>
                <div className="rounded-[14px] p-1 mt-8">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliance;

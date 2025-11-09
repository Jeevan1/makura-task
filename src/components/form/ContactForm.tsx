import { Button } from "../ui/Button";
import Input from "../ui/Input";

const ContactForm = () => {
  return (
    <form className="w-full">
      <div className="grid gap-4.5 md:grid-cols-2">
        <Input name="name" label="Full Name" type="text" />
        <Input name="email" label="Email Address" type="email" />
        <Input name="company" label="Company (optional)" type="text" />
        <Input name="Address" label="Address (optional)" type="text" />
        <Input
          name="message"
          label="Message"
          type="textarea"
          width="sm:col-span-2"
        />
      </div>
      <Button className="mt-4.5">Send Message</Button>
    </form>
  );
};

export default ContactForm;

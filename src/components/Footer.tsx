const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8 lg:py-16">
      <div className="container">
        <div className="flex items-start justify-between">
          <div className="space-y-6 inline-block max-w-md">
            <img
              src="/logo.png"
              alt="finconex"
              className="w-auto max-h-9 object-cover"
            />
            <p className="text-base ">
              As Finconex prepares to launch, we are dedicated to being a key
              enabler of this future, fostering innovation, and contributing to
              the Kingdom's reputation as a leading FinTech hub.
            </p>
            <p className="text-sm text-gray-400">© 2025. Finconex pty.</p>
          </div>
          <div className="flex flex-col flex-1 items-end">
            <div className="max-w-sm">
              <div>
                <p>Call Us</p>
                <p className="text-primary">+786 374 6686</p>
              </div>
              <div>
                <p>Visit Us</p>
                <p className="text-primary">
                  Building 96, Road 1702, Block 317,
                  <br /> Diplomatic Area, Manama, Bahrain
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const SectionHeading = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`md:flex justify-between items-center mb-8 md:mb-16 space-y-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionHeading;

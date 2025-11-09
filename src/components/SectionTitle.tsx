const SectionTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`md:flex justify-between items-end mb-8 md:mb-16 ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionTitle;

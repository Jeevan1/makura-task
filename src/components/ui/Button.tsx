export const Button = ({
  variant = "primary",
  className,
  children,
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  [key: string]: any;
}) => {
  const defautStyle = "cursor-pointer";

  return (
    <button className={`${defautStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

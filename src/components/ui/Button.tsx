interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary";
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const baseStyle =
    "cursor-pointer [clip-path:polygon(0_0,calc(100%-15px)_0,100%_15px,100%_100%,0_100%,0_0)] text-base font-semibold leading-[100%] relative px-5 py-3 transition-all duration-300 ease-in-out";

  const varients = {
    primary:
      baseStyle +
      " text-[var(--color-white)] bg-[var(--color-primary)] hover:bg-[var(--color-neon)]",
  };

  return (
    <button className={`${varients[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

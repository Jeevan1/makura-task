const Badge = ({
  icon,
  title,
  className = "bg-white/10",
  textStyle,
  iconSize = "sm",
}: {
  icon: string;
  title: string;
  iconSize?: "sm" | "md" | "lg";
  textStyle?: string;
  className?: string;
}) => {
  const iconSizeClass =
    iconSize === "sm" ? "w-5 h-5" : iconSize === "md" ? "w-6 h-6" : "w-8 h-8";
  return (
    <div
      className={`inline-flex text-white py-2 px-4 items-center gap-2 rounded-[36px] backdrop:blur-sm text-base ${className}`}
    >
      <img alt={title} src={icon} className={`${iconSizeClass}`} />
      <span className={textStyle}>{title}</span>
    </div>
  );
};

export default Badge;

const Title = ({
  text,
  primaryText,
}: {
  text: string;
  primaryText: string;
}) => {
  return (
    <div className="max-w-3xl">
      <h2 className="text-5xl leading-14 font-semibold">
        {primaryText} {text}
        <span className="italic">Compliance &amp; Security</span>
      </h2>
    </div>
  );
};

export default Title;

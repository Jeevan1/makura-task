import type React from "react";

type InputProps = {
  name: string;
  label: string;
  type: string;
  value?: string;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  width?: string;
};

const Input = ({ name, label, type, value, onChange, width }: InputProps) => {
  return (
    <div className={`relative w-full ${width}`}>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          rows={4}
          onChange={onChange}
          placeholder=" "
          className="peer block w-full rounded-sm border border-background/10 bg-background/10 px-3 py-3 pb- text-sm text-whiteplaceholder-transparent focus:border-background/10 focus:ring-1 focus:ring-background/10 focus:outline-none focus:bg-transparent"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          className="peer block w-full rounded-sm border border-background/10 bg-background/10 px-3 py-3 pb- text-sm text-whiteplaceholder-transparent focus:border-background/10 focus:ring-1 focus:ring-background/10 focus:outline-none focus:bg-transparent"
        />
      )}
      <label
        htmlFor={name}
        className="absolute cursor-text left-3 -translate-y-1/2 px-2 text-white text-md transition-all duration-200
                   peer-placeholder-shown:top-5
                   peer-placeholder-shown:text-white
                   peer-placeholder-shown:text-base
                   peer-focus:top-0
                   peer-focus:bg-dark
                   peer-focus:text-white
                   peer-focus:text-sm
                   
"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;

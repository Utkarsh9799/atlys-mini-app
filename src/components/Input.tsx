import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  // for use cases like forgot your password cta
  action?: {
    actionText: string;
    callback: () => void;
  };
}

const Input = (props: InputProps) => {
  const { type, label, action, className, ...propsToFwd } = props;

  return (
    <div className={`${className ?? ""} w-full`}>
      <div className="flex justify-between items-start">
        {label ? <div className="text-title text-sm mb-2">{label}</div> : null}
        {action ? (
          <button
            type="button"
            onClick={action.callback}
            className="text-[12px] text-title hover:cursor-pointer"
          >
            {action.actionText}
          </button>
        ) : null}
      </div>
      <input
        type={type}
        {...propsToFwd}
        className="w-full border-[#35373B] border-[1.5px] bg-transparent rounded p-2 text-title focus:outline-none placeholder-subtitle"
      />
    </div>
  );
};

export default Input;

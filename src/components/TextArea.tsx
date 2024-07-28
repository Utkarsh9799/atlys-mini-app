import React from "react";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const TextArea = (props: TextAreaProps) => {
  const { className, ...propsToFwd } = props;

  return (
    <div className={`${className ?? ""} w-full relative`}>
      <textarea
        {...propsToFwd}
        className="w-full bg-[#191920] p-4 pl-20 rounded-lg resize-none text-title focus:outline-none placeholder-subtitle"
      />
      <div className="absolute top-[20%] left-10 -translate-x-1/2 h-12 w-12 rounded-full bg-[#27292D] hover:cursor-pointer flex items-center justify-center">
        lmao
      </div>
    </div>
  );
};

export default TextArea;

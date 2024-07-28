import { ReactNode } from "react";

interface PostProps {
  children: ReactNode;
  className?: string;
}

const Post = (props: PostProps) => {
  const { children, className } = props;

  return (
    <div
      className={`w-full border-[#35373B] border-2 px-5 py-6 bg-[#27292D] rounded-lg ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
};

export default Post;

import { useState } from "react";

import { DUMMY_POSTS } from "./dummyPosts";
import { ChatBubble, Dots } from "./assets/icons";
import PostEditor from "./PostEditor";

import Form from "../shared/Form";
import Post from "../shared/Post";

import TextAreaWithEmoji from "../../components/TextAreaWithEmoji";
import Modal from "../../components/Modal";

const Header = () => (
  <header className="w-4/5 sm:2/3 lg:w-1/2">
    <h1 className="text-title text-[28px]">Hello Jane</h1>
    <p className="text-subtitle">
      How are you doing today? Would you like to share something with <br /> the
      community 🤗
    </p>
  </header>
);

const MainContent = ({
  posts,
  onActionClick,
}: {
  posts: typeof DUMMY_POSTS;
  onActionClick: () => void;
}) => (
  <main className="w-4/5 sm:2/3 lg:w-1/2 mt-10">
    <section>
      <PostEditor handlePostClick={onActionClick} />
    </section>
    <section>
      {posts.map(({ author, content, createdAt, comments, emoji }, i) => (
        <div key={i} className="mt-4" onClick={onActionClick}>
          <Post className="hover:cursor-pointer">
            <PostHeader
              profileImg={author.profileImg}
              authorName={author.name}
              createdAt={createdAt}
            />
            <TextAreaWithEmoji
              value={content}
              emoji={emoji}
              disabled
              className="mt-5"
            />
            <PostFooter comments={comments} />
          </Post>
        </div>
      ))}
    </section>
  </main>
);

const PostHeader = ({
  profileImg,
  authorName,
  createdAt,
}: {
  profileImg: string;
  authorName: string;
  createdAt: string | number;
}) => (
  <div className="flex justify-between items-center">
    <div className="flex">
      <img src={profileImg} alt="profile" width={44} className="rounded-full" />
      <div className="ml-4">
        <h6 className="text-title">{authorName}</h6>
        <p className="text-subtitle text-sm">{createdAt}</p>
      </div>
    </div>
    <div className="hover:cursor-pointer" role="button">
      <Dots />
    </div>
  </div>
);

const PostFooter = ({ comments }: { comments?: { content: string }[] }) => (
  <div className="flex mt-3">
    <div className="flex hover:cursor-pointer" role="button">
      <ChatBubble />
      {comments?.length ? (
        <span className="text-subtitle ml-2 text-sm">
          {`${comments.length} comment${comments.length > 1 ? "s" : ""}`}
        </span>
      ) : null}
    </div>
  </div>
);

const Home = () => {
  const [posts] = useState(DUMMY_POSTS);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleActionClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="w-full min-h-full">
      <div
        className={`transition-all duration-500 ${
          isModalOpen ? "blur-[2px]" : "blur-none"
        } w-full flex flex-col items-center py-16`}
      >
        <Header />
        <MainContent posts={posts} onActionClick={handleActionClick} />
      </div>
      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <Form closeForm={() => setModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Home;

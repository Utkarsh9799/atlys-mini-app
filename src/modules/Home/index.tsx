import { useState } from "react";
import Post from "../shared/Post";
import { DUMMY_POSTS } from "./dummyPosts";
import { ChatBubble, Dots } from "./assets/icons";
import PostEditor from "./PostEditor";
import TextAreaWithEmoji from "../../components/TextAreaWithEmoji";
import Modal from "../../components/Modal";
import Form from "../shared/Form";

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
        <header className="w-1/2">
          <h1 className="text-title text-[28px]">Hello Jane</h1>
          <p className="text-subtitle">
            How are you doing today? Would you like to share something with{" "}
            <br />
            the community 🤗
          </p>
        </header>
        <main className="w-1/2 mt-10">
          <section>
            <PostEditor handlePostClick={handleActionClick} />
          </section>
          <section>
            {posts.map(({ author, content, createdAt, comments, emoji }, i) => (
              <Post key={i} className="mt-4">
                <div className="flex justify-between items-center">
                  <div className="flex">
                    <img
                      src={author.profileImg}
                      alt="profile"
                      width={44}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h6 className="text-title">{author.name}</h6>
                      <p className="text-subtitle text-sm">{createdAt}</p>
                    </div>
                  </div>
                  <div
                    className="hover:cursor-pointer"
                    onClick={handleActionClick}
                  >
                    <Dots />
                  </div>
                </div>
                <TextAreaWithEmoji
                  value={content}
                  emoji={emoji}
                  disabled
                  className="mt-5"
                />
                <div className="flex mt-3">
                  <div
                    className="flex hover:cursor-pointer"
                    onClick={handleActionClick}
                  >
                    <ChatBubble />
                    {comments?.length ? (
                      <span className="text-subtitle ml-2 text-sm">
                        {`${comments.length} comment${
                          comments.length > 1 ? "s" : ""
                        }`}
                      </span>
                    ) : null}
                  </div>
                </div>
              </Post>
            ))}
          </section>
        </main>
      </div>
      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <Form closeForm={() => setModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Home;

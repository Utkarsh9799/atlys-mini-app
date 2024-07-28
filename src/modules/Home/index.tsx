import { useState } from "react";
import Post from "../shared/Post";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { DUMMY_POSTS } from "./dummyPosts";
import { ChatBubble, Dots } from "./assets/icons";

const Home = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <div className="w-full min-h-full flex flex-col items-center py-16">
      <header className="w-1/2">
        <h1 className="text-title text-[28px]">Hello Jane</h1>
        <p className="text-subtitle">
          How are you doing today? Would you like to share something with <br />
          the community 🤗
        </p>
      </header>
      <main className="w-1/2 mt-10">
        <section>
          <Post>
            <h4 className="text-title text-lg">Create post</h4>
            <TextArea
              className="my-4"
              placeholder="How are you feeling today?"
            />
            <div className="flex justify-end">
              <Button>Post</Button>
            </div>
          </Post>
        </section>
        <section>
          {posts.map(({ author, content, createdAt, comments }, i) => (
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
                <div className="hover:cursor-pointer">
                  <Dots />
                </div>
              </div>
              <TextArea value={content} disabled className="mt-5" />
              <div className="flex mt-3">
                <div className="flex">
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
  );
};

export default Home;

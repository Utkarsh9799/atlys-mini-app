import { useState } from "react";

import Post from "../shared/Post";

import TextAreaWithEmoji from "../../components/TextAreaWithEmoji";
import Button from "../../components/Button";

interface PostEditorProps {
  handlePostClick: () => void;
}

const DEFAULT_EMOJI = "💬";

const PostEditor = (props: PostEditorProps) => {
  const { handlePostClick } = props;
  const [content, setContent] = useState("");
  const [emoji, setEmoji] = useState(DEFAULT_EMOJI);

  return (
    <Post>
      <h4 className="text-title text-lg">Create post</h4>
      <TextAreaWithEmoji
        emoji={emoji}
        isEditMode
        className="my-4"
        placeholder="How are you feeling today?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        updateEmoji={setEmoji}
      />
      <div className="flex justify-end">
        <Button onClick={handlePostClick}>Post</Button>
      </div>
    </Post>
  );
};

export default PostEditor;

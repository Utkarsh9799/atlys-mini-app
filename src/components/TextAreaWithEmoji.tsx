import EmojiPicker from "@emoji-mart/react";
import React, { useState } from "react";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  emoji: string;
  isEditMode?: boolean;
  updateEmoji?: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

const TextAreaWithEmoji = (props: TextAreaProps) => {
  const { className, isEditMode = false, emoji, updateEmoji, ...propsToFwd } = props;
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(emoji);

  const handleEmojiPickerClick = () => {
    if (isEditMode) {
      setShowEmojiPicker((prev) => !prev);
    }
  };

  const handleEmojiSelection = (e: { native: string }) => {
    setSelectedEmoji(e.native);
    if (updateEmoji) {
      updateEmoji(e.native);
    }
  };

  return (
    <div className={`${className ?? ""} w-full relative`}>
      <textarea
        {...propsToFwd}
        className="w-full bg-[#191920] p-4 pl-20 rounded-lg resize-none text-title focus:outline-none placeholder-subtitle"
      />
      <div
        onClick={handleEmojiPickerClick}
        className="absolute top-[20%] left-10 -translate-x-1/2 h-12 w-12 rounded-full bg-[#27292D] hover:cursor-pointer flex items-center justify-center"
      >
        {showEmojiPicker ? (
          <EmojiPicker onEmojiSelect={handleEmojiSelection} />
        ) : (
          <p className="text-lg">{selectedEmoji}</p>
        )}
      </div>
    </div>
  );
};

export default TextAreaWithEmoji;

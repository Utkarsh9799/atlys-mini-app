import EmojiPicker from "@emoji-mart/react";
import React, { useState, ChangeEvent } from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  emoji: string;
  isEditMode?: boolean;
  updateEmoji?: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

const TextAreaWithEmoji: React.FC<TextAreaProps> = ({
  className,
  isEditMode = false,
  emoji,
  updateEmoji,
  ...propsToFwd
}) => {
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

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (propsToFwd.onChange) {
      propsToFwd.onChange(e);
    }
  };

  const containerClasses = `w-full relative ${className ?? ""}`;
  const emojiButtonClasses = `absolute top-[20%] left-10 -translate-x-1/2 h-12 w-12 rounded-full bg-[#27292D] hover:cursor-pointer flex items-center justify-center`;
  const textareaClasses = "w-full bg-[#191920] p-4 pl-20 rounded-lg resize-none text-title focus:outline-none placeholder-subtitle";

  return (
    <div className={containerClasses}>
      <textarea
        {...propsToFwd}
        className={textareaClasses}
        value={propsToFwd.value} // Ensure controlled component
        onChange={handleChange}
      />
      <div
        onClick={handleEmojiPickerClick}
        className={emojiButtonClasses}
        role="button"
        tabIndex={0}
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

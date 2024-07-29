import Author1 from "./assets/author1.png";
import Author2 from "./assets/author2.png";

export interface PostDetails {
  author: {
    name: string;
    profileImg: string;
  };
  createdAt: number | string; // can use epoch Date or ISO
  emoji: string;
  content: string;
  comments?: {
    content: "";
  }[];
}

export const DUMMY_POSTS: PostDetails[] = [
  {
    author: {
      name: "Theresa Webb",
      profileImg: Author1,
    },
    createdAt: '8 mins ago',
    emoji: '🤩',
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: [{ content: "" }],
  },
  {
    author: {
      name: "Marvin McKinney",
      profileImg: Author2,
    },
    createdAt: '11:35pm, 28th Jul',
    emoji: '🥳',
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comments: [{ content: "" }, { content: "" }, { content: "" }],
  },
];

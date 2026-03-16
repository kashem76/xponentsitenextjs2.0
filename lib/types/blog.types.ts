export interface IBlogContentParagraph {
  type: "paragraph";
  text: string;
}

export interface IBlogContentHeading {
  type: "heading";
  text: string;
}

export interface IBlogContentList {
  type: "list";
  items: string[];
}

export type IBlogContent =
  | IBlogContentParagraph
  | IBlogContentHeading
  | IBlogContentList;

export interface IBlog {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: IBlogContent[];
}

export interface IBlogsData {
  blogs: IBlog[];
}

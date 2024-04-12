interface DiscussionData {
  id: number;
  profile: string;
  title: string;
  description: string;
  image: string;
  date: string;
  likes: number;
  dislike: number;
  comments: number;
  clubs: string[];
  commentsContent: string[]; // Add a new property to hold comments content
}

const discussionsData: DiscussionData[] = [
  {
    id: 1,
    profile: "user1",
    title: "Discussion Topic 1",
    description: "Description of discussion topic 1.",
    image: "https://res.cloudinary.com/dabfdxbfj/image/upload/v1689783204/photo-1551288049-bebda4e38f71_nvkosx.jpg",
    date: "2022-04-07",
    likes: 20,
    dislike: 5,
    comments: 15,
    clubs: ["club1", "club2"],
    commentsContent: [
      "Comment 1 for discussion topic 1",
      "Comment 2 for discussion topic 1",
      "Comment 3 for discussion topic 1",
      // Add more comments if needed
    ]
  },
  // Add other discussions with commentsContent array filled similarly
];

export default discussionsData;

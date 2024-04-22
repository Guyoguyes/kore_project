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
  commentData: string[];
  clubs: string[];
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
    commentData: [
      "This new smartphone looks sleek and powerful!",
      "I love how technology makes our lives easier.",
      "Can't wait to try out the latest VR games!",
      "The advancements in AI are truly remarkable.",
      "Technology is changing so fast, it's hard to keep up!"
    ],
    clubs: ["club1", "club2"]
  },
  {
    id: 2,
    profile: "user2",
    title: "Discussion Topic 2",
    description: "Description of discussion topic 2.",
    image: "https://res.cloudinary.com/dabfdxbfj/image/upload/v1686429267/800px-Mt._Ololokwe_Samburu_awr1i1.jpg",
    date: "2022-04-08",
    likes: 15,
    dislike: 3,
    comments: 10,
    commentData: [
      "Exploring new places is so exhilarating!",
      "I wish I could travel the world someday.",
      "The beauty of nature never ceases to amaze me.",
      "Traveling opens your mind and broadens your perspective.",
      "There's nothing like immersing yourself in a different culture."
    ],
    clubs: ["club2", "club3"]
  },
  {
    id: 3,
    profile: "user3",
    title: "Discussion Topic 3",
    description: "Description of discussion topic 3.",
    image: "https://res.cloudinary.com/dabfdxbfj/image/upload/v1700783274/create_me_an_im_1_pvqmnp.png",
    date: "2022-04-09",
    likes: 25,
    dislike: 8,
    comments: 18,
    commentData: [
      "This new smartphone looks sleek and powerful!",
      "I love how technology makes our lives easier.",
      "Can't wait to try out the latest VR games!",
      "The advancements in AI are truly remarkable.",
      "Technology is changing so fast, it's hard to keep up!"
    ],
    clubs: ["club1", "club3"]
  },
  {
    id: 4,
    profile: "user4",
    title: "Discussion Topic 4",
    description: "Description of discussion topic 4.",
    image: "https://res.cloudinary.com/dabfdxbfj/image/upload/v1686428211/IMG_8631_ndwkt2.jpg",
    date: "2022-04-10",
    likes: 18,
    dislike: 4,
    comments: 12,
    commentData: [
      "Exploring new places is so exhilarating!",
      "I wish I could travel the world someday.",
      "The beauty of nature never ceases to amaze me.",
      "Traveling opens your mind and broadens your perspective.",
      "There's nothing like immersing yourself in a different culture."
    ],
    clubs: ["club1"]
  },
  {
    id: 5,
    profile: "user5",
    title: "Discussion Topic 5",
    description: "Description of discussion topic 5.",
    image: "https://res.cloudinary.com/dabfdxbfj/image/upload/v1700783813/I_am_from_north_0_trljgf.png",
    date: "2022-04-11",
    likes: 30,
    dislike: 6,
    comments: 20,
    commentData: [
      "This new smartphone looks sleek and powerful!",
      "I love how technology makes our lives easier.",
      "Can't wait to try out the latest VR games!",
      "The advancements in AI are truly remarkable.",
      "Technology is changing so fast, it's hard to keep up!"
    ],
    clubs: ["club2", "club3"]
  }
];

export default discussionsData
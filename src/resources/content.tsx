import { About, Gallery, Home, Newsletter, Person, Social } from "@/types";


const person: Person = {
  firstName: "Harshul",
  lastName: "Sharma",
  name: `Harshu`,
  role: "Fitness",
  avatar: "/images/avatar.jpg",
  email: "harshulsharma020@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/_hrshul_/",
  }

];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpeg",
  label: "Home",
  title: `${person.name}'s Space`,
  description: `Personal website of ${person.name} — a teen athlete, fitness creator, and storyteller from India.`,
  headline: (
    <>young. driven. balling & breathing fitness. storytelling through sweat and song.</>
  ),
  subline: (
    <>
      hey — i’m <strong>Harshul</strong>, a teen athlete from india who lives for basketball,
      fitness and creative storytelling. i train hard, sing louder, and love collabs that mix
      movement and emotion. <br />
      let’s make something cool together — on court, in the gym, or through the mic.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – Harshul`,
  description: `Meet Harshul, a teen athlete, fitness creator, and storyteller from India.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        hey — i’m <strong>Harshul</strong>. a teen athlete from india who lives for basketball,
        fitness and storytelling. i train hard, sing louder, and create content that mixes real grind
        with creativity. come vibe, hoop, and grow with me.
      </>
    ),
  },

  work: {
    display: true,
    title: "What I Do",
    experiences: [
      {
        company: "Basketball & Fitness",
        timeframe: "2025 - Present",
        role: "Athlete · Trainer · Creator",
        achievements: [
          <>
            create short-form basketball & fitness content — drills, training routines, and motivation-based reels.
          </>,
          <>
            collaborate with athletes and coaches on workouts, challenges, and sports storytelling.
          </>,
        ],
        images: [
          {
            src: "/images/me-fit.jpeg",
            alt: "Harshul playing basketball under lights.",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Storytelling & Music",
        timeframe: "2025 - Present",
        role: "Storyteller · Singer · Hobbyist",
        achievements: [
          <>
            create short narrative and singing clips for social media, blending voice and rhythm with authentic emotion.
          </>,
          <>
            explore songwriting, voice practice, and duet performances with fellow creators.
          </>,
        ],
        images: [
          {
            src: "/images/my-closeup.jpeg",
            alt: "Harshul singing in a small home studio setup.",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },

  studies: {
    display: true,
    title: "Education & Growth",
    institutions: [
      {
        name: "High School Student – India",
        description: (
          <>
            balancing academics with basketball training, fitness goals, and creative storytelling.
          </>
        ),
      },
      {
        name: "Self-Learning",
        description: (
          <>
            learning content creation, editing, and personal branding through online resources and real practice.
          </>
        ),
      },
    ],
  },

  technical: {
    display: true,
    title: "Skills & Focus Areas",
    skills: [
      {
        title: "Basketball & Performance",
        description: (
          <>
            shooting drills, ball handling, stamina & game highlights — focused on steady improvement.
          </>
        ),
        tags: [
          { name: "Basketball", icon: "basketball" },
          { name: "Training", icon: "dumbbell" },
        ],
        images: [
          {
            src: "/images/new-fit.jpeg",
            alt: "Basketball shooting drill session.",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Fitness & Conditioning",
        description: (
          <>
            bodyweight training, endurance, and beginner-to-intermediate programming for youth athletes.
          </>
        ),
        tags: [
          { name: "Fitness", icon: "fitness" },
          { name: "Bodyweight", icon: "strength" },
        ],
        images: [
          {
            src: "/images/my-pose.jpeg",
            alt: "Harshul doing bodyweight training outdoors.",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Storytelling & Music",
        description: (
          <>
            voice recording, short-form content writing, and hobby singing — using sound to tell human stories.
          </>
        ),
        tags: [
          { name: "Storytelling", icon: "mic" },
          { name: "Music", icon: "music" },
        ],
        images: [
          {
            src: "/images/mygroup.jpeg",
            alt: "Harshul recording a voice snippet for a reel.",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};






const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/my-pose.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/itsme.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/mygroup.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/me-fit.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/avatar-old.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/my-closeup.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/bw-horizontal-chest.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/story.jpeg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, gallery };

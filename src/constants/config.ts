type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Johnson ",
    fullName: "Johnson Olayemi",
    email: "ogunyankinjohnson@mail.com",
  },
  hero: {
    name: "Johnson Olayemi",
    p: ["I'm a FullStack Deveoper", "I Design interfaces and web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am a full-stack developer with a strong foundation in both front-end and back-end technologies, dedicated to creating seamless and efficient web applications. My expertise spans a range of modern web technologies, including JavaScript, HTML, and CSS, complemented by extensive experience in popular frameworks and libraries like React and Redux for dynamic and responsive UIs.

On the front end, I leverage tools such as Tailwind CSS, Chakra UI, and Material UI to design intuitive and visually appealing interfaces. Additionally, I use Three.js for incorporating 3D elements, adding depth and interactivity to user experiences. For back-end development, I rely on Node.js and Express.js to build scalable and efficient server-side applications, supported by MongoDB as a robust and flexible database solution.

With a holistic understanding of the development process and a keen eye for design, I am equipped to take on complex projects, creating functional, engaging, and optimized applications from concept to deployment.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};

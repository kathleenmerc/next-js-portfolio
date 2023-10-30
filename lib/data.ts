import helicopterGameImg from "@/public/helicopterGameImg.png";
import jeopardyImg from "@/public/jeopardyImg.png";
import recipeFinderImg from "@/public/recipeFinderImg.png";
import therapeaseImg from "@/public/therapeaseImg.png";
import coffeeCornerImg from "@/public/coffeeCornerImg.png";
import portfolioImg from "@/public/portfolioImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  /* {
    name: "About",
    hash: "#about",
  },*/
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Recipe Finder",
    description: "A website to help you find what recipes you can make with the ingredients you already have in your kitchen.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "CSS3", "JSON Web Token", "Render"],
    imageUrl: recipeFinderImg,
    liveLink: "https://recipe-finder.onrender.com/",
    repoLink: "https://github.com/kathleenmerc/recipe-finder",
  },
  {
    title: "TherapEase",
    description: "An app to enhance the appointment scheduling process for patients and physical therapists.",
    tags: ["TypeScript", "Next.js", "Google Firebase & Firestore", "Tailwind CSS", "Figma"],
    imageUrl: therapeaseImg,
    liveLink: "https://vimeo.com/877328348?share=copy",
    repoLink: "https://github.com/chingu-voyages/v44-tier3-team-40"
  },
  {
    title: "The Helicopter Game",
    description: "Recreated the classic Helicopter Game with new features such as 1 or 2-player modes, player lives, and high score functionality.",
    tags: ["Vanilla JavaScript", "HTML5", "CSS3", "HTML Canvas", "GitHub Pages"],
    imageUrl: helicopterGameImg,
    liveLink: "https://kathleenmerc.github.io/helicopter-game",
    repoLink: "https://github.com/kathleenmerc/helicopter-game",
  },
  {
    title: "Jeopardy Game",
    description: "Jeopardy trivia game built with React and deployed on Netlify.",
    tags: ["React", "JavaScript", "CSS3", "Netlify"],
    imageUrl: jeopardyImg,
    liveLink: "https://jeopardy-game-km.netlify.app/",
    repoLink: "https://github.com/kathleenmerc/react-jeopardy",
  },
  {
    title: "Coffee Corner",
    description: "A website for a cafe, with responsive designs for desktop and mobile devices.",
    tags: ["HTML", "CSS", "Bootstrap", "GitHub Pages"],
    imageUrl: coffeeCornerImg,
    liveLink: "https://kathleenmerc.github.io/coffee-corner-website/",
    repoLink: "https://github.com/kathleenmerc/coffee-corner-website"
  },
  {
    title: "Portfolio",
    description: "My personal portfolio website sharing my projects, skills, and contact information.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vercel" ],
    imageUrl: portfolioImg,
    liveLink: "#",
    repoLink: "https://github.com/kathleenmerc/next-js-portfolio" 
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Bootstrap",
  "Tailwind CSS",
  "WordPress",
  "Figma",
  "Node.js",
  "Express",
  "MongoDB",
  "Google Firebase & Firestore",
  "REST APIs",
  "Object Oriented Programming",
  "Git",
  "GitHub",
  "Gitpod",
  "Visual Studio Code",
  "Electronic Medical Records (EMR/EHR)",
  "Google Workspace",
  "Microsoft Office",
  "Trello",
] as const;
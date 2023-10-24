import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import helicopterGameImg from "@/public/helicopterGameImg.png";
import jeopardyImg from "@/public/jeopardyImg.png";
import recipeFinderImg from "@/public/recipeFinderImg.png";
import therapeaseImg from "@/public/therapeaseImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Physical Therapist",
    location: "Multiple locations",
    description:
      "I worked as a physical therapist, specializing in orthopedics and vestibular rehabilitation.",
    icon: React.createElement(CgWorkAlt)
    ,
    date: "2018 - 2021",
  },
  {
    title: "Computer Software Engineering Immersive Bootcamp",
    location: "Per Scholas",
    description:
      "I completed a full stack software development bootcamp, achieving a 99.63% final grade, where I gained proficiency in the MERN stack, JavaScript, and computer science concepts.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Web Developer (Contract position)",
    location: "Nexus Technologies Group, LLC.",
    description:
      "I joined a team of 3 web developers to build a WordPress website for a new Jamaican restaurant.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Recipe Finder",
    description:
      "A website to help you find what recipes you can make with the ingredients you already have in your kitchen.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "CSS3", "JSON Web Token"],
    imageUrl: recipeFinderImg,
    liveLink: "https://recipe-finder.onrender.com/",
    repoLink: "https://github.com/kathleenmerc/recipe-finder",
  },
  {
    title: "The Helicopter Game",
    description:
      "Recreated the classic Helicopter Game with new features such as 1 or 2-player modes, player lives, and high score functionality.",
    tags: ["Vanilla JavaScript", "HTML5", "CSS3", "HTML Canvas"],
    imageUrl: helicopterGameImg,
    liveLink: "https://kathleenmerc.github.io/helicopter-game",
    repoLink: "https://github.com/kathleenmerc/helicopter-game",
  },
  {
    title: "Jeopardy Game",
    description:
      "Jeopardy trivia game built with React and deployed on Netlify.",
    tags: ["React", "JavaScript", "CSS3"],
    imageUrl: jeopardyImg,
    liveLink:"https://jeopardy-game-km.netlify.app/",
    repoLink: "https://github.com/kathleenmerc/react-jeopardy",
  },
  {
    title: "TherapEase",
    description:
      "An app to enhance the appointment scheduling process for patients and physical therapists.",
    tags: ["TypeScript", "Next.js", "Google Firebase & Firestore", "TailwindCSS", "Figma"],
    imageUrl: therapeaseImg,
    liveLink: "https://vimeo.com/877328348?share=copy",
    repoLink: "https://github.com/chingu-voyages/v44-tier3-team-40"
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
  "TailwindCSS",
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
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import helicopterGameImg from "@/public/helicopterGameImg.png";
import jeopardyImg from "@/public/jeopardyImg.png";
import recipeFinderImg from "@/public/recipeFinderImg.png";

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
    title: "The Helicopter Game",
    description:
      "Solo Project: Recreated the classic Helicopter Game with new features such as 1 or 2-player modes, player lives, and high score functionality.",
    tags: ["JavaScript", "HTML5", "CSS3", "HTML Canvas"],
    imageUrl: helicopterGameImg,
  },
  {
    title: "Jeopardy Game",
    description:
      "Jeopardy trivia game built with React and deploye don Netlify.",
    tags: ["React", "Netlify"],
    imageUrl: jeopardyImg,
  },
  {
    title: "Recipe Finder",
    description:
      "A website to help you find what recipes you can make with the ingredients you already have in your kitchen. Complete CRUD app created with the MERN stack",
    tags: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "CSS3", "JSON Web Token"],
    imageUrl: recipeFinderImg,
  },
  {
    title: "TherapEase",
    description:
      "Team project: Collaborated with a team of 4 developers to create an app to enhance the appointment scheduling process for patients and physical therapists.",
    tags: ["TypeScript", "Next.js", "Google Firebase & Firestore", "TailwindCSS", "Figma"],
    imageUrl: recipeFinderImg,
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
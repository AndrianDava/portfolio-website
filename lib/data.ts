import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Pendidikan",
    location: "Tulang Bawang, Unit 2",
    description:
     "Saya bersekolah di SMK Al-iman Tulang Bawang.",
    icon: React.createElement(LuGraduationCap),
   
  },
  {
    title: "Class",
    description:
      "Belajar Programing Dari Youtube.",
    icon: React.createElement(FaReact),

  },
] as const;

export const projectsData = [
  {
    title: "Youtube Dwonloader",
    description:
      "Saya Membuat Web Ini Karena Request Dari Teman Saya.",
    tags: ["React", "Next.js",],
    imageUrl: corpcommentImg,
  },
  {
    title: "Tiktok Dwonloader",
    description:
      "Saya Membuat Web Ini Karena Request Dari Teman Saya.",
    tags: ["Nodejs",],
    imageUrl: rmtdevImg,
  },
  {
    title: "Instagram Downloader",
    description:
      "Saya Membuat Web Ini Karena Request Dari Teman Saya.",
    tags: ["React", "Next.js", "Node js",],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Python",
] as const;

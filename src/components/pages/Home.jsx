/* eslint-disable no-unused-vars */
import React from "react";
import ProjectStastics from "../common/ProjectStastics";
import Platforms from "../common/Platforms";
import ProjectCard from "../common/ProjectCard";
import ClientCard from "../common/ClientCard";
import MemberCard from "../common/MemberCard";

const projects = [
  {
    id: 1,
    name: "Monalisa",
    type: "QA",
    date: "2024-03-15",
    members: ["Alice", "Bob", "Charlie"],
    files: 4,
    progress: 20,
    images: [
      "https://randomuser.me/api/portraits/women/15.jpg",
      "https://randomuser.me/api/portraits/men/23.jpg",
      "https://randomuser.me/api/portraits/women/40.jpg",
    ],
  },
  {
    id: 2,
    name: "Monalisa",
    type: "Prod",
    date: "2024-02-10",
    members: ["David", "Eva", "Frank"],
    files: 9,
    progress: 80,
    images: [
      "https://randomuser.me/api/portraits/men/10.jpg",
      "https://randomuser.me/api/portraits/women/20.jpg",
      "https://randomuser.me/api/portraits/men/30.jpg",
    ],
  },
  {
    id: 3,
    name: "Login",
    type: "QA",
    date: "2024-04-25",
    members: ["Grace", "Henry", "Ivy"],
    files: 1,
    progress: 18,
    images: [
      "https://randomuser.me/api/portraits/women/5.jpg",
      "https://randomuser.me/api/portraits/men/15.jpg",
      "https://randomuser.me/api/portraits/women/25.jpg",
    ],
  },
  {
    id: 4,
    name: "Login",
    type: "PROD",
    date: "2024-01-05",
    members: ["Jack", "Kelly", "Liam"],
    files: 2,
    progress: 6,
    images: [
      "https://randomuser.me/api/portraits/men/5.jpg",
      "https://randomuser.me/api/portraits/women/10.jpg",
      "https://randomuser.me/api/portraits/men/20.jpg",
    ],
  },
];
const clients = [
  {
    id: 1,
    name: "Argentina",
    title: "QA & PROD",
    date: "2024-08-06",
  },
  {
    id: 2,
    name: "Costa Rica",
    title: "QA & PROD",
    date: "2024-08-06",
  },
  {
    id: 3,
    name: "Ecuador",
    title: "QA & PROD",
    date: "2024-08-06",
  },
  {
    id: 4,
    name: "Uruguay",
    title: "QA & PRODO",
    date: "2024-08-06",
  },
];
const members = [
  {
    id: 1,
    total_members: 8,
    job: "Monalisa QA",
  },
  {
    id: 2,
    total_members: 6,
    job: "Monalisa PROD",
  },
  {
    id: 3,
    total_members: 5,
    job: "Login QA",
  },
  {
    id: 4,
    total_members: 5,
    job: "Login PROD",
  },
];
const Home = () => {
  return (
    <div className="p-5">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <ProjectStastics />
        <Platforms />
        <ProjectStastics />
        <Platforms />
      </div>

      <div>
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-lg font-semibold">Current Projects</h1>
          <p className="text-sm underline text-indigo-600 cursor-pointer">See all</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects &&
            projects.map((project) => (
              <ProjectCard key={`${project.name}-${project.type}`} project={project} />
            ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg font-semibold">Current Clients</h1>
          <p className="text-sm underline text-indigo-600 cursor-pointer">See all</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {clients &&
            clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg font-semibold">Members</h1>
          <p className="text-sm underline text-indigo-600 cursor-pointer">See all</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {members &&
            members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

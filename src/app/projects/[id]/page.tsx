"use client";

import ProjectHeader from "@/app/projects/ProjectHeader";
import { useState } from "react";
import Board from "../BoardView";

type Props = {
  params: { id: string };
};

function Project({ params }: Props) {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
    </div>
  );
}

export default Project;

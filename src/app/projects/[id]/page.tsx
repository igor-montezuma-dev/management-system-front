"use client";

import ProjectHeader from "@/app/projects/ProjectHeader";
import { useState } from "react";
import Board from "../BoardView";
import List from "../ListView";
import Timeline from "../TimelineView";
import TableView from "../TableView";

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
      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}

      {activeTab === "Lista" && (
        <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Linha do tempo" && (
        <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Tabela" && (
        <TableView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  );
}

export default Project;

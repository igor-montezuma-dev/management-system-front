"use client";

import ProjectHeader from "@/app/projects/ProjectHeader";
import { useState } from "react";
import Board from "../BoardView";
import List from "../ListView";
import Timeline from "../TimelineView";
import TableView from "../TableView";
import ModalNewTask from "@/components/ModalNewTask";

type Props = {
  params: { id: string };
};

function Project({ params }: Props) {
  const { id } = params; // ID do projeto vindo dos parâmetros da rota
  const [activeTab, setActiveTab] = useState("Board"); // Aba ativa
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false); // Estado do modal

  return (
    <div>
      {/* Modal para criar nova tarefa */}
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
        id={id} // Passa o ID do projeto para o modal
      />

      {/* Cabeçalho do projeto */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Renderiza o conteúdo com base na aba ativa */}
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
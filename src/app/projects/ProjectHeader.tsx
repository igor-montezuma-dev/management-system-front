"use client";

import Header from "@/components/Header";

import { useState } from "react";

type Props = {
  activeTab: string;
  setActiveTab: (tabName: string) => void;
};

const ProjectHeader = ({ activeTab, setActiveTab }: Props) => {
  const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false);
  return (
    <div className="px-4 xl:px-6">
      <div className="pt-6lg:pb-4 pb-5 lg:pt-8">
        <Header name="Product Design Development" />
      </div>
    </div>
  );
};

export default ProjectHeader;

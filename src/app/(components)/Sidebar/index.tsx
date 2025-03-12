"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  AlertCircleIcon,
  AlertOctagonIcon,
  AlertTriangleIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  HomeIcon,
  Layers3Icon,
  LockIcon,
  LucideIcon,
  SearchIcon,
  SettingsIcon,
  ShieldAlertIcon,
  UserIcon,
  UsersIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Sidebar() {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
    transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white 
    ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}
  `;

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            Taskly
          </div>
          {isSidebarCollapsed ? null : (
            <button
              onClick={() =>
                dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
              }
              className="py-3"
            >
              <XIcon className="size-8 dark:text-white" />
            </button>
          )}
        </div>
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image src="/logo.png" alt="Taskly logo" width={40} height={40} />
          <div>
            <h3 className="text-md tracking-white font-bold dark:text-gray-200">
              Dados da equipe
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-[0.1rem] size-3 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500">Privado</p>
            </div>
          </div>
        </div>
        <nav className="z-10 w-full">
          <SidebarLink href="/" icon={HomeIcon} label="Home" />
          <SidebarLink href="/timeline" icon={BriefcaseIcon} label="Timeline" />
          <SidebarLink href="/search" icon={SearchIcon} label="Buscar" />
          <SidebarLink
            href="/settings"
            icon={SettingsIcon}
            label="Configurações"
          />
          <SidebarLink href="/users" icon={UserIcon} label="Usuários" />
          <SidebarLink href="/teams" icon={UsersIcon} label="Equipe" />
        </nav>

        <button
          className="py3 flex w-full items-center justify-between px-8 text-gray-500"
          onClick={() => setShowProjects((prev) => !prev)}
        >
          <span className="">Projetos</span>
          {showProjects ? (
            <ChevronUpIcon className="size-5" />
          ) : (
            <ChevronDownIcon className="size-5" />
          )}
        </button>
        {/* Projects List */}

        <button
          className="py3 flex w-full items-center justify-between px-8 text-gray-500"
          onClick={() => setShowPriority((prev) => !prev)}
        >
          <span className="">Prioridade</span>
          {showPriority ? (
            <ChevronUpIcon className="size-5" />
          ) : (
            <ChevronDownIcon className="size-5" />
          )}
        </button>
        {showPriority && (
          <>
            <SidebarLink
              href="/priority/urgent"
              icon={AlertCircleIcon}
              label="Urgente"
            />
            <SidebarLink
              href="/priority/high"
              icon={ShieldAlertIcon}
              label="Alta"
            />
            <SidebarLink
              href="/priority/medium"
              icon={AlertTriangleIcon}
              label="Média"
            />
            <SidebarLink
              href="/priority/low"
              icon={AlertOctagonIcon}
              label="Baixa"
            />
            <SidebarLink
              href="/priority/backlog"
              icon={Layers3Icon}
              label="Backlog"
            />
          </>
        )}
      </div>
    </div>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  //isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  //isCollapsed,
}: SidebarLinkProps) => {
  const pathName = usePathname();
  const isActive =
    pathName === href || (pathName === "/" && href === "/dashboard");

  return (
    <Link href={href} className="w-full">
      <div
        className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""} justify-start px-8 py-3`}
      >
        {isActive && (
          <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200" />
        )}

        <Icon className="size-6 text-gray-800 dark:text-gray-100" />
        <span className={`font-medium text-gray-800 dark:text-gray-100`}>
          {label}
        </span>
      </div>
    </Link>
  );
};

export default Sidebar;

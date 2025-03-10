import { ReactNode } from "react";
import Navbar from "./(components)/Navbar";
import Sidebar from "./(components)/Sidebar";

function DashboardWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex max-h-screen w-full bg-gray-50 text-gray-900">
      {/* Sidebar */}

      <Sidebar/>
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default DashboardWrapper;

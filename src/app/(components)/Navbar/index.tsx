import { SearchIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      {/* Serach */}
      <div className="flex items-center gap-8">
        <div className="relative flex h-min w-[200px]">
          <SearchIcon className="absolute left-[4px] top-1/2 mr-2 size-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <input
            className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
            type="search"
            placeholder="Procure aqui..."
          />
        </div>
      </div>
      <div className="flex items-center">
        <Link
          href="/settings"
          className="h-min w-min rounded p-2 hover:bg-gray-100"
        >
          <SettingsIcon className="size-6 dark:text-white" />
        </Link>
        <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
}

export default Navbar;

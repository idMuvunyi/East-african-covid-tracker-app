import React from "react";
import Cov from "./assets/covid.png";

export default function Header() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const dates = today.toDateString();

  return (
    <div className="bg-blue-500">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-white">
              <img src={Cov} alt="Icon" className="h-6 w-6" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden ">EAC COVID-19 TRACKER</span>
              <span className="hidden md:inline">EAC COVID-19 TRACKER</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <p className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-md text-sm font-medium text-white ">
              {dates}
            </p>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
              <span className="sr-only">Dismiss</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

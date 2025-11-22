import React from "react";

export default function Loader(component) {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white dark:bg-black">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-black dark:border-gray-100 dark:border-t-black border-t-transparent"></div>
    </div>
  );
}

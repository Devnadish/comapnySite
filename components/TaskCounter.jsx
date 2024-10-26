"use client"; // Ensure this is a Client Component

import React, { useEffect, useState } from "react";
import { getImages } from "./actions/getImages";

function TaskCounter({ prefix }) {
  const [loading, setLoading] = useState(true);
  const [taskCounter, setTaskCounter] = useState(0);

  useEffect(() => {
    const fetchTaskCounter = async () => {
      setLoading(true); // Set loading to true before fetching
      const images = await getImages(prefix);
      setTaskCounter(images.length); // Update the task counter
      setLoading(false); // Set loading to false after fetching
    };

    fetchTaskCounter();
  }, [prefix]); // Fetch data whenever the prefix changes

  return (
    <div className="text-white/50 text-xl absolute left-2 top-2">
      {loading ? (
        <CircularLoader /> // Show circular loader while fetching
      ) : (
        taskCounter // Display the task counter once loaded
      )}
    </div>
  );
}

// Circular Loader Component
const CircularLoader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full border-t-2 border-b-2 border-blue-500 h-4 w-4"></div>
    </div>
  );
};

export default TaskCounter;

// LoadMore Component - Implements infinite scroll functionality
// "use client" directive makes this a Client Component (needed for hooks)
"use client";

import Image from "next/image";
// Hook to detect when element enters viewport (for infinite scroll)
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import { fetchAnime } from "../app/action";

// Page counter starts at 2 (page 1 is loaded in Home component)
// Using module-level variable to persist across re-renders
let page = 2;

// Type definition for anime card elements
export type AnimeCard = JSX.Element;

/**
 * LoadMore Component - Handles infinite scroll pagination
 * 
 * How it works:
 * 1. Uses Intersection Observer to detect when user scrolls near bottom
 * 2. When trigger element (ref) is in view, fetches next page
 * 3. Appends new data to existing data array
 * 4. Shows loading spinner while fetching
 */
function LoadMore() {
  // useInView hook returns ref (to attach to element) and inView (boolean)
  const { ref, inView } = useInView();

  // State to store loaded anime cards
  const [data, setData] = useState<AnimeCard[]>([]);
  // Loading state for spinner display
  const [isLoading, setIsLoading] = useState(true);

  // Effect hook runs when inView, data, or isLoading changes
  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      // Delay prevents rapid-fire requests and improves UX
      const delay = 500;

      const timeoutId = setTimeout(() => {
        // Call Server Action to fetch next page
        fetchAnime(page).then((res) => {
          // Append new data to existing data (spread operator)
          setData([...data, ...res]);
          page++; // Increment page for next fetch
        });

        setIsLoading(false);
      }, delay);

      // Cleanup: Clear timeout if component unmounts or inView changes
      // Prevents memory leaks and unnecessary API calls
      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading]);

  return (
    <>
      {/* Grid to display loaded anime cards */}
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      {/* Intersection Observer trigger element */}
      {/* When this div enters viewport, inView becomes true */}
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {/* Show spinner only when loading and element is in view */}
          {inView && isLoading && (
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          )}
        </div>
      </section>
    </>
  );
}

export default LoadMore;

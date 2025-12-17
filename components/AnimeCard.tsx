// AnimeCard Component - Displays individual anime information
import Image from "next/image";

import { MotionDiv } from "./Motion";

// Animation stagger delay in seconds - creates cascading animation effect
const stagger = 0.25;

// Framer Motion animation variants
// Defines the animation states for the card entrance
const variants = {
  hidden: { opacity: 0 }, // Initial state (invisible)
  visible: { opacity: 1 }, // Final state (visible)
};

// TypeScript interface defining the structure of anime data from API
export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string; // Image URL path (relative to shikimori.one domain)
  };
  kind: string; // Type of anime (TV, Movie, OVA, etc.)
  episodes: number; // Total planned episodes
  episodes_aired: number; // Episodes that have actually aired
  score: string; // User rating score
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

/**
 * AnimeCard Component
 * Displays a single anime card with image, title, type, episodes, and rating
 * 
 * @param anime - Anime data object
 * @param index - Index for staggered animation timing
 */
function AnimeCard({ anime, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden" // Start invisible
      animate="visible" // Animate to visible
      transition={{
        delay: index * stagger, // Staggered delay based on position
        ease: "easeInOut", // Smooth easing function
        duration: 0.5, // Animation duration in seconds
      }}
      viewport={{ amount: 0 }} // Trigger when element enters viewport
      className="max-w-sm rounded relative w-full"
    >
      {/* Image container with fixed viewport height */}
      <div className="relative w-full h-[37vh]">
        {/* Next.js Image component with automatic optimization */}
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill // Fills parent container (requires relative parent)
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            {/* Fallback to episodes_aired if episodes is not available */}
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default AnimeCard;

// Next.js 14 Server Actions
// "use server" directive marks this file as Server Actions only
// Server Actions can be called directly from Client Components and run on the server
"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

// Maximum number of anime items to fetch per page
const MAX_LIMIT = 8;

/**
 * Server Action: Fetches anime data from Shikimori API
 * @param page - Page number for pagination
 * @returns Array of AnimeCard React components (JSX)
 * 
 * This function:
 * 1. Fetches data from external API on the server
 * 2. Transforms the data into React components
 * 3. Returns JSX that can be rendered directly
 * 
 * Benefits of Server Actions:
 * - Runs on server (no API route needed)
 * - Can be called from Client Components
 * - Automatically handles serialization
 * - Better security (API keys stay on server)
 */
export async function fetchAnime(page: number) {
  // Fetch anime data from Shikimori API
  // Ordered by popularity, limited to MAX_LIMIT per page
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  );

  const data = await response.json();

  // Transform API data into React components
  // Each anime becomes an AnimeCard component with staggered animation index
  return data.map((anime: AnimeProp, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
}

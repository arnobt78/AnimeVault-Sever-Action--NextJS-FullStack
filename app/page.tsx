// Home Page Component - Server Component (default in Next.js 14 App Router)
// Server Components run on the server, reducing client-side JavaScript bundle size
import { fetchAnime } from "./action";

import LoadMore from "../components/LoadMore";

// This is an async Server Component - can directly await data fetching
// No need for useEffect or useState for initial data loading
async function Home() {
  // Fetch first page of anime data (8 items) on the server
  const data = await fetchAnime(1);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      {/* Responsive grid layout: 4 cols on large, 3 on medium, 2 on small, 1 on mobile */}
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {/* Render initial anime cards fetched on server */}
        {data}
      </section>
      {/* LoadMore component handles infinite scroll for additional pages */}
      <LoadMore />
    </main>
  );
}

export default Home;

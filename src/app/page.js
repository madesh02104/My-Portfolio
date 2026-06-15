import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import FindMe from "./components/FindMe";
import ThemeToggle from "./components/ThemeToggle";

async function getRecentPosts() {
  try {
    const res = await fetch(
      "https://api.blogsbymadesh.live/api/posts?limit=3",
      {
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.items || data;
  } catch {
    return null;
  }
}

export default async function Home() {
  const posts = await getRecentPosts();

  return (
    <main className="page-wrapper">
      <div className="theme-toggle-wrapper">
        <ThemeToggle />
      </div>
      <Intro />
      <Skills />
      <Projects />
      <Blogs posts={posts} />
      <FindMe />
    </main>
  );
}

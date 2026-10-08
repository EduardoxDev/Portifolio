import { Shell } from "@/components/layout/shell";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Intro } from "@/components/sections/intro";
import { OpenSource } from "@/components/sections/open-source";
import { getGitHubData } from "@/lib/github";

export const revalidate = 21600;

export default async function Home() {
  const github = await getGitHubData();

  return (
    <Shell>
      <Intro stats={github.stats} contributions={github.contributions} />
      <About />
      <Experience />
      <OpenSource {...github} />
      <Contact />
    </Shell>
  );
}

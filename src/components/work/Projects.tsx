"use client";
import { getPosts } from "@/app/utils/utils";
import { Flex } from "@/once-ui/components";

import { ProjectCard } from "@/components";
import { Metadata } from "next";
import { useContext } from "react";
import { GameModeContext } from "../GameModeProvider";

interface AllProjectsProps {
  metadata: MetaProps;
  slug: string;
  content: string;
}
interface MetaProps {
  publishedAt: string;
  images: string[];
  summary: string;
  title: string;
  team: {
    name: string;
    role: string;
    avatar: string;
    linkedIn: string;
  }[];
}
interface ProjectsProps {
  range?: [number, number?];
  locale?: string;
  customPath?: string[];
  projects: AllProjectsProps[][];
}

export function Projects({ range, projects }: ProjectsProps) {
  const { gameMode } = useContext(GameModeContext);

  const [gameProjects, appProjects] = projects;
  const allProjects = gameProjects;
  const sortedProjects = allProjects.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  // Easy peasy way would be to pass both web and game dev projects down and then in the projectCard component we
  // use useContext to dynamically display the correct data

  return (
    <Flex fillWidth gap="xl" marginBottom="40" paddingX="l" direction="column">
      {displayedProjects.map((post) => (
        <ProjectCard
          key={post.slug}
          href={`work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          // content={post.content}
          avatars={
            post.metadata.team?.map((member) => ({ src: member.avatar })) || []
          }
        />
      ))}
    </Flex>
  );
}

import HomeClient from "@/components/home/home-client";

type SearchParams = {
  sortBy?: "votes" | "createdAt" | "participations";
  since?: "1w" | "1m" | "3m" | "6m" | "1y";
};

type HomePageProps = {
  searchParams: Promise<SearchParams>;
};

export default function HomePage({ searchParams }: HomePageProps) {
  return <HomeClient searchParams={searchParams} />;
}

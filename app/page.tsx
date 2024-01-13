"use client";

import useFetchRepos from "./queries/repo";
import Card from "./components/Card";

export default function Home() {
  const { data } = useFetchRepos();

  console.log(data);

  return (
    <main>
      <>
        {data?.map((repo) => {
          <Card repo={repo} />;
        })}
      </>
    </main>
  );
}

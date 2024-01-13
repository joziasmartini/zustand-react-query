import { baseUrl } from "@/app/services/api";
import { useQuery } from "@tanstack/react-query";
import { Repo } from "./types";

async function getRepos(): Promise<Repo[]> {
  const res = await fetch(`${baseUrl}/users/joziasmartini/repos`);
  return res.json();
}

export default function useFetchRepos() {
  return useQuery({ queryKey: ["repos"], queryFn: getRepos });
}

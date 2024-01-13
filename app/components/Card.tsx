import React from "react";
import { Repo } from "../queries/repo/types";

type CardProps = {
  repo: Repo;
};

export default function Card({ repo }: CardProps) {
  function handleCompleteTodo() {}

  return (
    <div className="bg-white">
      <h5 className="font-semibold">{repo.name}</h5>
      <p className="card-text">{repo.description}</p>
      <div className="card-buttons">
        <button onClick={handleCompleteTodo} className="btn btn-primary">
          Favoritar
        </button>
      </div>
    </div>
  );
}

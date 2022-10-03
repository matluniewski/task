import { useState, useEffect } from "react";
import type { Movie, Character } from "./types";

/**
 * TODO: dodaj typy
 */
async function fetchMethod(...args) {
  const res = await fetch(...args);
  return await res.json();
}

// docs: https://swapi.dev/
const endpoint = "https://swapi.dev/api";

const regex = /(\d+)\/$/;
export const getUrlID = (link: string) => {
  const match = link.match(regex);
  return match && match[1];
};

export const useMovies = () => {
  const [response, setResponse] = useState<Movie[] | undefined>(undefined);

  useEffect(() => {
    /**
     * TODO: moze da się jakoś lepiej pobierać dane :)
     */
    fetchMethod<{ results: Movie[] }>(`${endpoint}/films/`).then(
      ({ results }) => {
        setResponse(results);
      }
    );
  }, []);

  return response;
};

export const useMovie = () => {
  /**
   * TODO: ${endpoint}/films/${id}
   */
};

export const useCharacters = () => {
  /**
   * TODO: ${endpoint}/people
   */
};

export const useCharacter = () => {
  /**
   * TODO: ${endpoint}/people/${id}
   */
};

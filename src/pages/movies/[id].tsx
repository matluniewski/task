import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useMovie } from "../../actions";
import styles from "../../styles/Layout.module.css";

const Movie: NextPage = () => {
  const router = useRouter();

  /**
   * TODO: zaimplementuj hook do pobierania filmu
   */
  const movie = useMovie(router.query.id);

  return (
    <div className={styles.container}>
      <h3>Film: {movie.title}</h3>
      <p>{movie.opening_crawl}</p>
      <ul>
        {movie.characters.map(() => {
          /**
           * TODO: dodaj listę postaci z linkami do strony o niej
           */
        })}
      </ul>

      <h3>Recenzje</h3>
      <ul>
        {/**
         * TODO: dodaj listę recenzji dla zasobu, recenzje powinny być zapisane w stanie aplikacji
         */}
      </ul>
      <form>
        {/**
         * TODO: zaimplementuj formularz dodawania recenzji
         */}
      </form>
    </div>
  );

  return null;
};

export default Movie;

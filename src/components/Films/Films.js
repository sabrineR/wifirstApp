import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_FILMS } from "../../queries/filmQueries";
import { FilmCard } from "./FilmCard";
import "./films.css";
import { Dropdown, DropdownButton, Spinner } from "react-bootstrap";

export const Films = () => {
  const { loading, error, data } = useQuery(GET_FILMS);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (data) setFilms(data.allFilms.films);
  }, [data]);

  //sort by date
  const handleSortFilms = () => {
    const sortFilms = [...films].sort(function (a, b) {
      return new Date(b.releaseDate) - new Date(a.releaseDate);
    });
    setFilms(sortFilms);
  };

  const handleSortFilmsDes = () => {
    const sortFilms = [...films].sort(function (a, b) {
      return new Date(a.releaseDate) - new Date(b.releaseDate);
    });
    setFilms(sortFilms);
  };

  const style = {
    display: "flex",
    justifyContent: "space-around",
    borderRadius: "6px",
    border: "solid 1px #dee2e6",
    padding: "20px",
  };

  if (loading) return <Spinner animation="border" />;

  if (error) return <p>Erreur:</p>;
  return (
    <div className="filmsContent">
      <h1>Liste des Films</h1>
      <div style={style}>
        <span>il y a {films.length} films</span>
        <DropdownButton title="Trier par date de sortie">
          <Dropdown.Item onClick={handleSortFilms}>
            Les + recents{" "}
          </Dropdown.Item>
          <Dropdown.Item onClick={handleSortFilmsDes}>
            Les + anciens{" "}
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <hr style={{ margin: "50px 0" }} />

      {films.length > 0 ? (
        <div className="listFilms">
          {" "}
          {films.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      ) : (
        <p>Pas de Films</p>
      )}
    </div>
  );
};

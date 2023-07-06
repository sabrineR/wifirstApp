import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export const FilmCard = ({ film }) => {
  return (
    <Card   
      style={{ width: "23rem", height: "22rem", margin: "2%" }}
    >
      <Card.Header>
        <Card.Title>{film.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>Producteur : {film.producers}</Card.Text>
        <Card.Text>Réalisateur : {film.director}</Card.Text>
        <Card.Text>
          Le nombre de véhicule : {film.vehicleConnection.totalCount}
        </Card.Text>
        <Link to ={`/film/${film.id}/vehicles`}><Button variant="primary">Voir les véhicules de ce film </Button></Link>
      </Card.Body>
      <Card.Footer className="text-muted">Date de sortie : {film.releaseDate}</Card.Footer>
    </Card>
  );
};

import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { GET_FILM } from "../../queries/filmQueries";
import { Spinner, Table } from "react-bootstrap";
import { SlArrowLeftCircle } from "react-icons/sl";
const FilmVehicles = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_FILM, { variables: { id } });
  if (loading) return <Spinner animation="border" />;
  if (error) return <p>Erreur :</p>;

  return (
    <div style={{ padding: "50px" }}>
      <h1>Liste des véhicules utilisés dans le film : {data.film.title}</h1>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom de véhicule</th>
            <th>Modèle de véhicule</th>
          </tr>
        </thead>
        <tbody>
          {data.film.vehicleConnection.vehicles.map((vehicle, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{vehicle.name}</td>
                <td>{vehicle.model}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Link to="/films">
        <p>Retour </p>
        <SlArrowLeftCircle />
      </Link>
    </div>
  );
};

export default FilmVehicles;

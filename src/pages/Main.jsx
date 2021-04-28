// import { Detail } from "../components/movie/Detail";
import { Poster } from "../components/movie/Poster";
import { environment } from "../environment/environment";
import { useState } from "react";
import useAxios from "axios-hooks";
import { TrailerSlide } from "../components/movie/TrailerSlide";
import { FeatureMovieCollection } from "../components/movie/FeatureMovieCollection";
import { Container, Divider } from "semantic-ui-react";
import "./css/main.css";

export const Main = () => {
  const featureMovieNums = 6;
  const [{ data, loading, error }] = useAxios(
    `${environment.baseUrl.api}/movie/featured/${featureMovieNums}`
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data);

  return (
    <Container>
      <Container>
        <TrailerSlide movies={data} />
      </Container>
      <Divider horizontal>
        <span className="featureDivider">Feature</span>
      </Divider>
      <Container className="featureMovieCollectionContainer">
        <FeatureMovieCollection movies={data} size={`medium`} column={3} />
      </Container>
    </Container>
  );
};

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

const Veggie = () => {
  const [vaggie, setVaggie] = useState([]);

  useEffect(() => {
    getVaggie();
  }, []);

  const getVaggie = async () => {
    const check = localStorage.getItem("vaggie");

    if (check) {
      setVaggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );

      const data = await api.json();
      localStorage.setItem("vaggie", JSON.stringify(data.recipes));
      console.log(data);
      setVaggie(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Picks</h3>

        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            grag: "free",
            gap: "5rem",
          }}
        >
          {vaggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt="" />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    widht: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: liner-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
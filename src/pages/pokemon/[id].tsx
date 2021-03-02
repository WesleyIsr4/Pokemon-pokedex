import React from "react";
import PropTypes from "prop-types";

export default function Pokemon({ pokemon }) {
  console.log();
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt="Imagem do pokemon" />
    </div>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    sprites: PropTypes.shape({
      front_default: PropTypes.string,
    }),
  }).isRequired,
};

export async function getStaticProps({ params }) {
  console.log(params);
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    .then((responseOfServe) => {
      if (responseOfServe.ok) {
        return responseOfServe.json();
      }

      throw new Error("Deu problema");
    })
    .then((responseInObject) => {
      return responseInObject;
    });
  return {
    props: {
      pokemon,
    },
  };
}

export async function getStaticPaths() {
  //Basicamente o mesmo código da Home, com diferença no return
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokedex/2/")
    .then((responseOfServe) => {
      if (responseOfServe.ok) {
        return responseOfServe.json();
      }
      throw new Error("Deu problema");
    })
    .then((responseInObject) => responseInObject.pokemon_entries);
  return {
    paths: pokemons.map((pokemon) => ({
      //pra cada pokemon na resposta, um caminho sera gerado
      params: {
        id: pokemon.entry_number.toString(), //necessario usar o toString porque não aceita inteiro como caminho (path)
      },
    })),
    fallback: false,
  };
}

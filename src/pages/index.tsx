import React from "react";
import Link from "next/link";
import Head from "next/head";

export async function getStaticProps(context) {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokedex/2/")
    .then((responseOfServe) => {
      if (responseOfServe.ok) {
        return responseOfServe.json();
      }
    })
    .then((responseInObject) => {
      return responseInObject.pokemon_entries;
    });

  return {
    props: {
      pokemons,
    },
  };
}
function Home(props) {
  const { pokemons } = props;

  return (
    <div>
      <Head>
        <title>Pokédex</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <a>About us</a>
          </Link>
        </li>
      </ul>

      <h1>Pokédex - WesleyIsr4</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.entry_number}>
            <Link href={`/pokemon/${pokemon.entry_number}`}>
              <a>{pokemon.pokemon_species.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

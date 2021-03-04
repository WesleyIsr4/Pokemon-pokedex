import Card from "../components/Card";
import Layout from "../components/PokemonLayout";
import styles from "../styles/pages/Home.module.css";

export default function Home({ pokemons }) {
  return (
    <div className={styles.container}>
      <header>
        <h2>Pokedex - Wesley Israel</h2>
      </header>
      <Layout>
        <section>
          <div className={styles.cards}>
            {pokemons.map((pokemon, index) => (
              <Card key={pokemon.name} index={index} pokemon={pokemon} />
            ))}
          </div>
        </section>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    const { results } = await response.json();
    const pokemons = results.map((result, index) => {
      const paddedId = ("00" + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
      return { ...result, image };
    });
    return {
      props: { pokemons },
    };
  } catch (error) {
    console.log(error);
  }
}

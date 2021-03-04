import Layout from "../../components/PokemonLayout";
import styles from "../../styles/pages/Id.module.css";
import Link from "next/link";

export default function Pokemon({ pokemon }) {
  return (
    <Layout>
      <div className={styles.contaier}>
        <h1>{pokemon.name}</h1>
        <div>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className={styles.containerPokemon}>
          <div>
            <div>
              <p>{pokemon.types[0].type.name}</p>
              <p>Type</p>
            </div>
            <div>
              <p>
                {pokemon.weight} <small>kg</small>
              </p>
              <p>Weight</p>
            </div>
            <div>
              <p>
                {pokemon.height} <small>m</small>
              </p>
              <p>Height</p>
            </div>
          </div>

          <div>
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name}>
                <p>{stat.base_stat}</p>
                <p>{stat.stat.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Link href="/">
            <a> &lt; Back To Home</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json();
    const paddedId = ("00" + id).slice(-3);
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
  }
}

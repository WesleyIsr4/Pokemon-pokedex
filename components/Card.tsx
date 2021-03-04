import Link from "next/link";
import styles from "../styles/components/Card.module.css";

export default function Card({ pokemon, index }) {
  return (
    <Link href={`/pokemon/${index + 1}`}>
      <div className={styles.container}>
        <ul className={styles.cards}>
          <div className={styles.card}>
            <img src={pokemon.image} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <p>{pokemon.type}</p>
          </div>
        </ul>
      </div>
    </Link>
  );
}

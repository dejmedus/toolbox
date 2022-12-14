import styles from "../styles/Card.module.css";

type CardProps = {
  url: string;
  name: string;
  desc: string;
};

const Card = ({ url, name, desc }: CardProps) => {
  return (
    <a
      href={url}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>{name}</h2>
      <p>{desc}</p>
    </a>
  );
};

export default Card;

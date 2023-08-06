import styles from "./Card.module.css";

const Card = ({ cardData, title }) => {
  // console.log(cardData);
  if (!cardData) return null;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {Object.entries(cardData).map(([k, v], id) => (
        <div className={styles.cell} key={id}>
          <div className={styles.value}>{k}</div>
          <div className={styles.value}>{v}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;

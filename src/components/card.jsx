import styles from "./card.module.css";
export default function Card({
  rate,
  price,
  speed,
  description,
  bgColor1,
  bgColor2,
  isActive,
  isSelected,
  onClick,
}) {
  return (
    <div
      className={`${styles.card} ${isActive ? styles.active : ""} ${
        isSelected ? styles.selected : ""
      }`}
      onClick={onClick}
    >
      <h5 className={styles.cardTitle} style={{ backgroundColor: bgColor1 }}>
        Безлимитный {rate}
      </h5>
      <p className={styles.cardPrice} style={{ backgroundColor: bgColor2 }}>
        <span className={styles.cardPriceRub}>руб</span>{" "}
        <span className={styles.cardPriceValue}>{price} </span>{" "}
        <span className={styles.cardPriceMonth}>/мес</span>
      </p>
      <p className={styles.cardSpeed}>До {speed} Мбит/сек</p>
      <p className={styles.cardInfo}>{description}</p>
    </div>
  );
}

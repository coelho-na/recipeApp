import React from "react";
import styles from "../recipe.module.css";

const Recipes = ({ title, calories, image, ingredients }) => {
  return (
    <div className={styles.recipe}>
      <h1 className={styles.recipe__title}>{title}</h1>
      <ol className={styles.recipe__orderedList}>
        {ingredients.map((ingredient) => (
          <li className={styles.recipe__list}>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calorias: {Math.floor(calories.toFixed(1))}kcal</p>
      <img className={styles.recipe__img} src={image} alt={title} />
    </div>
  );
};

export default Recipes;

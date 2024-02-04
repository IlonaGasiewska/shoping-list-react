// ProductAddForm.jsx
import React from "react";

function ProductAddForm({
  handleSetName,
  newProductName,
  handleSetNewProductCategory,
  newProductCategory,
  newProductIsFood,
  handleSetNewProductIsFood,
  handleSetNewArray,
}) {
  return (
    <form action="">
      <input
        onInput={(e) => handleSetName(e)}
        name="product name"
        value={newProductName}
        type="text"
      />
      <input
        onInput={(e) => handleSetNewProductCategory(e)}
        type="text"
        value={newProductCategory}
      />
      <label htmlFor="isFood">
        Produkt spożywczy:
        <input
          type="checkbox"
          name="isFood"
          id=""
          checked={newProductIsFood}
          onChange={handleSetNewProductIsFood}
        />
      </label>
      <input type='button' onClick={handleSetNewArray} value="Dodaj" />
    </form>
  );
}

export default ProductAddForm;

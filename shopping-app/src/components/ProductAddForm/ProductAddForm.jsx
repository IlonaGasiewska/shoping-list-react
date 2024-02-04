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
      <label htmlFor="productName">Nazwa nowego porduktu:</label>
      <input
        onInput={(e) => handleSetName(e)}
        name="productName"
        id="productName"
        value={newProductName}
        type="text"
      />
      <label htmlFor="productCategory">Kategoria nowego porduktu:</label>
      <input
        name="productCategory"
        id="productCategory"
        onInput={(e) => handleSetNewProductCategory(e)}
        type="text"
        value={newProductCategory}
      />
      <label htmlFor="isFood">Produkt spożywczy</label>
      <input
        type="checkbox"
        name="isFood"
        id="isFood"
        checked={newProductIsFood}
        onChange={handleSetNewProductIsFood}
      />
      <input type='button' onClick={handleSetNewArray} value="Dodaj" />
    </form>
  );
}

export default ProductAddForm;

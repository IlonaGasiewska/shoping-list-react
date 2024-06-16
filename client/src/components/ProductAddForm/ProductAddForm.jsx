// import React from "react";

// function ProductAddForm({
//   handleSetName,
//   newProductName,
//   handleSetNewProductCategory,
//   newProductCategory,
//   newProductIsFood,
//   handleSetNewProductIsFood,
//   handleSetNewArray,
// }) {
//   return (
//     <form action="">
//       <label htmlFor="newProductName">Nazwa nowego porduktu:</label>
//       <input
//         onInput={(e) => handleSetName(e)}
//         name="newProductName"
//         id="newProductName"
//         value={newProductName}
//         type="text"
//       />
//       <label htmlFor="newProductCategory">Kategoria nowego porduktu:</label>
//       <input
//         name="newProductCategory"
//         id="newProductCategory"
//         onInput={(e) => handleSetNewProductCategory(e)}
//         type="text"
//         value={newProductCategory}
//       />
//       <label htmlFor="isFood">Produkt spożywczy</label>
//       <input
//         type="checkbox"
//         name="isFood"
//         id="isFood"
//         checked={newProductIsFood}
//         onChange={handleSetNewProductIsFood}
//       />
//       <input type='button' onClick={handleSetNewArray} value="Dodaj" />
//     </form>
//   );
// }

// export default ProductAddForm;

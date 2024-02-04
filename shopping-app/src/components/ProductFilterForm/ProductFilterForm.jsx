function ProductFilterForm({
  selectedCategory,
  showFoodOptionIsChecked,
  searchText,
  onCategoryChange,
  onShowFoodOptionChange,
  onSearchTextChange,
  onSearch,
  newProductsArray,
}) {
  const categories = newProductsArray.reduce((categoriesArray, product) => {
    !categoriesArray.includes(product.category) && categoriesArray.push(product.category);
    return categoriesArray;
  }, []);

  return (
    <form>
      <label htmlFor="productName">Nazwa produktu: </label>
      <input id="productName" name="productName" type="text" value={searchText} onChange={onSearchTextChange} />
      <label htmlFor="category">Kategoria: </label>
      <select id="category" onChange={onCategoryChange} value={selectedCategory}>
        <option value="all">wszystko</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <label htmlFor="food">Artykuły spożywcze </label>
      <input
        type="checkbox"
        id="food"
        name="food"
        checked={showFoodOptionIsChecked}
        onChange={onShowFoodOptionChange}
      />
    </form>
  );
}

export default ProductFilterForm;
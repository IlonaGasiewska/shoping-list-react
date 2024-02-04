function ProductFilterForm({
  selectedCategory,
  showFoodOptionIsChecked,
  searchText,
  onCategoryChange,
  onShowFoodOptionChange,
  onSearchTextChange,
  onSearch,
  newProductsAray,
}) {
  const categories = newProductsAray.reduce((categoriesArray, product) => {
    !categoriesArray.includes(product.category) && categoriesArray.push(product.category);
    return categoriesArray;
  }, []);

  return (
    <form>
      <input type="text" value={searchText} onChange={onSearchTextChange} />
      <label htmlFor="category">Category: </label>
      <select id="category" onChange={onCategoryChange} value={selectedCategory}>
        <option value="all">wszystko</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {" "}
            {category}{" "}
          </option>
        ))}
      </select>
      <label htmlFor="food">
        Artykuły spożywcze
        <input
          type="checkbox"
          id="food"
          checked={showFoodOptionIsChecked}
          onChange={onShowFoodOptionChange}
        />
      </label>
    </form>
  );
}

export default ProductFilterForm;
const Filters = ({
  search,
  setSearch,
  companies,
  company,
  setCompany,
  price,
  setPrice,
  maxPrice,
}) => (
  <div className="filters">
    <div className="filters-container">
      <form className="input-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="search-input"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <h4>Company</h4>
      <article className="companies">
        {companies.map((item) => (
          <button
            key={item}
            className="company-btn"
            onClick={() => setCompany(item)}
          >
            {item}
          </button>
        ))}
      </article>

      <h4>Price</h4>
      <form className="price-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="range"
          className="price-filter"
          min="0"
          max={maxPrice}
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
      </form>
      <p className="price-value">Value : ${price}</p>
    </div>
  </div>
);

export default Filters;

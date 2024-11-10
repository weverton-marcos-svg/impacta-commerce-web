import { queryProducts } from "../Api/api";

function SearchBar(props) {
  const [query, setQuery] = useState("");

  function searchProducts() { props.onSearch(query); }
  function handleChange(e) { setQuery(e.target.value); }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      searchProducts()
    }
  }

  return (
    <div className="row g-3">
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar produtos, marcas e muito mais..."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-primary" onClick={searchProducts}>
          Buscar
        </button>
      </div>
    </div>
  );
}


function FilterableProductsForSaleList() {
    const [productsSearchResult, setProductsSearchResult] = useState({
        results: [],
    });

    function clientSideQueryProduct(query) {
        queryProducts(query).then(
        (json) => {
            setIsLoaded(true);
            setProductsSearchResult(json);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        );
    }

    useEffect(() => { clientSideQueryProduct(""); }, []);

    function handleOnSearch(query) { clientSideQueryProduct(query); }

    const result = productsSearchResult.results.map((x, index) => (
    <ProductListItem product={x} key={index} />
    ));

    return (
    <>
        <SearchBar onSearch={handleOnSearch} />
        <div>{result}</div>
    </>
    );
}

export default FilterableProductsForSaleList;
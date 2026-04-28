import RestroCard from "./RestroCard";
import { useState } from "react";
import { suppliers } from "./Constants/suppliers";

const Body = () => {
  const [supplierList, setSupplierList] = useState(suppliers);
  const [searchSupplier, setSearchSupplier] = useState("");

  function filterSuppliers(searchText, supplierCatalog) {
    const normalizedSearch = searchText.trim().toUpperCase();

    if (!normalizedSearch) {
      return supplierCatalog;
    }

    const filteredSuppliers = supplierCatalog.filter((supplier) =>
      [supplier.name, supplier.city, ...supplier.categories].some((value) =>
        value.toUpperCase().includes(normalizedSearch)
      )
    );
    return filteredSuppliers;
  }

  return (
    <div className="body">
      <section className="hero">
        <p className="eyebrow">Hyperpure by Zomato</p>
        <h1>Fresh supplies for restaurants, cafes, and cloud kitchens.</h1>
        <p className="hero-copy">
          Discover verified suppliers for produce, dairy, staples, packaging,
          meat, and beverages with reliable fulfillment windows.
        </p>
      </section>

      <div className="search-filter">
        <div className="search">
          <input
            type="text"
            className="search-restro"
            value={searchSupplier}
            placeholder="Search supplier, city, or category"
            onChange={(e) => {
              setSearchSupplier(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={() => {
              const filteredData = filterSuppliers(searchSupplier, suppliers);
              setSupplierList(filteredData);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter">
          <button
            onClick={() => {
              const bulkReadySuppliers = suppliers.filter(
                (supplier) => supplier.minOrderValue <= 3500
              );
              setSupplierList(bulkReadySuppliers);
            }}
          >
            Low MOQ
          </button>
        </div>
      </div>

      <div className="restro-container">
        {supplierList.length > 0 ? (
          supplierList.map((supplier) => {
            return <RestroCard key={supplier.id} restroData={supplier} />;
          })
        ) : (
          <p className="empty-state">No Hyperpure suppliers match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Body;

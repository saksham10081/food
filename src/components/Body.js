import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import ShimmerRestroList from "./ShimmerRestroList";

const Body = () => {
  const [restroList, setRestroList] = useState([]);
  const [searchRestro, setSearchRestro] = useState("");
  const [allRestroList, setAllRestroList] = useState([]);

  function filterRestro(searchRestro, allRestroList) {
    const filterRestroList = allRestroList.filter((res) =>
      res.data.name.toUpperCase().includes(searchRestro.toUpperCase())
    );
    return filterRestroList;
  }

  useEffect(() => {
    getRestroList();
  }, []);

  async function getRestroList() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestroList(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestroList(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestroList.length == 0 ? (
    <ShimmerRestroList />
  ) : (
    <div className="body">
      <div className="search-filter">
        <div className="search">
          <input
            type="text"
            className="search-restro"
            value={searchRestro}
            placeholder="Search your favourite dish"
            onChange={(e) => {
              setSearchRestro(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={() => {
              const data = filterRestro(searchRestro, allRestroList);
              setRestroList(data);
            }}
          >
            search
          </button>
        </div>

        <div className="filter">
          <button
            onClick={() => {
              const filterRestroList = restroList.filter(
                (res) => res.data.costForTwo > 50000
              );
              setRestroList(filterRestroList);
            }}
          >
            Filter
          </button>
        </div>
      </div>

      <div className="restro-container">
        {restroList.map((restro) => {
          return <RestroCard key={restro.data.id} restroData={restro} />;
        })}
      </div>
    </div>
  );
};

export default Body;

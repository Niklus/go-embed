import { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesList, setCountriesList] = useState([]);
  const [searched, setSearched] = useState([]);
  const [searchResult, setSearchResult] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/countries.json");
      const object = await response.json();
      setCountries(Object.values(object));
      setCountriesList(Object.values(object));
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();

    if (search === "") {
      setSearched(countriesList);
      setSearchResult(true);
      return;
    }
    const results = countriesList.filter((country) => {
      return (
        country.name.toLowerCase().startsWith(search) ||
        (country.capital.toLowerCase().startsWith(search) &&
          country.capital !== "N/A")
      );
    });
    setSearched(results);
    setSearchResult(true);
  };

  const handleRegions = (e) => {
    const region = e.target.value.toLowerCase();

    if (region === "") {
      setCountriesList(countries);
      setSearchResult(false);
      return;
    }

    const results = countries.filter((country) => {
      return country.region.toLowerCase() === region;
    });
    setCountriesList(results);
    setSearchResult(false);
  };

  if (!countries.length) {
    return <h1>Loading...</h1>;
  }

  let displayList;

  if (searchResult) {
    displayList = searched.map((country) => (
      <Card key={country.name} country={country} />
    ));
  } else {
    displayList = countriesList.map((country) => (
      <Card key={country.name} country={country} />
    ));
  }

  return (
    <>
      <Header onHandleRegions={handleRegions} onHandleSearch={handleSearch} />
      <main>{displayList}</main>
    </>
  );
}

export default App;

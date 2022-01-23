import React, { FormEvent, useState } from "react";
import Header from "../components/Header/Header";
import SearchInput from "../components/SearchInput/SearchInput";
import CountryList from "../components/CountryList/CountryList";
import useFetch from "../hooks/useFetch";
import FilterButton from "../components/FilterButton/FilterButton";

export default function Homeview() {
  const [searchCountries, setSearchCountries] = useState("");
  const [region, setRegion] = useState("");

  const regionRes = useFetch(`https://restcountries.com/v3.1/region/${region}`); // fetch countries by region

  const countriesRes = useFetch("https://restcountries.com/v3.1/all"); // fetch all countries
  // const searchRes = useFetch(
  //   `https://restcountries.com/v3.1/name/${searchCountries}`
  // ); // fetch countires by name

  console.log(regionRes.data.length);
  console.log(countriesRes);

  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    setSearchCountries(e.currentTarget.value);
  };

  return (
    <>
      <Header />
      <div className="search light">
        <SearchInput
          searchCountries={searchCountries}
          handleSearch={handleSearch}
        />
        <FilterButton setRegion={setRegion} />
      </div>
      <CountryList countriesRes={countriesRes} regionRes={regionRes} />
    </>
  );
}

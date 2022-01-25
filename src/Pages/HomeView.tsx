import React, { FormEvent, useState } from "react";
import Header from "../components/Header/Header";
import SearchInput from "../components/SearchInput/SearchInput";
import CountryList from "../components/CountryList/CountryList";
import useFetch from "../hooks/useFetch";
import FilterButton from "../components/FilterButton/FilterButton";

export default function Homeview() {
  const [searchCountries, setSearchCountries] = useState("");
  const [region, setRegion] = useState("");
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");

  const regionRes = useFetch(`https://restcountries.com/v3.1/region/${region}`); // fetch countries by region

  const countriesRes = useFetch("https://restcountries.com/v3.1/all"); // fetch all countries
  const searchRes = useFetch(
    `https://restcountries.com/v3.1/name/${searchCountries}`
  ); // fetch countires by name

  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    setSearchCountries(e.currentTarget.value);
    setRegion("");
  };

  const handleRegionChange = (value: string) => {
    setRegion(value);
  };

  // console.log(region);
  // console.log(regionRes);

  // console.log(countriesRes);

  return (
    <>
      <Header />
      <div className="search light">
        <SearchInput
          searchCountries={searchCountries}
          handleSearch={handleSearch}
        />
        <FilterButton handleRegionChange={handleRegionChange} />
      </div>
      <CountryList
        countriesRes={countriesRes}
        regionRes={regionRes}
        searchRes={searchRes}
      />
    </>
  );
}

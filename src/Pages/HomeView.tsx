import React, { FormEvent, useState } from "react";
import { Header } from "../components";
import { SearchInput } from "../components";
import { CountryList } from "../components";
import { FilterButton } from "../components";
import filterList from "../helpers/filterList";
import useFetch from "../hooks/useFetch";

export default function Homeview() {
  const [searchCountries, setSearchCountries] = useState("");
  const [region, setRegion] = useState("");

  const { resp } = useFetch("https://restcountries.com/v3.1/all"); // fetch all countries

  // everytime the state updates here (every letter typed), the component re-renders
  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    setSearchCountries(e.currentTarget.value);
    setRegion("");
  };

  const handleRegionChange = (value: string) => {
    setRegion(value);
  };

  // call filter.ts passing in the countries array, search input, and region then with whats returned, send THAT to CountryList
  const countriesArr = filterList(resp, searchCountries, region);

  return (
    <div className="">
      <Header />
      <div className="search light">
        <SearchInput
          searchCountries={searchCountries}
          handleSearch={handleSearch}
        />
        <FilterButton handleRegionChange={handleRegionChange} />
      </div>
      <CountryList countriesRes={countriesArr} />
    </div>
  );
}

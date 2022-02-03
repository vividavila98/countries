import React, { FormEvent, useState } from "react";
import Header from "../components/Header/Header";
import SearchInput from "../components/SearchInput/SearchInput";
import CountryList from "../components/CountryList/CountryList";
import useFetch from "../hooks/useFetch";
import FilterButton from "../components/FilterButton/FilterButton";
import filterList from "../helpers/filterList";

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

  /**
   * To do: call the API once, then loop thru the array to see what to return based on whatever event happens
   * Maybe use useMemo to save the array that's being rendered? So if you show the africa countries once it
   * doesn't have to be calculated again. Remember to break up the logic into its own component as a custom hook
   */

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
      <CountryList countriesRes={countriesArr} />
    </>
  );
}

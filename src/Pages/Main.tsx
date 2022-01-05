import React from 'react';
import Header from "../Components/Header/Header";
import Searchbar from "../Components/Searchbar/Searchbar";
import CountryList from "../Components/CountryList/CountryList";

export default function Main() {
  return (
    <div>
      <Header />
      <Searchbar />
      <CountryList />
    </div>
  )
}

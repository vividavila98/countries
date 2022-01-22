import React from "react";
import "./country-list.scss";
import Country from "../Country/Country";
import useFetch from "../../hooks/useFetch";

interface CountryResults {
  countriesRes: {
    data: any[];
    loading: boolean;
    error: any;
  };
  regionRes: {
    data: any[];
    loading: boolean;
    error: any;
  };
}

export default function CountryList(props: CountryResults) {
  // const { data } = useFetch("https://restcountries.com/v3.1/all"); // fetch all countries
  const { countriesRes, regionRes } = props;

  return (
    <section className="country-list light">
      {countriesRes.data.map((elem: any, index) => (
        <Country key={index} info={elem} />
      ))}
    </section>
  );
}

import React from "react";
import "./country-list.scss";
import { Country } from "../../components";

interface CountryResults {
  countriesRes: any;
}

export default function CountryList(props: CountryResults) {
  const { countriesRes } = props;

  return (
    <section className="country-list light">
      {countriesRes
        ? countriesRes.map((elem: any, index) => (
            <Country key={index} info={elem} />
          ))
        : ""}
    </section>
  );
}

import React from "react";
import "./country-list.scss";
import Country from "../Country/Country";

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
  const { countriesRes, regionRes } = props;

  let res;

  if (regionRes.data.length > 0) {
    res = regionRes.data;
  } else if (countriesRes.data.length > 0) {
    res = countriesRes.data;
  }

  console.log(res);

  return (
    <section className="country-list light">
      {res
        ? res.map((elem: any, index) => <Country key={index} info={elem} />)
        : ""}
    </section>
  );
}

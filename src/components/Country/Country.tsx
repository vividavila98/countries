import React from "react";

export default function Country(props: any) {
  const { info } = props;

  const flagStyle = {
    backgroundImage: `url(${info.flags.png})`,
    backgroundColor: "#000",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="country">
      <div className="img-header" style={flagStyle}></div>
      <div className="info">
        <p className="name country">{info.name.common}</p>
        <p className="population">
          <span className="name">Population:</span> {info.population}
        </p>
        <p className="region">
          <span className="name">Region:</span> {info.region}
        </p>
        <p className="capital">
          <span className="name">Capital:</span> {info.capital}
        </p>
      </div>
    </div>
  );
}

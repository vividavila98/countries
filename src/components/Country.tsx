import React from 'react';

interface Props {
    info: any;
}

export default function Country(props: Props) {
    const {info} = props;
    const flagStyle = {
      backgroundImage: `url(${info.flag})`,
      backgroundColor: '#000',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    };

  return (
    <div className="country">
      <div className="card">
          <div className="img-header" style={flagStyle}>
              {/*<img src={info.flag} alt="flag" />*/}
          </div>
          <div className="info">
              <p className="name">{info.name}</p>
              <p className="population"><span className="name">Population:</span> {info.population}</p>
              <p className="region"><span className="name">Region:</span> {info.region}</p>
              <p className="capital"><span className="name">Capital:</span> {info.capital}</p>
          </div>
      </div>
    </div>
  );
}

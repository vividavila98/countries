import React, { FormEvent } from "react";

interface SearchResults {
  searchCountries: string;
  handleSearch: (e: FormEvent<HTMLInputElement>) => void;
}

export default function SearchInput(props: SearchResults) {
  const { searchCountries, handleSearch } = props;

  return (
    <section className="light">
      <div>
        <input
          type="text"
          value={searchCountries}
          onChange={handleSearch}
          placeholder="Search for a country..."
        />
      </div>
    </section>
  );
}

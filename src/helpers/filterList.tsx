export default function filterList(arr: any, name: string, region: string) {
  let countriesArr = arr.data;
  let regionFilter;
  let nameFilter;

  if (region) {
    if (region === "All") return arr.data;
    regionFilter = countriesArr.filter((country: any) => {
      return country.region === region;
    });
    countriesArr = regionFilter;
  }

  if (name) {
    nameFilter = countriesArr.filter((country: any) => {
      return country.name.common
        .toLowerCase()
        .includes(name.toLocaleLowerCase());
    });
    countriesArr = nameFilter;
  }

  console.log(countriesArr);

  return countriesArr;
}

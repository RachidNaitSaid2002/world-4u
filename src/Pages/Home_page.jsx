
import Search from '../Search-compenent/search';
import Card_c from '../Card-country/card';
import { useState } from 'react';
function Home() {
  const [region,setRegion]=useState("All") 
  const [country,setCountry]=useState('')
  const handleRegionChange = (region) => {
    setRegion(region);
  };

  const handleCountryChange = (country) => {
    setCountry(country);
  };
  return (
    <>
      <Search  onRegionChange={handleRegionChange}
        onCountryChange={handleCountryChange}/>
      <Card_c region={region} country={country}/>
    </>
  );
}

export default Home;

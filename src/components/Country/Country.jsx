import { useState } from "react";
import "./country.css";
const Country = ({ country }) => {
const [visited, setVisited] = useState(false);  

  const handelVisited = () => {
    setVisited(true);
  };

  return (
    <div class="country">
      <h2>Name: {country.name.common}</h2>
      <img src={country.flags.png} alt="" />
      <h3>Independent: {country.independent ? "Free" : "Not Free"}</h3>
      <h4>Population:{country.population}</h4>
      <button onClick={handelVisited}>{
        visited ? 'visited' : 'Not visited'
        }</button>
    </div>
  );
};

export default Country;

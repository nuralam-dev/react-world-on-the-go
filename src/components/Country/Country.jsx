import "./country.css";
const Country = ({ country }) => {
  // console.log(country.independent);

  const handelVisited = () => {
    console.log("visited clicked");
  };

  return (
    <div class="country">
      <h2>Name: {country.name.common}</h2>
      <img src={country.flags.png} alt="" />
      <h3>Independent: {country.independent ? "Free" : "Not Free"}</h3>
      <h4>Population:{country.population}</h4>
      <button onClick={handelVisited}>Not Visited</button>
    </div>
  );
};

export default Country;

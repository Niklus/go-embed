const Card = ({ country }) => {
  return (
    <div className="card">
      <div
        className="image"
        style={{ background: `url("${country.flag.large}") no-repeat` }}
      ></div>
      <div className="card-body">
        <h2>{country.name}</h2>
        <p>population: {country.population}</p>
        <p>region: {country.region}</p>
        <p>capital: {country.capital}</p>
      </div>
    </div>
  );
};

export default Card;

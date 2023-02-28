const Header = ({ onHandleRegions, onHandleSearch }) => {
  return (
    <header>
      <div className="search-box">
        <input
          onChange={onHandleSearch}
          type="text"
          placeholder="Search by country or capital"
        />
      </div>
      <h1>Countries</h1>
      <select
        onChange={onHandleRegions}
        name="regions"
        className="region-select"
      >
        <option value="">All Regions</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antarctic</option>
      </select>
    </header>
  );
};

export default Header;

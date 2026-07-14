import { Search } from "lucide-react";
import { useState } from "react";

type SearchBarProps = {
  onSearch: (city: string) => void;
};

function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState("");
  const isDisabled = city.trim() === "";

  const handleSearch = () => {
    const trimmedCity = city.trim();

    if (!trimmedCity) return;

    onSearch(trimmedCity);
    setCity("");
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <button onClick={handleSearch} disabled = {isDisabled}>
        <Search size={20} />
      </button>
    </div>
  );
}

export default SearchBar;
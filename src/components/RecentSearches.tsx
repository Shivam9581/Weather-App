type RecentSearchesProps = {
  searches: string[];
  onSearch: (city: string) => void;
};

function RecentSearches({
  searches,
  onSearch,
}: RecentSearchesProps) {
  if (searches.length === 0) return null;

  return (
    <div className="recent-searches">
      <h3>Recent Searches</h3>

      <div className="chips">
        {searches.map((city) => (
          <button
            key={city}
            onClick={() => onSearch(city)}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;
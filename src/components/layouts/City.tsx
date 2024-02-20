interface Cities {
  title: string;
  id: string;
}
interface CityType {
  setSelectedCityId: (id: string) => void;
  cities: Cities[];
}
export default function City({ setSelectedCityId, cities }: CityType) {
  return (
    <div className="space-x-2">
      {cities.map((city) => (
        <button key={city.id} onClick={() => setSelectedCityId(city.id)}>
          {city.title}
        </button>
      ))}
    </div>
  );
}

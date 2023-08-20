import Search from "./Search";
import SelectFilterType from "./SelectFilterType";

export default function Filters() {
  return (
    <div className="flex items-center justify-between gap-3">
      <Search placeholder={"Search"} />
      <SelectFilterType />
    </div>
  );
}

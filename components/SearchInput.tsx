import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchInputProps {
  setSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ setSearch }: SearchInputProps) => {
  return (
    <div className="relative flex w-full max-w-md items-center space-x-2">
      <Input
        className="h-12 w-full border-2 border-primary/50 text-lg placeholder:text-foreground/50 focus-visible:ring-primary"
        type="text"
        placeholder="Search for a restaurant"
        onChange={setSearch}
      />
      <Search className="absolute right-5 h-4 w-4 text-primary" />
    </div>
  );
};

export default SearchInput;

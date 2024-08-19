import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  setSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchInput = ({ setSearch, onSearch }: SearchInputProps) => {
  return (
    <div className="flex w-full max-w-md items-center space-x-2">
      <Input
        className="w-full border-2 border-primary ring-primary placeholder:text-foreground/50"
        type="text"
        placeholder="ค้นหาร้านอาหารการันตีจากพีว่าดีย์"
        onChange={setSearch}
      />
      <Button
        type="submit"
        variant="default"
        className="font-bold"
        onClick={onSearch}
      >
        จิ้มโลด
      </Button>
    </div>
  );
};

export default SearchInput;

import { SearchIcon } from 'lucide-react';
import InputGroup from '@/components/ui/input-group';

const SearchBar = () => {
  return (
    <>
      <InputGroup className="hidden md:flex bg-primary/10 mr-3 lg:mr-10">
        <InputGroup.Text>
          <SearchIcon className="w-5 h-5 min-w-5 min-h-5 text-black/40"></SearchIcon>
        </InputGroup.Text>
        <InputGroup.Input
          type="search"
          name="search"
          placeholder="Search for products..."
          className="bg-transparent placeholder:text-black/40"
        />
      </InputGroup>
    </>
  );
};

export default SearchBar;

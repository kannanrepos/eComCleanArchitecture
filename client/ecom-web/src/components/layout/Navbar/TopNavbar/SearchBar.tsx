'use client';
import { ChangeEvent, useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { redirect } from 'next/navigation';

import InputGroup from '@/components/ui/input-group';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.target.value);
    console.log(e.target.value);
  };
  const handleOnSubmit = () => {
    redirect(`/search?q=${searchText}`);
  };
  return (
    <>
      <InputGroup className="hidden md:flex bg-primary-foreground mr-3 lg:mr-10">
        <InputGroup.Text>
          <SearchIcon className="w-5 h-5 min-w-5 min-h-5 text-black/40"></SearchIcon>
        </InputGroup.Text>
        <InputGroup.Input
          type="search"
          name="search"
          placeholder="Search for products..."
          className="bg-transparent placeholder:text-black/40"
          onChange={handleOnInputChange}
          onSubmit={handleOnSubmit}
        />
      </InputGroup>
    </>
  );
};
export default SearchBar;

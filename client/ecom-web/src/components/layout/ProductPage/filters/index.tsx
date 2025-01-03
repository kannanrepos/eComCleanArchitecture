'use client';
import {
  BrandFilterData,
  CategoryFilterData,
  GenderFilterData,
  RatingFilterData,
} from '@/lib/data';
import { FilterData } from '../../../ui/checkbox-list';
import { Separator } from '../../../ui/separator';
import BrandSection from './BrandSection';
import CategorySection from './CategorySection';
import ColorsSection from './ColorsSection';
import GenderSection from './GenderSection';
import PriceSection from './PriceSection';
import RatingSection from './RatingSection';
import { useState } from 'react';

const Filters = () => {
  const [filteredBrands, setFilteredBrands] = useState<FilterData[]>([]);
  const [filteredGenders, setFilteredGenders] = useState<FilterData[]>([]);
  const [filteredRatings, setFilteredRatings] = useState<FilterData[]>([]);
  const [filteredCategory, setFilteredCategory] = useState<FilterData[]>([]);

  const onCategorySelected = (data: FilterData[] | undefined) => {
    if (data) {
      setFilteredCategory(data);
    }
  };
  const onBrandSelected = (data: FilterData[] | undefined) => {
    if (data) {
      setFilteredBrands(data);
    }
  };

  const onGenderSelected = (data: FilterData[] | undefined) => {
    if (data) {
      setFilteredGenders(data);
    }
  };

  const onRatingSelected = (data: FilterData[] | undefined) => {
    if (data) {
      setFilteredRatings(data);
    }
  };

  return (
    <>
      <Separator />
      <CategorySection
        data={CategoryFilterData}
        onSelected={onCategorySelected}
      />
      <Separator />
      <PriceSection />
      <Separator />
      <BrandSection data={BrandFilterData} onSelected={onBrandSelected} />
      <Separator />
      <GenderSection data={GenderFilterData} onSelected={onGenderSelected} />
      <Separator />
      <ColorsSection />
      <Separator />
      <RatingSection data={RatingFilterData} onSelected={onRatingSelected} />
    </>
  );
};

export default Filters;

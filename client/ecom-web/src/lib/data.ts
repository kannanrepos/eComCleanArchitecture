import { FilterData } from '@/components/ui/checkbox-list';
import { Product } from '../types/product.types';
export const CartDataItem: Product[] = [
  {
    id: 1,
    title: 'T-shirt with Tape Details',
    srcUrl: '/images/pic1.png',
    gallery: ['/images/pic1.png', '/images/pic10.png', '/images/pic11.png'],
    price: 120,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: 'Skinny Fit Jeans',
    srcUrl: '/images/pic2.png',
    gallery: ['/images/pic2.png'],
    price: 260,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
  },
  {
    id: 3,
    title: 'Chechered Shirt',
    srcUrl: '/images/pic3.png',
    gallery: ['/images/pic3.png'],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: 'Sleeve Striped T-shirt',
    srcUrl: '/images/pic4.png',
    gallery: ['/images/pic4.png', '/images/pic10.png', '/images/pic11.png'],
    price: 160,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
  },
];
export const CategoryFilterData: FilterData[] = [
  {
    id: '1',
    value: 'Shoes',
    label: 'Shoes',
  },
  {
    id: '2',
    value: 'Clothing',
    label: 'Clothing',
  },
  {
    id: '3',
    value: 'Accessories',
    label: 'Accessories',
  },
  {
    id: '4',
    value: 'Bags',
    label: 'Bags',
  },
  {
    id: '5',
    value: 'Watches',
    label: 'Watches',
  },
  {
    id: '6',
    value: 'Sunglasses',
    label: 'Sunglasses',
  },
  {
    id: '7',
    value: 'Hats',
    label: 'Hats',
  },
  {
    id: '8',
    value: 'Jewelry',
    label: 'Jewelry',
  },
  {
    id: '9',
    value: 'Backpacks',
    label: 'Backpacks',
  },
];

export const BrandFilterData: FilterData[] = [
  {
    id: '1',
    value: 'Nike',
    label: 'Nike',
  },
  {
    id: '2',
    value: 'Adidas',
    label: 'Adidas',
  },
  {
    id: '3',
    value: 'Puma',
    label: 'Puma',
  },
  {
    id: '4',
    value: 'Reebok',
    label: 'Reebok',
  },
  {
    id: '5',
    value: 'New Balance',
    label: 'New Balance',
  },
  {
    id: '6',
    value: 'Converse',
    label: 'Converse',
  },
  {
    id: '7',
    value: 'Vans',
    label: 'Vans',
  },
  {
    id: '8',
    value: 'Skechers',
    label: 'Skechers',
  },
  {
    id: '9',
    value: 'Under Armour',
    label: 'Under Armour',
  },
];

export const GenderFilterData: FilterData[] = [
  {
    id: '1',
    value: 'Men',
    label: 'Men',
  },
  {
    id: '2',
    value: 'Women',
    label: 'Women',
  },
  {
    id: '3',
    value: 'Kids',
    label: 'Kids',
  },
];

export const RatingFilterData: FilterData[] = [
  {
    id: '1',
    value: '4',
    label: '4',
  },
  {
    id: '2',
    value: '3',
    label: '3',
  },
  {
    id: '3',
    value: '2',
    label: '2',
  },
  {
    id: '4',
    value: '1',
    label: '1',
  },
];

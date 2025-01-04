import { FilterData } from '@/components/ui/checkbox-list';
import { Product } from '../types/product.types';
import { Color } from './features/products/productsSlice';
import { BredcumProp } from '../types/breadcrumb.type';
import { FaqItem } from '../types/FaqItem.types';
import { SpecItem } from '../types/SpecItem.type';
import { Address } from '../types/address.type';
import { NavMenu } from '../types/navbar.types';

export const NavMenuItemsData: NavMenu = [
  {
    id: 1,
    label: 'Shop',
    type: 'MenuList',
    children: [
      {
        id: 11,
        label: "Men's clothes",
        url: '/shop#men-clothes',
        description: 'In attractive and spectacular colors and designs',
      },
      {
        id: 12,
        label: "Women's clothes",
        url: '/shop#women-clothes',
        description: 'Ladies, your style and tastes are important to us',
      },
      {
        id: 13,
        label: 'Kids clothes',
        url: '/shop#kids-clothes',
        description: 'For all ages, with happy and beautiful colors',
      },
      {
        id: 14,
        label: 'Bags and Shoes',
        url: '/shop#bag-shoes',
        description: 'Suitable for men, women and all tastes and styles',
      },
    ],
  },
  {
    id: 2,
    type: 'MenuItem',
    label: 'On Sale',
    url: '/shop#on-sale',
    children: [],
  },
  {
    id: 3,
    type: 'MenuItem',
    label: 'New Arrivals',
    url: '/shop#new-arrivals',
    children: [],
  },
  {
    id: 4,
    type: 'MenuItem',
    label: 'Brands',
    url: '/shop#brands',
    children: [],
  },
];

export const deliveryAddress: Address = {
  id: '1',
  name: 'Kannan S',
  address:
    '123, Main Road 5th Avenue, Rajapalayam, Santhinagar Post, Tamil Nadu, India',
  phone: '123-456-7890',
  email: 'kannan@example.com',
  zipCode: '12345',
  city: 'City',
  state: 'State',
  country: 'Country',
  isDefault: false,
  type: 'Home',
};
export const AddressList: Address[] = [
  { ...deliveryAddress, id: '1', isDefault: true },
  { ...deliveryAddress, id: '2', isDefault: false },
  { ...deliveryAddress, id: '3', isDefault: false },
  { ...deliveryAddress, id: '4', isDefault: false },
  { ...deliveryAddress, id: '5', isDefault: false },
  { ...deliveryAddress, id: '6', isDefault: false },
  { ...deliveryAddress, id: '7', isDefault: false },
  { ...deliveryAddress, id: '8', isDefault: false },
  { ...deliveryAddress, id: '9', isDefault: false },
];
export const specsData: SpecItem[] = [
  {
    label: ' Material composition',
    value: '100% Cotton',
  },
  {
    label: 'Care instructions',
    value: 'Machine wash warm, tumble dry',
  },
  {
    label: 'Fit type',
    value: 'Classic Fit',
  },
  {
    label: 'Pattern',
    value: 'Solid',
  },
];
export const faqsData: FaqItem[] = [
  {
    question: 'What is the material of the t-shirt?',
    answer:
      'Provide details about the fabric type (e.g., cotton, polyester, blend), weight, and any specific features.',
  },
  {
    question: 'What are the care instructions for the t-shirt?',
    answer:
      'Outline recommended washing, drying, and ironing methods to maintain quality and longevity.',
  },
  {
    question: 'What is the design or print on the t-shirt made of?',
    answer:
      'Explain the material used for the design (e.g., vinyl, screen print, embroidery) and its durability.',
  },
  {
    question: 'Is the t-shirt unisex or designed for specific genders?',
    answer:
      'Indicate whether the shirt is suitable for both men and women or targeted towards a particular gender.',
  },
  {
    question: 'What are the shipping options and costs?',
    answer:
      'Provide information about shipping methods, estimated delivery times, and associated fees.',
  },
  {
    question: 'What is the return policy for the t-shirt?',
    answer:
      'Outline the return window, conditions, and refund or exchange procedures.',
  },
];
export const CartItemBreadCrumbData: BredcumProp[] = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Cart',
    url: '/cart',
  },
];
export const SearchPageBreadCrumbData: BredcumProp[] = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Search',
  },
];
export const ProductDetailBreadcrumbData: BredcumProp[] = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Product',
    url: '/search',
  },
  {
    id: 3,
    title: 'Product Detail',
  },
];
export const colorsData: Color[] = [
  {
    name: 'Brown',
    code: 'bg-[#4F4631]',
  },
  {
    name: 'Green',
    code: 'bg-[#314F4A]',
  },
  {
    name: 'Blue',
    code: 'bg-[#31344F]',
  },
];
export const categoriesData = [
  {
    id: 1,
    title: 'Grocery',
    srcUrl: '🛍️',
    color: 'bg-[#16a34a]',
  },
  {
    id: 2,
    title: 'Mobiles',
    srcUrl: '📱',
    color: 'bg-[#db2777]',
  },
  {
    id: 3,
    title: 'Fashion',
    srcUrl: '👗',
    color: 'bg-[#af12c4]',
  },
  {
    id: 4,
    title: 'Electronics',
    srcUrl: '💻',
    color: 'bg-[#f97316]',
  },
  {
    id: 5,
    title: 'Furniture',
    srcUrl: '🛋️',
    color: 'bg-[#8b5cf6]',
  },
  {
    id: 6,
    title: 'Shoes',
    srcUrl: '👟',
    color: 'bg-[#ec4899]',
  },
  {
    id: 7,
    title: 'Kids',
    srcUrl: '👶',
    color: 'bg-[#f43f5e]',
  },
];

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

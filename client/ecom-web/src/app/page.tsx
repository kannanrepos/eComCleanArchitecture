'use client';
import Header from '@/components/homepage/Header';
import ProductListSection from '../components/common/ProductListSection';
import { Product } from '../types/product.types';
import Categories from '../components/homepage/Category';
import Reviews from '../components/homepage/Reviews';
import { Review } from '../types/review.types';
// import { motion } from 'framer-motion';

export const productList: Product[] = [
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
  {
    id: 5,
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
    id: 6,
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
  {
    id: 7,
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
export const reviewsData: Review[] = [
  {
    id: 1,
    user: 'Alex K.',
    content:
      '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
    rating: 5,
    date: 'August 14, 2023',
  },
  {
    id: 2,
    user: 'Sarah M.',
    content: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    rating: 5,
    date: 'August 15, 2023',
  },
  {
    id: 3,
    user: 'Ethan R.',
    content: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
    rating: 5,
    date: 'August 16, 2023',
  },
  {
    id: 4,
    user: 'Olivia P.',
    content: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
    rating: 5,
    date: 'August 17, 2023',
  },
  {
    id: 5,
    user: 'Liam K.',
    content: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
    rating: 5,
    date: 'August 18, 2023',
  },
  {
    id: 6,
    user: 'Samantha D.',
    content: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
    rating: 5,
    date: 'August 19, 2023',
  },
];
export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSection
          title="NEW ARRIVALS"
          data={productList}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}

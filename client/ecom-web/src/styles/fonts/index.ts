import localFont from 'next/font/local';

const parkinsansCF = localFont({
  src: [
    {
      path: './Parkinsans/Parkinsans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Parkinsans/Parkinsans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Parkinsans/Parkinsans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  fallback: ['sans-serif'],
  variable: '--font-parkinsansCF',
});
const merriweather = localFont({
  src: [
    {
      path: './Merriweather/MerriweatherSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Merriweather/MerriweatherSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Merriweather/MerriweatherSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  fallback: ['sans-serif'],
  variable: '--font-merriweatherSansCF',
});

export { parkinsansCF, merriweather };

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Review } from '../types/review.types';
import { Product } from '../types/product.types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  }).format(price);
}

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

export const newArrivalsData: Product[] = [
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

export const topSellingData: Product[] = [
  {
    id: 5,
    title: 'Vertical Striped Shirt',
    srcUrl: '/images/pic5.png',
    gallery: ['/images/pic5.png', '/images/pic10.png', '/images/pic11.png'],
    price: 232,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
  },
  {
    id: 6,
    title: 'Courage Graphic T-shirt',
    srcUrl: '/images/pic6.png',
    gallery: ['/images/pic6.png', '/images/pic10.png', '/images/pic11.png'],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
  },
  {
    id: 7,
    title: 'Loose Fit Bermuda Shorts',
    srcUrl: '/images/pic7.png',
    gallery: ['/images/pic7.png'],
    price: 80,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.0,
  },
  {
    id: 8,
    title: 'Faded Skinny Jeans',
    srcUrl: '/images/pic8.png',
    gallery: ['/images/pic8.png'],
    price: 210,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: 'Polo with Contrast Trims',
    srcUrl: '/images/pic12.png',
    gallery: ['/images/pic12.png', '/images/pic10.png', '/images/pic11.png'],
    price: 242,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: 'Gradient Graphic T-shirt',
    srcUrl: '/images/pic13.png',
    gallery: ['/images/pic13.png', '/images/pic10.png', '/images/pic11.png'],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
  },
  {
    id: 14,
    title: 'Polo with Tipping Details',
    srcUrl: '/images/pic14.png',
    gallery: ['/images/pic14.png'],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: 'Black Striped T-shirt',
    srcUrl: '/images/pic15.png',
    gallery: ['/images/pic15.png'],
    price: 150,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
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

export const base64Image =
  'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAScAAAEqCAYAAABXxJafAAAAAXNSR0IArs4c6QAAIABJREFUeF7snQeYFtX1/+fdwu7SSyxg7NhjQ6UJEkAFEcRYUEGxxMjP3hNbFMUutqgxxl7QBEUxaiyIKCDSsSeW2BGkd7a+7///nd3vejieOzPv+qoLe3kent193zt37j1zz+d+z5k7d1KB/+ct4C3gLVAPLZCqh23yTfIW8BbwFgg8nPwg8BbwFqiXFvBwqpeXxTfKW8BbwMPJjwFvAW+BemkBD6d6eVl8o7wFvAU8nPwY8BbwFqiXFvBwqpeXxTfKW8BbwMPJjwFvAW+BemkBD6d6eVl8o7wFvAU8nPwY8BbwFqiXFvBwqpeXxTfKW8BbwMPJjwFvAW+BemkBD6d6eVl8o7wFvAU8nPwY8BbwFqiXFvBwqpeXxTfKW8BbwMPJjwFvAW+BemkBD6d6eVl8o7wFvAU8nPwY8BbwFqiXFvBwqpeXxTfKW8BbwMPJjwFvAW+BemkBD6d6eVl8o7wFvAU8nPwY8BbwFqiXFvBwqpeXxTfKW8BbwMPJjwFvAW+BemkBD6d6eVl8o7wFvAU8nPwY8BbwFqiXFvBwqpeXxTfKW8BbwMPJjwFvAW+BemkBD6d6eVl8o7wFvAU8nPwY8BbwFqiXFvBwqpeXxTfKW8BbwMPJjwFvAW+BemkBD6d6eVl8o7wFvAU8nPwY8BbwFqiXFvBwqpeXxTfKW8BbwMNpAx8Do0ePbjRo0KDyDambEyZMKOjZs2flhtQn35cfWsDDaQMeFSccd9yA/37y38MXfLegst+Bff925z33zFyfu3vyycfvNX7ca6dusdXWZS1bNn/pnHPOf9FDan2+otFt93DawK7tCy+8sOX4V17ZdcqUqX9YvXp1j8JGhS2WLFkS5OfnfVZc3HjCPh32uO+IY475qH///kvXh65Pev75Vk/8+987vTb+tZPzUqleZWVlWzZp0iRIpVJLCgsbjevcde+/HXDAfv8ZOHDwd+tDf3wbk1vAwym5rep1yQceeGDzp0Y/dcq8efMGVlVVbldWVlZcVFQU5OXlBYsWLQoaNWoU5Ofnh05dXFz04SabbPLcHh06PHPUUUd9sffee1fUp84hbHvjjTe2mDRp0hHzv/12YFVVepfS0tIWBQUFQVlZWbDRRhsFFRUVQWVlZdCoqGB5VWXlf379682eGDCwz+jTT//j/PrUF9+WulvAw6nutqsXR44ePXrTZ599dv+PPvrorLKysn3gsHDidDod/k+lUsGqVauCTCYT/i8uLg5/FhYWBlVVVV8VFuTNadGy5YSue3cct+/ee3932PHHL/4lOvb000+3mTp16sbTpk3b/7vvvuuZl5e3eyaT2QYQAmDXrl1b24fmzZuH/cK/VJAOf+bn51cWFBa+2b79tjf37z9w2tChQxf8Ev3w58ydBTyccmfLn62m0aNH5y9ePHfz1159Y+D/Pv9q6OrVq39TXFzcCFAiiODQgBN+lpeXh4oDygll8B//8B2cG0ArLi6eX1lV9Vl+KvXe5r/e4tn2O+zw8Q47tF228cbtlw0aNKgql50bPnx4XosWLZp//vnnzT/44IPtly1b9rvS0tI9qqqqAKNN2UYAKQRQKgWQsp0hWPEv7F8qE/YPoR7U4dKlS9cUFBS83WHPPR7Zu+Me/z7vvEu/SaVSmVy239f181jAw+nnsfOPPksmk0ndd999W40bN27/L7744uCysrJdKioqtq2srExRRQA2cGL8hIOXlpaGv+P/6tWrQ6dGWTgxYIWf+Mff8R0cvqCgIJNKpRbn5eXNzcvL+6yysvKLvLy8j1q3bv1h+/btv9ppp51Wt2rVqqxt27bl06dPrxg+fHi1fAkCqJu8559/vnjt2rXFy5cvL/zuu+8azZ8/v8nHH3+89YIFC35TWlr667y8vM2CIPh1Op3erFGjRpusXbu2EOcGPHH+mvAzbD8/w+eAEFQTYAr1VwvYVCrsV62aqlFVVVVVn5aUlMzadtttn/vd7343eciQIV/+6AvhK/jZLODh9LOZum4nGjNmTNuJEyf+Zvbs2aesXr16z3Q6vfWaNWvy4KyAC50ajlsTqgVr1qwJmG9CWIRycHSCCQ5PIMHJ4ezS0WsgE37GMLEGEmWZTGZZfn7+ovz8fMBrVWVl5dpUKlWeyWTSAGheXl6jVCrVOD8/v1kQBM2qqqpaVFVVtaqqqmqeSuHrvLAdOC/6UKuAapQewziEn4QN2oD24mfTpk3DfFMNRENgNW7cOAQwoYW6cSxhXFpamm7UqNEnTZs2nbL77rvf269fv88GDhzoE+h1G5I/21EeTj+bqZOfaNq0aW2ef/757SdOnHjSypUrOwZBsBWcGw7KvBGcc8WKFWGlzCOVlJSETrts2bJQOQFQhBAcF44M58Y/OC/KEAZUIjie6gtAYq6K3+MzKjTUSZXDnyjHEAx1ERCEEIGE8viPssyNoV62DT/xHcsAuKgLbUbbcW78jfYzx0bAop+oE6Ee82v4DHbKz89fXlpa+nGrVq0mduvWbVT//v0/7dat28rkV8eX/Lks4OH0c1k6wXlGjRq1zSuvvHLYhx9+OGjt2rXbplKp1lQJzBfBKem0UoUAQgQOHZ4gYP4JMIPKgMNCTeFzKhQ4L5wcn+McTKhLOFmhFM4l/zG8oupB+/kZ2ysBJMvzd9TJu3FQfGwLYIPv2EaUR16qVatWIajQB6oyqigci1AQYS3aT7ii/tatW8+vqCh9d+edd76/e/ffTh02bNhXCS6TL/IzWcDD6WcytOs0Dz/8cJtJkyZ1mD179kmZTGafRo0abQuHYwKbQGA+iOEM/kYZqgU4J52YqoPHUH3AQZnTASjorHB6fA6lRSensiHYWDd/EpJUO4QYwcPPARKGWbJOhnVUbswp4W8CmaFaTcI+BCnDTPQNMGrWrFkILPyOf2g/68bx7DvAS6VFcIaqsjAfwC5Lp9P/ywSpSbvvvseDhx122P8GDBiw6BceGg3+9B5Ov9AQuHHEiO1efO3VE5csWdYvk8lsGwRBUzgYwxU4ExUM80r4CcclkOCEvM1OBUSYMZkMxwV0CBWERwAGPmf4he9RHp8jNJTKjKEZHJtA411AOj7aw/NqVcTvCC+GjVR3PI5KiefAcbABzoG2AUK8a4fv0F/cmUQZqf5k29kWwhEwQlkCOgRdfrVN+Xl5efnSRo0afbRZu3bP7t1xj3+OGHHTF/5u3y/jJB5OP6Pdx40b1+KJJ57o8OGHHwwrKyvttGbNmq0KCqqVhVQedCqGKNLhpbOz6XA2OiCXCRACcG4CD+Xh0HBguRaKd/TwvawL54eqWrly5Tq375G3QjnmnHA84EWYUn0x37N06dIQkLKfaBfDMJyHUJJl2H/UxzBUto/tplLisayPCklCSkJUX3odkgZBgLt9k3bdddf7jjzyyPf79etXneTz/34WC3g4/Qxmnjp1avMHH3yw58SJr59TWFi4ayaTaQNIVIck34NJq49s4CTDKRkCUiUQagyBqDCYyNbhGR0VYAKgkK+iskM70XYoDuSw0Bfmu7hsAfBDGUBl+fLlYTmpsPA5FZiECEGD9lEZykQ4AUQw0UY8ToKd9fKnngB46WXoLNtC9ZbJZBalUqkZe+655x1HH330mx5SP4PThAts/b+fzAKZzOj8c8+d0vnNNydeunz5ii7NmzdvCWeHM8BZq9cefa8oZEO0k2gH1gqAykmXA0CgWhhGcf0T8lp0eiaqtdJAe5hoxyMwKI//UEIyF8WQD+eiamKuabvttgvL804iE9UMxZi0J7hkTot5MOaOqOzwk/krHm8pTwkqCUYJI/5O+0mVxd9hO1yvdDq9JAiCSd27d7/htNNOm7XLLrtsULs9/GSOUMeKPZzqaLi4w6666s97PfvscxeVlpbul59fsDHDLDoJVUEQVN8+17CJg5M8RgOJqgdlGHrJW/hQQHKBJsMgGd5Jp4VqkhDh3wQQnBcQY/iFvBaXMuy+++7BggULQpigLUx2A5hUbRpMVE1og1zvJMM2uRRBKyANeQvs+jMeY9mSeT30F5Bavnz5vI022mh8jx49brzhhhveixsL/vu6WcDDqW52cx512WWXbffss88MLy0t7YGV0Ax34Fi8rc61P9WLH7OHk1YBhJErLOQdMQBDOj6T64QTb7NToRCoCNvwHe8i4nsoISgiqkDUhTL4x3MgHAScvvnmm7AcP0e9NWuOahda8pwynONKdwlKqhmCVC9lkBfGpSYliFyKS9YDu/H64SdX1peXl/+vpKTopYMOOnjk9ddf/0WOh1KDr87DKUdDYMKECb+67rprTp87d+6x+fn57Rm+wIkRytGh4cRULdV3iNwNcOWcXHCy1BRnfXkrnU4PtUMYSEBJOMEZqbTwOVQRINSjR49QCb333nvBZpttFqqmr776Kli8eHFtnVhftOuuuwZffPFF+BnBgp9cwS7DMpnspjKywCRzSVLRuSxpqSR+xnPKtkm743qhDVwDRkh9ny/LpEtKSmZvtlm76w455HfPDRs2rF7t8JCj4f2LVOPhlAOz33zzzds//PDDNwZBcEBlZWVjODOcEcqBj13AebnimqEKEsVwUv0vyplYNsppZRmGU9L5+DvVDPNRVCPMJ/F7QAhAxd8ALdp3wgknBDvttFOYe5o/f37tqvHNN988hNSkSZNCxbTVVlsFn3/+ee0qcD4rx0dveC7CSya6ZSKb6tAVjrnCYplLknaRdVtQZ32AEtqEa8rV6FSgaPPatau5hct3hYX5owYPHnrDhRde6HdEyIFfeTj9SCOefvrp/aZOnXoNnqoHaBD6YNBCMTH3Ip1ChhEMgzQ4ZJNk8lY3VdalnRffYXbnWiE+0sFb/nzmDscBPny+ToZ2rIOLN9E3lEddO+64Y9CyZcugRYsW4d26jTfeOJg7d26w5ZZbBgsXLgy+/vrrsBw+//LL6udtZRKbSXR8zvNT0RHiVCe0DxP3VHYSPHFwkmqIdowDHetH+whTrh/D39WPxFQ/t4hr3rp16/KVK1eM79q10x/vv//R93/k0Grwh3s41XEIYEO0e+65+8yPP/703EwmszkXNcowQTsBHUgvZpRN0IlwrZT0jO8K/QgueSeOOSR8R4UCx+MyAt4p0yaB+mO+SYZeqEc+TgMb8Hxw3D333DNUhlBQ3OYEZbjgEZ+hXrmNC+tn+xi2yTt2DEXRTrloU4PcZUsL/lGf6TAS58dn1bCtXsRJNYVJqaKifObOO+962ejRo1+u4/Dyh/mlBHUbAx988EGjyy656Iq53357SmVV5lcMf+jcOskq1xBJlaRn+2wUlHWsDNcsOFEJsRwcjMlyuQiS/WCohTJc40QI8zETOGXr1q3D59cAISbZ8fn2229fG/ZBaVB94CdUJR9LkXcXqVaYAyOcCAP2QYPeupJ1hZMM83jtaDMCnu2rqqq+EUAlxQer165d+8m222533dixYx/yK8zr5mdeOWVpN2wLcsxRR1758SefnJmXl9cynfl++w86Dmd/AoK3zPXqa+kEUWCS5Vy5En28BSfWI8FGtaMXYfK2P9oO5QSYcFcEqcYQ8kEdQQ3hd5k7Qk4KUMMuCVAUDCH52At+4jirf/xMqhYCVCbXrXDNCttcl9kFeV1e2h3XkXDC8Vw2weQ5+9eoUaOvttxyy6vHjBlzb5bDzBf3yin7MXDiiUPP+OD9D66oqKj4VbjKuqB6wzbCQKsnrsTGYJZwkjNyklbokEU6lZWX4rkIRp1fkYpEJ57RHioErGlCH5gXonJif7EKHL/DMfF79csUqtc07bPPPqGa4jNtLIfvEdIBWDJvxHZIuDMvp+HA0DTOdnHqKQ5OUXbCNYRiIpQAaV5nArysrOyLbbfd9s9jx459LK6t/vt1LeCVUxYj4qA+B1yyaMnis9esXrNx7YLFVPjSgNpa6Fj8qeEkZ92oWV/O/gSBdjRXWMjyMkTSoZMMPWW9dCqGqgz9oJygjHjXjmHapptuGkIJAIJK+vTTT0PgAE5QToAVbMDygA3XDRHQbJtstww9pSqUeTENeK0q49SoVq5WeWknHZ6HdxqDTKgcK8ur9zqXd/JgKyzabNas2edNSkqufuXVVx/IYrg1+KIeTgmHwLBhv+876Y3J92aCzK8RijAPU1wSvqYorIWwkXkROcNbyilunU4UwKTq0N2QIaa8Pa/LyZwTvpMOyCUGvOOHtvKWOs8tHwrmtiW828YHhAkkvSJc3n2jWqM9eNeQMJeqiglpnQ+SfbPUZMJLvU4xmXCXbeD1rqiqDOEcpKuBjPZyVT63aEF7K8oq/rtPp33+8MQTT0yuSzsa4jEeTgmu+qhRo7a8+uorR69ds7YjZklu79GmTZugsqp6L2tLmWhn0SGCnJVdzcgFnPTKb6moeLue4YhUDwQcP9PJaYZcWErAu35YXoDjuMCToQ/rksDjzghaAUrYSzixjb8knOT1wO/5hdVb2+D3cEeIdHWIi/5L9YwlF+l0+uVThw494fQ/+tdXJXA7/+BvEiN17tzp7ytXLD+5rKwsBXWAEAW3wAGqxk2q9xmScGK4IJ2O4YiGWFxoV1c40THQFioWhmrS4XmLn6EYYUW1JUMt1+/cYQDn4o6aqIcPHOP8fHSHj35IZUfFxuUCbCchBBtQZRFu7Bevnyvkjcs5RV1/wpAwrw3lxWSUV1C93xT7WlFWvZc7+svHfsQ1X7NRmzbXTp8585ok466hl/HKKWYE3Hjjjfs+8sgjo1avXr0lijK5i0QxVoAjxOMtcgxigoASX96i12GY/Jsgi1IRElRadbmcUyojHi+T9gSDBhjrZ4imAUxISDVlgULv0CnzQmybBU+CSrZfhssSFFrtSRsmXcZhQYzXR4aIMk9GQMpHgFCWjygxBGZOrubJgA9OOumkIy655JL/NnT4xPXfwynCQjNnzmx84YUXPv3ll1/2weDFIORzcVyjgxmTz4kRTqhS5pekinGdLgmcdJgYl1ehM8tb/4SOXMgolQlVH88l1RIhIMHA2/qybVIdcuW5PFZCUuadJHxkaCeT9LTlTwUnS6lqOEmQ6TCPeTmME24pjIkMdyaRHK/Zdua+Bx544Oy99957TZyDNuTvPZwirv7JJx5/6YSJky8tLCwsQRjHh3n5BD5mfIAJA493oKQy4MDVDq4d2QUmV8giw0bpxBpe+FvmZ2R7NDC1w+nwU6otCTMqJ6nk5PeEEz/ToJHK0mq/Bmuu4aT7LaFsDQ3dHpahouJziHy+kteW+TWop6Kionnbb7/92c8888yTDRk+cX33cHJY6N57/7rXLTff9nhBYdH2GGC4JU5lJN+eC0DhrhTzLtJJ+ZCrhJN0Bh026JDOBSdZToaGEowEmF66IFWd63zSJPIOGwHlusOolZwEHJWTbKN1fiu8Yj1UVrIuDWcNSa2ELPvryUJDUrZZKjapTHlzAFDCRMY7l9wtlJME13dVVFS8dfbZZw8+9dRT/VYrDh/0cDIMg3DujNNPfWLFihWHVKWD2gc7UZTPkmGQcl8m5BS4RzYdGGXl3Sg6TbZwcuVC9Ayvy9HxLThZSk4DT6oz5n/4meXMrvPLEM4ag4SrvGUv4SPhqyEv4afBLMEu+xYHJz0h6PPjeIII33GFPd+nh3AO68F49xL25zjgg884rmYL47uuvPLK8/v161f9Gh3/bx0LeDgZA2LQEb+74J1337u8pKSk2eo1pbUPp2I25N06QgiAwnNl3IY2Dk6u8VcX1aRhYTmovDOnk8NSiWggaIBFhX0u9SLDVUvR8JxWTolhoFYxGjTWuTU8k8JJgohti4KTzCtSYUo4EVisi7sb4EYKtstp1qzZgl122fGc0aPHPOG59EMLeDgpm9x66607PXD/vWPS6fROIYiKSkLlhIHFtStyFTDCOcKJzk4gMKyLS4hHhVd6pteXUIdSWlHpdUJW6Cfr0GEXwKHv7tHZtMqQ52adGogSggSQpdqsuiXg+L2+e2aBKA5Olv11KIfz0ZZ8w418xo+AJZzwHXdbkPu4c5kBxkyYw0xXzjr7nPOOGjZs2P88oNa1gIeTsAdeSLBft9tGLV6y+CiuZSqvqN4eA4MO/zAI+TvXtmCBHZQTBzAHOx8A1eGIBoj1t1YEWiXJmV07snQ2uVZI54BQjvDRgGKbdVjGv/k94eDqkw699Hlk/YSV/syCngtO0k4636Shqm3qgjT7KCcd1E3b4jiGepjA+AA0b5JwQ0Eej/IM9fBSz/y8vHvvuff+s7t27brWA+p7C3g4idFwyim/Hzx92vQ7ysvLW2MAhWuVMtWDkLkmHargcCTEsTIaSotAwuc6Ia6djCGDdOAoFWWpJFcdUq2x/rj8lXSMKLVBp3apNg0ICwraCa22Rakn2e8oh7YAJdtvTQIaWjLs1NeK9fNhZrylRr59WN7dk/2prScTvvT0u+223+68p59+9nEPJw+nH4yB++68c8trb7np6eKi4g5UQFBPq1ZX72zJRZVSBdFBkEMAnLjEQG4bIh3BAltczsQChg71LEUkz0U4WOVczuCCk9UfF1iSAiQJvCxlFgU0CQKpArU9o9rOshpOVu6OyW7CCfVya2ZtdzlZpILqlz2Ul5dPO+n3fzjmwgsv/NwDqtoCXjkFQYBdLf904QV/W1u69vcYyNzCNtwvO6+g9mFOLlyUgIIRsbgOG67xzo0LTnJGlg6jHUQqEgmJKKUiHZx1E7Jxysl1fhc0ZP/jAKG/TxJqJQWmSxXp46NA6+q7tLWEkQ49aQs+v4gtiuVbdpgU15MQr0lRo+o34kDptmrV6tZrr7vhjz179sRreRr8Pw+nIAiGHH304Hfff/eWVCq1idx2NnzAt6p6L24qJ4ZLGJTMISCn8Ktf/ap2byK5DogOpCGj4cTBq8O6bOBkqSzpZFFhnev8rmOiwk+pWmSbsjmH5ZkSulqNuMrrz3VYJnNmlrLVK9glnAh//GQ5vKOPOz3wJaT8XsKe7cikK2v3v2rcuPG3O2y3wylPPv30Cw2eTF45BcH999/f7sbrr32qabNmXbDQUr6yKEx+l1WEM5t8loxg4mDGINxoo41qt07h82DWYNdhkVY1uYCTBpp0SB0SMvSywBannKIcyFJM1jlc5bRK1GqVbUsSlmlASkjWBU7yWUDdTsCJa5zka9T1debfBfnVuxngJgvWPpVXlL924oknDz3vvPPmNnRANXjl1KN7t5tXrlp5zqpVq/IQnnHHRwwY3HVhWKfhJEM8DFa8ZYQPyWLAMjGulZMGlqUA6hrWcTBrheFy5Cj1ExVC6vp1PTKEseAnw1sJFw1ODUepWllW3y2UdVvOrZVTXcI63pmjcmKdaB/gxA0GkbMkyDScahPlQTpUWpgUcaevpLhkbdOmzYZPnT4drxpr0P8aNJxGjrx250cfffzZstKy9hwcGDRcoxI+xFlRrZosOMlFeJtssknt7WGMKK6FknCylJTORWQLDDq/VANSZeh1QGyPFe5IuLm+l2CS4JHtzibkcsFJA4z160dn4uCk+1sbTmWq9+Fy/ZP9kaEdwzq2T64jwxgBnLgqPAmc8lKZ2v3IMWZqtuKZ06/3AYddf9ttDfrRlgYLJ7xB5bghgx8trygfFEKovDxMbGM7WqxZwiyGQQk44fsoOGEgY7tarl3BwOX74bRyyjasiwuFNJw4mxMirpCO7bCc21IfGn4sIz9nW6VKcMHWUmaWitHKS8IR56NatewklZd1Pg1Uqw6UgY0k5OW6JxecmG+SCXFpl9rfg+pXPqNOnIvPaDZq1GjkrNlvX9iQpVODhdOwYcMGTJs27f7KysqNMCj0Km46AVWTVE+yPMM7wAmOgsHIhChfF6QVSZQ60krLtcI6btbXzphEoUlVwf5biyx13bI/GibZhG0WFK1+SgUapdKSwMdqn6UCeV0s5USljLwRXiwKFc58E1WXXu8k281xgs/wOybGJk2afN6+ffsjn3zyyVkNFVANEk6jR4/e7Oqrrx6TSqU6cRsUPSNLOPFunVZPLIPvkRDngJS3khmGSIfScJLnls6iHd3lqFpxRCmfqHDNUi4SatpGGrouJ4oCABWDS/nEhV1W37Nx5igb8zsd1vGcckLDxAQ4zZs3LwRMUjhRLXGrX6x54hbHLVq0GH3hhRf+ftCgQauy6dOGUrZBwmngwIGXf/7558Ox7a58wtxSOFRMXGIgnzMjZGrWqIQzJnNNDDlknXRu6eQMS/TyAxkiuRQFnITHxTmpS61pZeaqxwpPrc/iAKXrZx3ZwkmHlUkc0gpBrXBP2psKR4d1Uj3jd1x3pASwzolgwmdaOTHUlCEeynGS5E4XNftgLdl+223/718vvNAg931qcHD6xz/+se111103NgiC30jVpAe3Vk5QQwSVhAwBgUdYsFJc5p2kdJd3mqSKkjkTaxbXSioJtGRfNED0OaRy4XdRoNMhjw7pXO3TYWVUuGaBKg6+cXCyVGEc4Ng3GZLJ1eJyN1FcR+wZjt0GuFo8KZwIPi7e5QPDOH9lRdm4c849f/CwYcMWxfVxQ/u+wcHpoIMOunvevHn/h61TkQDngIiCEx9f0Y+wyGOgmvAAMJ2dziCXF0hAxSkMAtBah6MBYDmzdCxXOIbj2F4NHQ04rSplGyxVZqmUJOFnlEqMcz7rnC5b6TZHwSsJnFAGYwp321AXAaWP1cqJ7YBiQllOmHwus1Fh/urWbVqf8frrkx6K6/+G9n2DgtOll17a+ZlnnhmdTqc3x2BAjoDbX2QLJ+lEGFQYTHiEhf/o9DJs00l3fU6tkjBwo+DEge5qu/W9K8fiCm90HRpiVlgmj7HqdaktC4BxKi4qn+WybxSILVtKoPAxFd7B5TjAdcJr1wkX/B17p64GYly0yV0MZLqguKgwKC8rm963X//Dbr311ga1MLPBwOnll1/e+Pzzzx9VUFCwP9WSlOVaCRAkHIQM66y7ehyEeI8dby3LHIUbO4BIAAAgAElEQVSsS8/YrpyPVk4yFJRtdTmvK8ekYSL/ttSDDE21qonKT7lm8SgV51JNVl0aei7lk1RNJDleKiILTkuXLg2XA/AJAcJGqieZa8LvMqzW+S20PV1VgXRBZu2atbddceVVFw4aNKgqaZ/W93INBk4DBgy44MsvvxyRSqWKuWkc7oxwptOzPYFiJcTlRcdghArDTzxfR/Ax0c7BJxPp8lwyJyRVDT+X8IgKn1ygICxdKkv2JUq56ZApLgcUFSYRQloZWnCy+ixBLScBfV1kfa72JOmHbAOAw5BL7ueEevD4E9rDB8CpmqPghEkP41Bur8N2h/BKZcKxVVTUaN7Gm2w85OWXx09Y36GTtP0NAk7YDuXO++57vqqq6jec2fiIgXQUPbg5O/KRFktpoQxuHWPQIufEAWuFdTy3S/loR3SpHxdQrIse53wEolUuLgQkXKxQT/aRv1vqT39nHce2yZydpeiscM0VwrnaTGXHc2plycdRQlWTrl5AyXbxxQZ8dIkhoJ6MpHridxgvWkWHlWeqardeqaqq+tf/nXrsCaeddvHSpA6+PpdrEHDq3bPHXYuWLDsN4ECeCSvA+WZaDkYLDHJ9k0yGa6C54MSBRyjpkCZJKBE1uLQjaXUk1ZdLOenwSJ/PApSEjKWoZL+0GnP1R9tfwkECTC+5cAFPt0v3PwpOEpDSxgzr5E0EGebjWUxuOIjjJMhkfzScpLLS9oFywsSH7XvatGmztqiw6IzJb731wPoMnaRt3+DhNHz48N0eeeShsU2aNNuaSogDh46noSFnQ8huQkouqJTHYPAgtGvVqlVtWKcT2RqCLqWiL5ycua2Laq2PsurWDmEBRjqw63uCmT91++KUmmtgukAt1YQFd9n/ONtZ55DKUQKN9pLnpLqR5QgnfAaAcAEuQaYhK6+D9btWjoATX4yAdVRFjYpmHnpQv8OuueWWr5M6+fpaboOGEzaRu+C8cx/Py887csXK1WH4BfXEzeSkA0oFQaVDmHEpgZwlWR6f8bEVJsTxHWdDqbK0OrAGzY8tYx2vnSApICSItAKS59EqRNbvao8FEus4CQKrLg0nC0CWCpNqLOp7rT71pMPzYwzgbh3hxKUEGjZRcJJla+GYrqx9tg+Qaty4cTqTztwwa87bl6yv0Ena7g0aTiefeOJRM2bN+Gsmk2m9trQ8TDwiL4CwDhdaJiGTwIk5J+kA8jYwHmEh2FBGLtjTyilpeCOdKMp5XeWsAS/rcaksl/NaYVQUnKKUjVRqlmrT/bXgpD/LFk4aHtqOVjgm28UJC+p58eLFtcqZ65Z+LJyQc0IbAD0s8sVCz6ZNm366w447H/rEE098kNTR18dyGyycXnppTNvzz7v0ycLCwn2RB8gEeeH1wWDmKm7e8tUD3KWcrAWb/AyDEXs64R+T4nIBZjYKympPHHy0o0c5mSzrCsN0iGPBQ4bFFvBkSORShEnCQF4P7ehRUKS9NZy1k1r9lNeK/ZaTDVUNvuPdXowpPLrCY6HSLTtbKpZ16/Jh2zLVKwfwO5+/w7kal5Q8dP6Ffxo2aNCg8vURPEnavMHC6dhjjrpwzjvvXFVeXl5cvcNgdTjHfZv4/jDXlht8yJeJcP5No8o7R3AS1IedCfC7hJPMU0mHiQrfXN9ZqiXOuRmW8NzSOSzgaAexliJYUIj7zKV64trPdtOOOryUf+u+WsDU55PHSOhIsLqAgvq5RATA+O6772rXLWGccfKzoFMbtoktWazwEuucoPSh+LluquYO8YLN2/368OdfemlyEkdfH8tskHB68O67t7rlrjv+VVFRsSuf8g5S+eHswxwRFZRc5yTVBmHEhLgMy6Sy4u+AU9u2bcMqOMMxbNQDI0oZWTO+LK8BZa0gl+W1epNKQKoGS1HQXtK5pI3wu3X7W6sRq/3sp1yEyHLSSWl3CScChcpNt0+Che21HF/2mXVpe0pgSZDJenG9AY758+eHkxTayjV0XO8mzy9hh/PKRLuGJxLiBCD3COPEWlRc9MxJJ/3hhLPOOmvF+gifuDZvkHDq3bv37XPnzj1LbvimB7yGgHQgDgaZECesJByk4+B3KCduFoZjGT5qp+O5XWpCz/ja2aSTyNvaFmA0THQZtBOzPF9rhbrlK9fxN+yI58bgcJjF8XArnktEu3AcN+dj3XqRIh0en3Ovq5o9i0KQc6M//g4bspwEkQuSGjzyGmlQWuNA16vVVJQC44JLtB1hHXe/lOCW59QLMqlM9ecaqnrM1NS5vHXr1n+YPHnyBrlrwQYHp5EjR+78yCOPPJfJZLaBA8iZS4cEnC01JLKBE8uiDmzVi8FJmMjtU/Rgs2b3KJBYILMUgwW2KOcCeBAycJU7nI1vqAU0+D0+k+BCe1AW/cUtdICL7YHNcSxvPABkABpBCEdkuExlh2uFuggm1E+FIG2VBC564uHfUSpIjg0Nf12fLMvQjXDidimEkwYn/tZ3cuVnso2WspDjoKbshCFDhhx1ySWXVCe8NqB/GxScZs6cWXjSSSfhralHyO1QrAsu1UwUnKyck5yZuc8T4UTHxt9WWCeVACW9Pr/rbxnGuGZW63NLUUkHg0qBU9GhuFi1efPm4R5FKIt+AWJ8oBV/E164g4SyAAwghBwf+4568cwZXjpKpYXzEEqoG/XioWmcC/9xVwpOz/qlatDXUtpEqiQNFJaTx2tHl7Dnd+aqbWFQXkPYkMqJD5PrxZUSVLofLuWkVbceGwUFBZXpdPqPH3zwwa0bEJeqJ7oNqUMnn3zyEZMmTbqnoKAgfJ24HKDSGa2ZVdpBKicJJzmD83fmpHAMlBNfLcVB61qHw+O1mpPtkH3Qg5R9kDkS61pqh5VlOGPTcWs2OAthBEAAKugPP+c+Q4AJ1/GgfwAQAYXvoKIAGa4ro4KkquS6MYbdUFgoz1yNDPO4fMMCiQVdCTJtSwJB21yrJjk+4uDEc0g4EfSol8pdgk8rOE4KVvsY9rnGCT4vKCj4eLvtths4ZsyY/25I/rzBwGn06NGbXn755WOLi4s78cFeOl/UBbNUCj4joDScWBfLyO+xlACOyQGNnxacCCZLCbnaQ4fRkNV/12VwMjxjezt27Bj06NEjGDNmTPDrX/866NWrVwipN954I9hiiy2CyZMnByeeeGLw8MMPB/369QtuvvnmYPjw4SHEcMcK/1577bVgjz32CL766qvggAMOCK699tqwbKdOncJwEHtt77TTTsFHH32EdweGcOIdLjg6AAVbSqUpHVxeB8sGtLFMuPN4l80sAMSV5fVCe6GcuH84gSMnD6mcZFsklHQZqfhck2rN8aPOPPPMU4YNG7amLmOgPh6zwcDp/zvQ8OXLl1+2YsWKfCalrcGsL0IcnOAoKKMf+uXgJ5zwE4swoQJknkvCSQ9+fW7pcPp3rRy0knI5qFwKoJ1TzuBcTIryBx10UNC3b9/grbfeChPh+P2ee+4J/ve//wVDhw4N4QvwAFJoxzPPPBNcf/31weOPPx4ceuih4THPP/98sNtuuwXffPNNcOCBBwZ//OMfg2OPPTY8dvz48cHJJ58cfPrpp8EHH3wQfPLJJyGE8Nwj1QbDSK2EpPNa6lM6MNWrtp1lK5ey1spJqyxeX0yIhJNc45REOVlw0gqX59V9ETsgLGnVqtWJEydO/Fd9BE1d2rRBwOnOO+/c8pZbbvl3y5Ytd8YgYVgAsGhpH2ckDnjCSC8l4PEYlCir4YTZXm5gpwEklYDlPNbsKMNJV0jimuEtOEoooZ9oL2zGpPf+++8fbLXVVkH79u2DiRMnBp07dw4V0ZQpU8I+Dx48OLxtvs022wSPPvpoMHPmzGDkyJHhS0gBtG233TZ4+eWXQ5UE5QQVdskllwRHHXVUWCegBqXUv3//EFaXX355LdC5Fo0P0EpIaxUhbaWdV8L7x8CJcImaSPCdhBPzjgQt+yDBKq9BEjjpyUoew2uXTqdf7N+//zE33HDD8rhxvj58v0HAqXv37ncsXbr0DAwQ7tuMWRig4KByDS5LSUml5IITwzq53xP2c8I5eedLg8ZSTq6chqXoogaUVhRWWR1GcoAz8Yy2I3cEaCB3dPDBB4ehHMI6qB0oJ/T3vPPOC1XSCSecEFx11VXBokWLghEjRgRjx44NOnToUPv8Yrt27YIXX3wxOProo0PIIexFGz777LMQXHPmzAkAwgsuuOAHu5IC+gzzCGcLTq5+0vacDCQgNMhdqhPHcKKRE4Se8AgnvFATNoRyom15fS0wRX3mutbSBuwbfxYVFa1NpVKnzJ49+7H1AT5xbVzv4XTxxRdv/+KLL764Zs2abbjeRt4lkwPApaKkmuGgJnSYvNX7NFE54ScABmdCQlxuHIZ6mcchbOTzdjLkkiEK8yS8TS2dMyqciwOwnK3ZT5yLoQGBu8MOO4Smwksb0LfNN988vAMHCI0bNy6E16uvvhr07t07/Bv27tmzZ6ia9txzz+D9998PkLdCXglA23fffUPQ4HjclcPvUF44D9TYf/7zn9rHivjMI9oEyMtHhqzQJm6AS3ux/3LCiruh4FrEqhU0JkP0D9dfKic9/iS08Lu1zgl162tlTaLyGsJWUKOFhYXT+vXrd+hNN900P8429f379R5OHTp0eGzx4sVDsJaGi/x4lwh/c7U2L7hUM9rRpXNLKDF0k4Ob4RLhBCdmzolwkSCScGIbpJKRM7NcWCl/d4V3SQeZBaeaJ91rb+EzRBg4cGD4GdQowjWsfscyASgqQAvvZ9t1111DFcS7lIARH35GW7H+CdcCd/5wfQAqhIJ4ep939XDMhx9+GJ6HzgpHQzvwT8LDgm8ckKMUk1aSsix/l3CyynOSYliHCVLmnFzKSY4NTmL6/Jai09ca58f5YE/YuLy8PF1YWHjVu+++e2XScVFfy63XcDr9lFM6vfrGG88VFBRsJNfhYHDDoazNvngh5OwpZ2T+TjhxHZO8pauVDO8uwTHRDr3wUzoQBysHtQSG/EwP1KiwQg6uqAFtwQnnhENh5sc5uH4JYReBjgQ3V5Hz7bRcZAkAYQdQvnkEdQFeWIYAh0GoC/vgMzgwynLPddSFnNQXX3wRliG08TntzufJ5KQiJxp9N1Q7mmWPJE5vwUmeV04wDOuonCScaHMdwul1TVoVasXlgjDKceGsWBv2v912223g+r5rwXoLp1GjRrW6/vprnsrPb9SLIRiTqYBDjcStzTm5ZgetXlhO5pL46IpUThwsWjnpdU4cxC4wUB1QNVjrWjRQZV/iZn85qK02MATGd3xkhCECgQJAACxcLQ4A4R+AxjJ0JjodfvLtNjwvQh5sK4JjuCMpd3nkyyTRBsILbdfK0YJ21MxvhYISTto+ui4rJ4jj5eSGY2AfwAnX34ITwabDOg0vOV4kDF1wwtiEPTEZr/O+u8qK0RdddPFJQ4cOXV1flVFcu9ZbOB3U54A/zZs/f0R5RVUh8xNydsXFZFgXawRsTVGznQoHgQzreOeOg1oqHAkxKCcMTBnWcWbXYJBhIR1aqynpBFo56Fk8Cr7SoSVg+TlDX+SVAA8+ioK+yefh0Dc4If5xQSXazLwQoEUnYajC77gQk33l58xz8ZxQZNJhJVyoHqWqiAvrLDhpuGvgaXtZANNKluuceEOEk45le9rG6qdsWxKFh3YA7HxUC3BE+N26VYu1TZs1Pen11yf9I27819fv10s4jRw5cssH7vv7SwWFhTtinyZcIMp/3oKGE8hn6/QglheeEJCzoYQTF2SynIQInRPlCSeWYzLcJdGls1E5US241FKSAesabJZykgpQbh8jH8GQj61A8bAc4Q+o4XPuMErVxNwf715SLdGeBCwT/wSwBJhULnEgsvrtUknavno8SKgkgZNeIa4VkbQ9+uQK6+Sk47rWOk2AcyPfxNA8nDjSlZg0ZvcfMHDAjTfe+G19BVBUu9Y7ON1zzz2Ff//b3dh69wg4DeFEdYOLzrBAvsRAKg8982o4oazMORFGhInODbEs8iuU9NbMaakfDkYqCDk45d28pEopqpwFJ5yDOTLkj/AMHPqD36GE2AZ8hr4hXEbeiAlr5p5QDsdgH3V8JtsOx+F+RAwPufMB2kvAox3SaXX/dShVV4eTqkfbxAUpfS45FnAM4QTlwvGnlRHrdsFJwyhqIpIKH5MDd4qACg7vclaWh9erdG3pw2edc+5p6+PK8fUOToMGHT7o3XfefaCkpKQJLlBVuvqODrf8wADn4yuu9UbSgaNieVxoaz8nGebxVjzKYQ9x5k5wDr2XjzUDcwBqNRH2rSascoUddGztUK5BbcGJg5nnYGJablsilQ3K0dbsI0ADOzBZLsGMfuC8uCaAHfvE5/WkSuINDLm0Qd/q14BKqqZkeCfhZK3gjgM87c5rxPFnPfgrYct6JZzk3TzZRq22XUqa6hzXBCElQY83BVdf24IVm27c9pQXX3nln3WF+S913HoFp+HDh286duzYl9esWbMbbk9zgMsLpwFgrZOxLrQcGLzAMmSTd4UIEoZgLIcn8zGLRSW1oy60dLxsVELUDCtDNTqH7KvVHnluqSoJGn2MhJ4LFklCFA0F1ktVybqtulzQ0uuU2Acddsk+RdlTjzXaRybEGRLLyUmHcRa0oiaVqDFLVctIgecN199VlAXNW7SY1aVLh0PvuOO+b34p0NTlvOsNnB555JEmd95550OlpaXhdigIFbCamU+Ao/OcEbVstyS5pUY40DScuM5JSnnp6EyKA064c0I46Vk/KZjYF/nTdWyUw0oFI/trzdCyfg0YaVftQNLZLWi5bO9qt66fNxcYSsfZwdUGl2rNJpTSNpJABBh4ty4JnAhHSzklGSccf3z0CH9zATBCb9QLSDUqrL5zXVRc9PA111w/rF+/ftV3NNaDf+sNnLp163baypUrry8vL28m7w5JRaNnNZ2zsK6H5WyWcuJyAplv4gzFnBNUk1ROdCwLhHFOawHCmj21k0fN+pZaSKJoJOx1u6VKtBzdUlLSqTXALTjR5vpau5Scy+90+EsHl+Xj7MEJTE8ggBPudDLnhO/1ejcZqvFa6NA/6vrpSRdloY6QA8RPmW7Ad0iQA04112hps+bNz582bcaD6wGXwiauF3B69tkn2p1wwmkvpVKpXbGFR5joKy0NL4Z89kmHFwwHXLOpa6AxbMNPqiZ+JhPvzJGgDAanhBNlu3Yg7SBywElHdjm1Fb7IQa8dTisGtisOmK4wSaou1BEVwtK+ScIkl8Mwp6IB6Qofo8Akx4er/1Zbk1wLXP8lS5bUPluJ+jk5uSYFfM7xa4HTmsB0WEoIMpfHMY+fUFKla6vf14jdISorK19//Il/DuzXr996sef4egGnc84667j5CxbcP3fu3MIZM2aEiWeEdUiw4qJyZs12wOrZj3+jHkKIW6bwHFRQlM1Mhmo4oV1SOUUNvijgaDUo26hn/DjHYpuSOoJlHw0nHdbpaxB3riTXzBVWSvC7ACLBLUMorThd6kleG9kXPakQThiTvBGTDZz0pCLtbF1XTjKYILm8A3Xwhgzvji5buji8k9etW7egvLxsRafOnQdfe+0NL6wP6qnew2n48OGNPv3ko783adr8+M8//zxUJ2+//XZ42xpJcfznzCQHMQeV3vJClpEXSKsWKiWpnOSshHNSOQFgSIiibcg7WQPfGmByAGpA6fIuJROngPQg1A5qKTnLLhIEEphRSo3qwQIawcf2uOCiAakBof/WbZeqJU7B6e+p/LT6tFQc4YRJk3CS9cnwVbZJ3i2UtrSgzvZI4HJMcjdR3gBAngl3D7drv02ooLp3784Hscf1Pejgo4cPH76kvgOq3sNpiy22aLXFr9tdusVW25yPXRgxCLANB55qx4UBDDAY5DNtcvDICylVh5759KDm93K9kzyGt4PxGZ+ts+CUxCEsYEapoKRqQw52qXCsWdkFQwkHOpVWb65jZXkNNPbBBSfdxzhl5Jpo5PWPuxYu0LvOjc8ZdmJc4nlCwIkLgvW5rb+tmybSbhJklmrGufiCCqp4bN2y2WabheOyx37dwt1GsQYP47OgIH/WW1NnnPT++++/6+GUAwt03muvDl/Pn39F27ZtD8FT7dgCViobPmyKnzoJLe+caaWiAWV9j+Mx8Bje0eEJJ3xPOAGU+C8Tt9bg0zOxNehcjhTntFph6dBSKw0rIa1VpDWjuyYA3TfawtUfraokDHle3SdpL0thRKnJKAi7lJM1hNl/C06YLOXNGA0Y/K2XEshzJIGTtD8f1kY0AcUEtX/44YeHk/b8eXPDnSO6dOkSfP7FF19WlpVdNWHi5Ady4JY/eRX1XjnRAmeccUa7xx577KpNNtnk8AULFrSU26EwH4SLhDAPdy/4qiFcKCQEsewAPzGz4SLyIUmudHbNvEx246d2PA4wDAjMXlgdjRXWdEj5UK2W4qyLUt1ySnwnQWc5lhVuaefV7bZAEaUqkig1DRk6mAUW7YhaVcm/LXi5vCLbfmlVaNVr9cua1DAGsDMDlROvK9WVngSYs+T3etKg/fRxcosbTjzcrgXfYY8tbOr37bffhntqvT1nFsb62iVLlrz2m512ueGOu++e9JNTJUcnWG/ghP5OmDCh4JRTThm4ZMmSC///lqSd+NJKXBw817bXXnuFOy7iIkHWcvbCAODLIHFBEYMDSnxgOCrE4ypxF5xwDgxMJCWxkRoARVhGqRY5u8eFdRJk0nE1mFygY/1yRo5SF0nHljyf/J2KR39m9cM1KVjAso6PgqpUfPL3KGUo7eKyp4Q/rzEeeEbiGZMjd2PlxEKVLfvKz6ywVk5knAC5vAXw4+u6oIywHxYnUBz3m9/8Jpyc8RluHH34wXsf5eflPXnriGtu2/+wwxYnvbb1odx6BSca7Oyzz97kscceu6KiouJ3xcXFm0IxHXnkkcGbb75Zu38QtoBFjM13oDEex8XlmhBCSsJBz/RcTsDHWNgGznyAHDdlw2AAoFAHB6Z0KEuuW+d2KQvtyBJOeubVELPq5KwdNRC1apKOo5WHVmhJFI4FCnmctY5NtyFK8bgg7FJ0UrHgd961tdQjPqM6hjLHJnpYhAtoMNzTIR0hSTjJ6yZDPdk++cJTXnOof6YT0EZuSY1JEnfmttpqq4XPPvvsvw455JCb//rXv/6nPsAm2zasl3BiJzt27Njlk08+uaJRo0a9+vfvX4hNyyBp+d563N3DbIaZJFzzUVoaym4MCKgtKicOGDkgJDQwC3HzM5bhQ6qoh3ACmAAoObNqB5aDVYZtUc7COqywLmk4ZjmXS01EDSINWJlTcoFM1yfhEqVape0suMapJm03HaJpJSbbxX4STjp3JsvyQWnCCekDHdJrCBFEaKMGlbQJxjLqAvwwhjEOcZ7tt98+fJHECy+8sM42NmVlZYsKCgombr311jfMnDlzerZAqE/l12s4wZDDhw9v+cADDwxr3rz5yY0bN26PPayR98GCOKia9957L3wFERQUwCWfx8NF5/5BHCwcGHLtFNWT3K6X5QEnQA//EdIBTq5whrOeBJSlDLRCkk4WByPX91rVaJC44GU5sIaL1V4NfAlCC7IWiLQdtQpyfR/VHtd5dG7HmqjYBwlofIZxASUj4SR38NRAlzDSakmv8ubdOOZKMdniFVu4I4d92xEtTJgwAfBKp9PpGUEQ3Hzuuec+M3z48Mr6BJq6tGW9hxM73bVr19988sknV6ZSqV69evVqiYuMuxRIEAJUeLcaQAJ4AFQYFMwjYfDIvIAEFAczc098dIaDGXBDvfgPKAJQFiBYp56dXVBgvzS8tGPEKSI6sIYM648Lq6LUhYaFnPHZzrj2yXa4wkLrc5cKinIClw00IGQ/NMws+1M5YSkBxhbCMLl1DtWRHGdsv1znxAkR5fE5/nMxJV86itdscaEnwPX111/j/zf//e9/R+222263jh8/vvqtphvAvw0GTjUqqtHo0aMHzZs3b1jfvn27YdBhpkFOCvDAz9dffz28bHxNEa+hlNmWw2AAMokurzvqReyP/1hGAEDJf3Gzv2sM6TBPOpYLfhIWLnWinctSbnHA1EogTqloEMq2SXhKgEf1UX6XpK0aNlIB6d91mKmvn4Yi/oYNEXbJx1f4eijWz8mP6QAL7BLoXCoDKOGdgeecc06YhsAruvCmZJRt0qRJ2fjx4zGgr/38888nbgA8Wtd3NrQOoT9ImD/88MOnlZQUDe3T56CtcCcFspghHm6x4jVGVFF6oFiOQTjJsBADmc/44XPACfktrSAsG0sFpZ1bgsmlfPi5dhY6A3/qulzKK05BaeBKp5ZtcCmtKAVFe0XBKQ5CLkDKLVM04LUNUYd1Htdn+Jz1A07ywV9u14w6JZgsOGmbYRLEmIVqwuuzEMJh0hs0aFA4ueL36dOnf75y5cr7jz322LtvvfXWer/auy6c2aCUkzZAnz69OsycMfuykpKSA4499timWFmON9li2QHerQZVNffbb8NQjAs4KyvT6+ykyTeBMIyrqqpeEY6BU72PdlWYEOdMiYHDOzVMilYP+qra5kkwZTLRlyDOKfG9pUQstSLBJEHgcmx8bi2iZD1SVVhAp7PLPsjcDp2bKoF9kQpC98NSpS4AU9XwGL041pVnkoC3wmrZJoZqgAn3X+fbbAgoLl/BT7n+jufneMG58D0UGF5IimUBGE/o35NPPhm+6n3WrFkrli1bNm7LLbe8ecqUKW/VxenXl2M2aDjhIpx55plFr7027rBFCxef2ahRYZcDDzwwzAkwVzRr9uzgyy+/DFUPbgOXlDSpfc04F3qiPOP/vLyC8NoCUNV7NleFqgzPMeERAZRD3kHutV3tuOnwuB+GeXmRY8XlHJZi0hVJ1WUpNQ22pKrBUk0uOGlAaUCyja7FptJesn06tNNt5/dc66btLgFrAVDbV4JTlidYoZy44Je7fmKMYDkLJ/qu1egAACAASURBVCnCmPlO7sXElALghjJIPwBO2223Xbg0BRPqU089VfXhhx9Ob9Wq1V9OOOGEpzaEhHccJDd4ONEAJ5544ubPPjtmxI477nTwNltv8yvmidr86lfBzJkzw4GFpQcACyBVUFB9O5hbUXBfbMxkGIgVFVUhaMrLqzf2xyAFpPA9VBXq4YsBdCi1rpLKDk5yVtcOZ4VUWlXI4wkOC2pSbWgQ8DuqBl2nri8qzNVQieuDPLc8j+yn7Bc+t/KJErBxTsL61lW8mfAwrp/D+Aj3tK9Rstz4jfuJsw6MJ9TDN9lgjEHBI5m+4447hv/xGRYR49iXX34ZsPpy3rx5zwwcOHDkrbfeOjdJezeEMg0GTrhYw4cPz3vmmacG/u+T/53fs1fPfSG/15aWhnkiJBlfeeWV8O2zUD1t224WDjSqJ678xUDCAGvatHmwYsWy2hchYHBCYWGm48p1ws1WFdVKKpuwzlI2cA7p/NJ5o1RHEuWlnVIrDA3dpOpJwkwqEt0PFxRlH6PyQdJBLaUk7RPV9ig4sc1QPXy7DK47xgAmK1wfjBe+mQZjBOX4OY5jqAdVj/GFyXGfffbBA7uZyZMnv9qkSZMb5syZM35DAE42fWhQcKJhTjvttM3HPDn6vIJGhYf26NFjK4R02PEAAwXJx3/961/BmjWloSTHq7arFVL5Oq9E4m1fhnYrV65eUlRU9FHbtm07VVRU5OF7ruxNAg/XRZOKQDoif5cJX8sZeW6pSGwlV60ENIAkSH4Ykn5fXjq35fQuGzDskpDVwCIctI14Hg2WKKWmIaWVmnUdosJJKG5MXPPnz/9kxYoV23GXDAIKUIKa5sPjfIMNtvSF0sIjV3369AkT3TgPJky8+n3WrFlzly5det9xxx1313XXXbcwG6feUMo2SDjx4nXea69OH3/+2VVbb71Vj3322acIjoJV5khIbrJJ22Dq1Kmh3MZg4SuT+MAwHvKsXjAXJsSXV1RUjRs6dOhNr7zyyt+bNGmyOx80pgNph6GTWDO/HFwyF+NyEst5XTkZCSbLqV11xSktGfJoyEWFhQxzourXIZulvORnsg+6Xh3iyZxUFJgITJ6HbaqB6oxDDjnk5L/85S93tG7dej8kxzfffPMw/IcKghrCRBXuEjB/fnga5JVwI6ZXr17hT4y5p59+Gnfn1lZUVEwuKioaMX78+PXmId2fAogNGk4w6AUXXLDx3//+t7NatWo1YMCAAbsBRnAYPBqAeH/XXXcPHn/88TBHgJANgwoDGjMcZsXVq1dmVq5c8cKAAYeevt9++5XdeeftT1VUVHZDzgrfc6WwFbJEKRF9seMgFqcutHKKG0wahNLJrbbEwYl3pjSk5cJDK6cj+xUFZ1d/tKKz+qGBbcHQBSeMlcaNG79w0UUXDZk+ffqWd9xxx6ObbLLJbmgPH5Xio08YWwAWNn7DOjso8+nT3goOOeSQMN/52WefffbJxx+/ePyJv79q5MiRC+Ku0Yb+fYOHEy9w3759d5gyZdLwkpLGfXbddddWO++8c80q37zwyW8sF3jppZdq1zIBVpDlK1cuf3uLLbY6fvbs2e/eddddTe+6646XCgsL9y0rqwiP54pyV7gUBx2GbXTSqLyMdQ79mRXSxQ1yeQzOL4GinVYrGCoTuSOpDqVYnyvk0oCKyw/J/siyUjXxLps+pwvCMtSUNsXn+fn5L1177bWHDxgwYM0ee+wx+JtvvrmjTZs2rXmtoLKRLsBdt9133z3Mcb777rvhliZ4M29eXl7p2Geeeb1Tl07XPvvsCw1aLa1z7eIGZkP6/sgjj8x//913z/hu4fxjd/3NrnvjzgkeD9h7772DmTNmh4nLTz75JJg3b16w9dZbQxktzi8suObTTz+9FXa65ZZbSh555KEJFRUVnTjo09V573X+RSkP+Z10fO0QMqzQqqkuzqvbFKWEXBCUjh4H3SQgJegsxRRXv9UfK7zUsI46l3V8QV5+UFZePv7W2249DC8OePnll5ucOPT4f7Zq3fpgPGvH5+3at28fpgiwVmnKlCnhXTnkK18d/8rcxk2a3HX++RfeO2zYsEUNyd/i+uqVk2Ghww/vv91rr028s0XzFr3333//fAzKt+e8G858UEKTJ09G8jzdskXLp88856zfDx8+PHybxYMPPlh8++23vk44VQ/06KUCUeBywUnCSOdUsgET6mEiWgOO7YqqzwVZV/5I16XDWhdwooDhgqpWZ/rcUWGuPlb/LcFamI91b5nXR95yy6EHHHDAcnx38cUXb3/zTSPHFhQU7ISnEAYOHBjmmpD0Rg4Kz8fh9+Ytmk9sv9121z3zzDMvxTlqQ/zew8lx1a+77rpW9957z59XLF9+eN++fbeAgsIdPbz95euvv85sslHbMb0O6H3uffd9/xbV0aNHN7r66qteLy8v7/L9A50aTvrvdaVVnHKKUhy6K0lyWlYuyIKBBakoBehSc1qRWXXoz6z2sH5+5wq72D8NTA2nqO+j4BRkqoK8vPwJf7vn7wO7deu2ktfg1FNP7fzQgw88d+yxQ34FpY1cJZ5KAKRatmw5t6i4aNwVV1w1fMiQIV82RPAk6bOHU4yVjj9+yIGPPjrq5s3atdtpwIAB+dieIpPJjDmoX/+z9YK4e+65p/Avf7l9QhBk9iUYUqn88AzfO1g0nLTTaQWjIeHacsWlXnR3o5ST5ZQuJWWVjTvegmccrHRoFRe+uRSTPC5qVwJpR6uu/LwgKCounnDbbVcM7NZtYC2cYOf27be5onFJyZlHH310G0xqUN2zZs56r8+Bfa584OGHxyRx0IZcxsMpwdW/884729x++61/nPftt31Xr1676vwLLhg2cuTI9/Who0ePzr/yyismFBYWducLEfLzC9eBExddfu+4664vygWcrNyIq5su55UKTZaJC82SnDvJOZO0l2pJKyvdXq1GrfLMPeE7V3iJNklYoVxeKlyB/trtf7lzYM+ePVfJdk+YMKHpoEFH3ND3wAN7zXn77YJUKvXiny8f/pdBgwZ9mmDYNfgiHk5ZDIFTjjtuixdee6313Llz37YOwwr0sWPHjK+qSv+Wq361cpIrwsPBLYSUDFF0uELHiFMCcY6fxOl1SCadUh5f3f7qFepS4UlFFOXoVlviyrvgqMO0qLqt9srw1uq/VrCEWDWc8l+9/S93/E7DCcfcf//9zS655JKOQ4YMWXTLLbe8k8Vwa/BFPZxyPAQ6dNj91TVr1vZGuIU8w/cwciXGv885JYGTBkXcLB+306YFHtkO/eS+hpMOe6QCcTl5kvyV7peVU0L9hKPcPSEO4LIPMqSTqtUVFmvlhLAuk8m8cvMttx3Wp0+f1TkeTg26Og+nHF/+3Xff7cXKyoq+37+6qjrnhLt2Vngkt1JJCqekTcb54uDkAgWVARaRaiDxbwuMGmbWbgOuvJUFM60g9bEaTlEqz7Kb9VAwQWi1x4JTQWHBv++6629HdO3adW3Sa+PLxVvAwyneRlmV6LBHh+fLykoPhlOH2wCnqJjStXBi2COdQAOACxPlIkw6hnYQeSyVC500bqfLOBXjAolLscnzow368RCdk9Lfu+rVn/M8UbbQNpX5JHm8bLMO+Vxg5ucI64oaFT130823DOrZs2dpVoPFF460gIdTjgdIhz06PFNWVnoodyQI8ni3rnqrDFe4YDkSHdeCj8yx8PtsQRLV9SgntRxWg1OrKw0t1h8HJwtWGsBSXek+yeMJJ+bKNKColFwhpKkUUxk8CTD2kUdHHbXLLruU53g4NejqPJxyfPn32nOvJ0tL1x7B3Q0JJ7nZXFRYJB1EO5bl4K69iliPK/+SpNuWWrGc3wUm3QYNZsIiKbStNrv6Z+Ws9Pk0nLSy0sl+F5yKioqeumnkLcf07NlzvX/jSZJx8XOV8XDKsaX33muvx0vXlh5TW21efs3drO93wowLFSSg+HuUOrKURFSiPJsuWwpNt1+HWLrN+FuHc65+JWm3peqiwGcpK7ZZ5sg0vJLAKRWED4H/c/qMWYNTqZTxsFI21vZl14kSvDlya4GO++zzUOna0uOx4C4c3DU5Jya+o2Z67cAup7KUl1ZQlpO7QqS6WEADwhW2WVCN6pcEhEv9yf67cmYSqlIRSVDi2FzAqUnjJo9NmzHzuLrY0R/jtoBXTjkeHZ07dbpr7Zq1p3G7lHSQqtmpsvoFBy4nthQKPmNC2/W9rNPlqHFddOWqXMdFKRfXMXWBMo6RSwS0/eT3GtguOGn7u66H/txSg+E5M1VBs6bNHp46fcYJcXb232dnAQ+n7OwVW7prx843r1675jzsfBju5ZTiNrrfw0nO3lpFaCeW25NIFWLBKg4yUSFT3LFWx5k41t9pBejKSWmVRABosFj16zBOwkP2k7k/WadWS/pvaxKJglPTZs0fmDZt+u9jB4cvkJUFPJyyMld84S6duly5Zs3qy7EdBnY+REK82gmxa2b1a5ysBLArt+MKSeJyQXSwKCDp76KUV13ghWNkO6069B1J3V/rvXMS0jxHVF5JKlAr/GV4Z9naypWtMwqgnJo3/dvUqTNPjR8dvkQ2FvBwysZaCcrut+9+Fy1Zuvi6WqcR65ykU2l4WM7F8vI7lyqRakw203qwV4dlVpgWBT86MX7Kp/4tR9ZJZb0LglRAFkhdAI0Kc+Muk1Zyui75fdR1wXmwzqlpsyZ3vfXWjDPizuu/z84CHk7Z2Su2dI/uPc5dsmTxLbVgMeAkQaIHf5SD6jBK/u0KnXSD4wBghUsW+Fzw0oCKevZOtl+rFgnmKNWm4avtGRViamWnJ48o29XaO0gHzZo2vWPK1OlnxQ4OXyArC3g4ZWWu+MK9f/vb0xcuWnwnSoYOF6GcWMb6Kc8kHVc7qvw7m9BLQipKOcWFZRbMXO3QiiQJnOKAoc/vghxtbKkmGWa77GtBncqpSdNmt7711tTz4keHL5GNBTycsrFWgrK9e/cetvC7BX+jM+BuXbXyWHdrFDlr14JMPN2fFE5S1VhQsM6jVcmPgZMVNlphkaW+XH20zOwCngsaso/6dwkjAlJ+JicLrfx02/Dgb5OmTW+eMmXqBQmGhy+ShQU8nLIwVpKiB/TqdfL87xbca8FJOxgdIy6vEaWc4pSFq81SEcXByQoZeYx+AYOGpUx4Rym7KMVj9THKZlbuSwJHw5Ngso5zhblsU0F+KmjWvPmNkydP+VOS8eHLJLeAh1NyWyUquX/P/U/6bsH8++k8WjnpwS6VjUsFaDhpNRQFKH03zAJEFJziwPD9dsRyt891N2XTqkTWKSETlQ9LErJaoWpU2Ek7avhK+yaBU/Nmza6b9OZblyQaIL5QYgt4OCU2VbKCB/TqdcK8+d89SAVRVRPNIaxzzcxaBViqxsr9WFDheePCHdmbHwOnJCvTf0o4WTkn60ppe8hrkeR3qbwkXBHWNW3W/No335xyabIR4ksltYCHU1JLJSx3QK9ex83/bsEjLA44VTvnD+HkCuviFIR0SJdj8fzW3SypxKy7aS5HtIDmCvlkH1xri7RqdPU7iWrSl4fH6BX2WgladUuYulQq6wGcmjVvfs3kyVMuSzhEfLGEFvBwSmiopMX279lz8MLFCx+rrKxMwdny8gt/sI0t6yKcJAy0ioJzyd0atcqRisqlhqx8jnRAXWdUqOlSf9bnVHFRSsZKqMvyVs7Kda6o8+hjuPJe2lZvlCevjwY268M6p1YtW454Y9KblycdI75cMgt4OCWzU+JSvXv/9qhFCxc9XlVVlRcO7ryCSDjpinXehA4SlTvRakACLmrmd4FGwtOlSKSz6rAtabgZwlvsQW4pJ/1sXRTwEl8kUVACyAJ2XPugnFq2aHHZxMlTrqnL+f0xbgt4OOV4dPTq1ePIxYsW/7OqqqpmDQG3TKk+kWvWd+WIrMc7WI9O6MZ1xVJZLni52pOtctJqRIMvSqWhrAUn2c8kIZ+VbyKIrG2EZf16RbtuP+7WtWzV6s8TJ06+Os7+/vvsLODhlJ29Ykvv37PnoIWLF/4jnU6HYV2QsuEUlVeSJ9FKSqukJM4Z1WjCQYcwUhm5YCBh54KuC05WH5PaJBs4WdsU65yS1dfasC1G2SGsa9mq1eWTJr05InZw+AJZWcDDKStzxRemcgKcwkEfrPvqJKqeKEd05ZV0COJqTTY5Ge2YGnaW6pDqgeXp8Dq/peFkKTWdZ4u3cvISGk66f1IZZQM9XkdsNufhlPx6ZFPSwykbayUo2/u3+x21cPHiJwCn0BFj4GSFNdLBZa5J53biFJEGjxXWuUIeFzA0+Ngm2U4rwR7V1ig4WYrOpSytc2QDW61Kk9i3Bk5XTJr05lUJhocvkoUFPJyyMFaSor169Dhm4eKFozKZTAindKbaxHFOJkFiJcU5U/PuklYoGjxJ1FMuEuJJ4MS2u+wXB6coRRP36iutjLT6dIWmSa512Pdq5eThlMRgWZbxcMrSYHHFAacFixaMqs59R8PJlXSWoJKbzcHRrG1lZXkdZvG7qKRwNrmeuiinOEUSBae4994lgRPql3ZEHwh5+fYXK3+nw1A9ydTAafjkyVOujBsb/vvsLODhlJ29Ykt379r12OUrlz/KQSyVk1QQLofUoLByJhJAUTkhK7+jOyAT4hZELHDJ88t1WFr94Tv5eIsM/eS5tAqUQNXAkH/jd+zVbkFF99MV0ur6tMrTNvxBziqVwZYpI958a5pf5xTrHdkV8HDKzl6xpbt163rciuXLH0kKJ1aoIRCX84nKpSRxVtmRKMBFfYc6CCAJOZ6f4IoymgVHCTkLphJsgJMFFN0/C06yjASu/lzn0OT3uFvXpGnTEW95OMX6RrYFPJyytVhM+e5dO5+wYtWqBzmg45RTFCRc37ngE+VEUc2OOs7l1BKeMg+mQZHEvK7wNkq18TyEkzyvZR+rjzpEc0EuFk6NG494a9oMr5ySXOwsyng4ZWGsJEW7du38h9WrVv29LnCKUgzyuyRwkuoirt0u54uDFp2beTC5YDIq9JRts0I6GUrFha0WnDRkXHVIOEWFj3FwalxScuXU6TOHx9nZf5+dBTycsrNXbOluXTqdsnL16nvodFhKYIElG7UQBS0rj6PDkqSqKcqprTASfZAP9ern1fh93PkteMSFtWyrBTfrfC4FGBXOsZ44OJUUF4+YNmOWV06x3pFdAQ+n7OwVW7pLp06nrF6z6h4UDJVEKj8xnCxgyc+yCduS5p2iVEUU5KSz8/kzwgnnlk6vAaDBkw2odQJb1hWn9LSa1PC0bJYkIV7UqNGIGbPmeDjFekd2BTycsrNXbOkuHfc+Y/XatXdkCyftoFF/SyeyHNL1vavxVnhDRRIV7lDRWWGdBpsEVq2qFA/+xvVfg0UqJ7ZDqyOpKuOUk7aNKyy17tZ5OMW6RZ0KeDjVyWzugzp37njemtWrb4YzhGto8goilVNSp3Q5XtxSg7h1QHEO7VIThANfu45yOudEG8htSSRIUD588Wj4Xr9191hPAkd5p09DOgrQElpxCtO13xVHAO7WFRYUjJg15x2vnHLsSx5OOTZop077XLBm9eqbavMVNTknK6TQIYmlLqzQSjql5YTZKqcfY4I4eGnwsI86tItrgyv0s46TbQJcGG5SIcrv9a4PhK68FvIcGuaAk0+Ix129un3v4VQ3uzmPgnJavWrVzRpOMnSq/a5GLUgH1mCROQ8darBOl+PqfEmOu7qOItTwTRoWJYFOVBkrXNNgsQCpr4FWUxacdDvCMkE6KGnc+Mrp/m5dzoeXh1OOTdq5497nrl6zpvalmlznFKectEKiQ8WFFUmcO5suZgs06/zSsXV9dVF1SeBExSOVjwSQDvvkd9aEoOtxTgBBOmjSuPEV02bM8g/+ZjPQEpT1cEpgpGyKdOq0z/mrV60aWRt6iV0JdAgkB3xS9RNVRzbtjAuHkkLPcvqoPE42cErShjjlZIWPUTknWZ8OQU2beTj92GHnPN7DKcemrSuc4pphOaE+xiqTxMG1qpP1xh1vhTpSxVgKJU6dxZ3TUpnaFlEQtOBktUkqQFebkHMqLim5eMaMWdfHXUP/fXYW8HDKzl6xpQmn2oIxO2HqXJTl7FE5k7gGZevoLuC5zhO3a0BUWGfVWdf2Jj1OgsmCqAR1nEoNv89UIay7ZNqMWdfFXQv/fXYW8HDKzl6xpXG3bvWqVbV367gIU6sTOhOfqq8NA8UtdRlWEFD8TDuZS8EkdVqXo8Yd78o5yfqS5ntwTNz5tGpyHWPZx6WErDDUZecfDIBMVVBS3PjyGbNm+W16Y70juwIeTtnZK7Z0p077XLR61araWZTrnCw4wRH1lh8WhPgZVZZ0srh1TLENFgUsJ80GFhJIEg5J4ZTNuTR8LGihjN7HyTpO91uDiXVb7cukK7GU4M8zZs3xLzjIZrAlKOvhlMBI2RTp0qXTRatWrrwOAxl32qrS6x7tyoXIxC3L6LJx6ihJXiquL/rcrhcERDmsrEO/PSUqFxRVp9XuuNyV63sLwi648W6pBmytrbGUoLj40ukzZ18bZ1v/fXYW8HDKzl6xpesCJwkmV/hnOY8OaTSc4pzX5fCyDT8GTrJ9LuBabUiqoHT/dP4u9mIZBXQ79VIOfUjNOqfLpk+f6d9bVxeDRxzj4ZRjg+7bpeOFK1auujGpcrLAJJuUVA3pmd0KX5LUFZcElqGbhqMG608Np6Tn18CJg58Mm7Vy0soPd+u8csqxE9VU5+GUY7t27drp/JUrVo7MBZykEnCFeJY6ciV+4+CUNOeUJDTTcKyrcnLlq+JCQFceiUCTub0fqCHchat5AWpUbgtlah5f8XfrcuxHof1/gjobdJXZKicrbHKpIEtRWepBgsClzCwQJYFOEuUky1ihZhxYZP9deba4OjQM4/J30rby2LjQOFROjRv7sO4n8HoPpxwbtWvXzn9auWLF9dkqJ+1slmKw1Afhlq0TS0WQjarRcIoLrX4snHRCPQkc48DkarMMS5OGgsg5NW3S5LKpPueUY0/yyinnBu3aufOlK1etuLqucJJhh2s218qEIYrVmaiZn9+5HNGVYM4m/MsVnGSfoxSeBVpLcbpCXH18krt1Hk45d6PqsPqnqbbh1rpvl06Xr1i58spcwclyRJfSkZCyQjt9VSSconJa1nH6MyvJLMGYjTqTdcWtQI9TmDKstcJF+eoqqZwIQ/bBglkIbyinxo3/PHXGLL/OKcdu7+GUY4N27dr5shXLl4/AoA8HdM3jK5bzEiZRd4/i8kBxOZG4EEa+pDMuj2OFdFHHWAorqbmzyTtpqCTph4aN/Bvt5n9Xe2vLV69z8oswk17YLMp5OGVhrCRFAafly5aNqN3h0bErgQaTC1AyN+QK26IApGd+AobnyxZOLhXlUk5xgHJBO0qZuerUn7vC0qhzSjBFtd3DKYk3/LgyHk4/zn4/OJpwgnIKH52o2QlTDnqCSYYsUeopCkpxKkEqq7rkkKywSbbHpdzicj+udrvs4MoR6bbIv139TWKzbJRT4yZN/N26HPtROIn+BHU26Cr33bfL5cuWLr2S28PKB3/lgE+qnJKAKUo5xSV0XaFatrB0KapslVM259VgTKqcNMCstsu6rD5I5dS4SZNLp0+f6R9fybHnezjl2KDdunW9bOmSJSMIJzz4G6U+XEsBopoV5Sz6OBecJNAShS81CxOjwi1LxWQDp2zApMNTC7JRdo8Lo3W7XTZHQrxZ06aXvDVtht8yJce+5OGUY4N237fLn5cuW3aVVE50BCvMiEv8xjlRlAqgUqNKY9k4xZGNSVy5ph9bR9zxVi7OUk5xYZ+0SVRZF/zCu3XNml02dep0/2xd3EXL8nsPpywNFld8v27d/rR02ZLrwx0Jqqpq79ZZx2nH1n/H3anTDuM6Pk6R5Fo5xamluLAqzsay30nVkatNVi5LwjsqvAsnmyAdNG/R4qIpU6bekKTdvkxyC3g4JbdVopLdu+974fJly24knOQLDuRsj4GNkE7eLYtLPsepFNfxUjlp4OnEr1ZVccotqk2uZPnPCae43JFrSxfLlpYyw+MrzZo2/dOUqdNvTDRAfKHEFvBwSmyqZAV7dO/6x8VLlt5Ax+TdOn10UtVkzeyW48SpI1frdaipgcL3usUpDx0S1SXsilKOcfaTaiqbnFycarSWWqzTlkxV0KJ584umTJ3ulVMyF0lcysMpsamSFezefd+LlyxefG1tIlq9VNPlZFZeyhVeaDjVFUxoiwU/rWxcuRxLGbGshlMSuLmgG3VsXAiZJDRmf6264urHHuIeTsl8I9tSHk7ZWiymfPfu+16yZPHia2o3KUvlh0e4ACJDrriwznK0JKFTVJOT5GwY+kmASqWi63c5tNV+l4KUcIsFREQHs4GThlSi82aqkHO65K23pvm7dTn2JQ+nHBvUBSeexnJG7fSumbwujhbXPf067ig1FFeX5dxJVF2SMta5dUhqlUliMw1owjgR+AGnZs0ufmvaDP9qqKQDJGE5D6eEhkpabL99u1y0eOnS6ziw+YKDbJWTBShXeJW0bVa5ODgRAPrcVk7JarMrbJSfR8HJ1ee4/FSSMNKaMCSYPJx+zMj68cd6OP14G65TA5VT7cCuCetcp5GqyXI4qQ4sh4tz7DhVkjSsYxinYeOq35VzckElrh4NEqs8zxkVjsnjXMorW+Xkc045dqKa6jyccmxXLMJcvGRJuAgzdAQBJ5dDWYCyci4/JZyiHDpJaAQzWs4ep2CiFJhVZ7bqMU55WUCTn8XB3SfEc+xAojoPpxzbVsPJtZRAh0BwAssR6qqc4pxeKhHpwDqUoYogKHQ7XaGPdnqrPbJvLgjIsFO2hfXFvbdPvz1FTgRUg0kUl3OYZKqCZs2b/2mqX+eUY0/yD/7m3KA9enS/fOGCBVei4nBngkw0/3WYYeVtdCMtNaDDM612CBUNO0vtHmxfMQAAFdBJREFUSADpdT66vfxeHhOnRmR/NCziwjvdd50zk3VrsMbl3KzyUYoyhFv14yseTjn3JA+nnJt0v/26Xbpo4cJwV8QfAydXjoefx+Vg6GgSGlEhihW6oXzUfk+uMDWrnE1NRyxFQ7Wm+yzbmgROSfJMeiDwmLhFmNWPrzS/YMqUaTfnfDA18Ap9WJfjAdCjR/eLFy1ceC0dO045WSpCqietiLSjWntCWQogLncSpxCi1I5srwQTfo/adcEKCbWSi+t/lPKMyk+5+sv64uxRqw6DdNCiWbPz3pw6/dYcD6UGX52HU46HQM+ePf64cMGCG+hkLjhpJ4iDhyvc0zkgl7KK+tyqOypnZQHDFXoSQLqdScERdS4NN55DAlKqr6SXWsLd2sNc2hLKqUXLFue9+eZUD6ekBk5YzsMpoaGSFgOcFi1ceAPDDQ0nDaEoCCQ5pyu00mGfBlDS3I5VLgmcrPO5jnPZxAJLlKKx4GQpqySqyJVwl8eGEAvSQctWLc+ZPPmt25NcL18muQU8nJLbKlHJXr1+e8GihQtv4oxrKSfLSZMqpyglYDldNvVqoFhhlwt6Wpm5cli6XFx9cRCVF8WCXNzxLgVnTRqWfbErQetWLc+Z6OGUyD+yKeThlI21EpTdv2ePcxcsWnRLba6l5sFf7SR1DevilJKriTzOlVOJy+3oel311eZianbOjIODpWwSmHmdIhYI4+rQ7XT1L05lAU5tWrU6+43JU/4Sd07/fXYW8HDKzl6xpXv3/u3ZCxcsvE3DyVI8zEtFqZs4GLEOV9jmyvloBeMKreISxxp2Uc6ctK5YI6sCPwZO0n4y15R08giVU5s2Z0ycOPmubNvty0dbwMMpxyPkwAP3P/PbuXP/UgsesWWKpZ506KTDiahb5QSedCr5mQZWuDMn1uYYqkaDg3VK57XUEvM8qJcvqGS52t1AxTmjlJ0EQpxiyeayRQHelfNLfP5MVdC2XbvTx4+f8Nds2uTLxlvAwyneRlmVyDWckuSMZIiiwzOpzvSuj1EbybngZNXPcxBO8jxxcJXKLqmhk4BDgu6nhBMS4m3btTvt1Vdfuztp+325ZBbwcEpmp8Sl+vTZ/4xv5357B51SPr5SF+WUFE4uNVTbjprHY7QS4iJDqeAs2FkQ0cewrvB9fXiu0FBMWilqw2p1ptWfLm+BKqnNXCrSarc1AMJzZ6qCdpu1O3XcuNf+lniQ+IKJLODhlMhMyQv17XvgaXO/+eau+gAnhnhsPUMwCTIJJ5a3ci+yDgkMnbNhHRacXCGUBSjdVpdakgpPt1Hn41yw1HZKAqdagIfKqa2HU3IXSVzSwymxqZIV7NPngP/7du7cu39OOEUpAMvxrNyOBgedXodlOqzTx1lAsJyd9bhCSw0nl/WjlJMFTpfy0mrLsoel4pAQb9uu7cmvvDL+/mQjxJdKagEPp6SWSliu74EHnjL322/uyRWc5GmtcIUOKJ1JqxYrnCQwohSJVFIu5aTPi3NBjVlhotWXHwunKPDJ8yXpp1U+SgGiPODUbtNNT3r51dceTDhEfLGEFvBwSmiopMUO6rP/H76Z++3f+donuQizLjknfd6o5K4rPIlKhGulo1VVFOgIIP1WYblTgQsKOrcky7nyTpZyiQKQVnkEmfV5XZVTfl4QtN203R9eHjfuvqRjxJdLZgEPp2R2Slzql4KTVCra+TSc+H3tW4lrEteW02ogWHVTKWkVREBbxrMgK+EaBS+rPpnEtxSaK4/myoO5bjBopQY4tdt00/97adz4exIPEl8wkQU8nBKZKXmhvn0PPOWrL7+8p6CgIHwiP9sHf5M6pUuRaPUUpXy0aoqq02UBrXhYpwSWS91IQOl+u1SPbodus6W6XOBKUpcMU7VtQ+AF6aDdZpud9sorr/qlBMndJFFJD6dEZkpeqG/fA4Z99eVXf8sWTnFQ0apCKgFX6+BY2sk1EFz1WLkWrRrYJnnHzBUWagXm6m8UnC141gc4+bt1yf0jm5IeTtlYK0FZ3K375uuv72bIFPfGX5dzuUIhDRt5vJW30Vt+uHIrVihEGMWpNB0yucCm4RalnCT4ohROlP2yVYauuqTy+oH9g3SwyaabnDF+/Ov+8ZUE/pFNEQ+nbKyVoOz++/c6dd633/6VOaA4OCWosraIVELakVwAidtjOw48cTtBuiBqKaUkcLJCJys/JdWarNdShq62xMErSQ4OYV2b1r86741Jk/x+TtkM5gRlPZwSGCmbIr17//b0+fPm35krOEkVYqkelwNZuZeoflgKTDuvdXxtP2tWhLtAkDSss+CkP9OQi4KepbpcNotSYVbeKsxHpTJ4HfmFb741bWQ248SXjbeAh1O8jbIq0aNH9zMXLVxYu31GtsrJUgkuKFhOy7KueggTWU46nuWgUeqK9ck7gq4wKA4iVpjHupKEo66y2UJZ20bn0eT3gFOTpk0vnubf+JuVnyQp7OGUxEpZlNlvv25nL1606DY6YrZ366JUglRDcYlsXVYqF1eYZCmSOChohca7dC5wWnmxKKC68lfW578UnEqKi/88Y9ac8KUW/l/uLODhlDtbhjV169b1/KVLloQSP9wyJG2fgM4lFyxKh7acT+acCBKZE5KgiIKTPI8rnEtqFh0iWe2RddUnOIVhWV5ebfNcqlErJxnKQjkVFRdfPmvWnBFJbebLJbOAh1MyOyUu1aXj3heuXL36xu9HfH74qyvM0sCJUhFJGxGljGQdMqdkOSDbLduoFVvcCwDkOTSYrPPrPuq8V1RbLPDphaFx6kr2T4fAnBBkG7EIMy8//8q33353eNLr48sls4CHUzI7JS7VtdM+569Ytao2OcqcU1Quyfouae7JapjO3biSuVR3EkKWA7qUVtTnllqSYNDhIMvrtrpWt+vyut26/qi8WVRbtX11PVBOBYWFf54z5x0f1iX2kmQFPZyS2SlxqW5dOp29bMWK22qdw7GHuHSunxpOLuC4HFo7PtWKBbkkhrHA4FKMuk1S+cTlvyzl5MpZEaw6rLbC3ChAYSlBSXHjy2fMmuXDuiSDIYsyHk5ZGCtJUdytW7xoUbhNb+gAvwCcpKLROSHdB+v7JLfUk9giToUx5+NSUeyHBbe4z5IqVStHpuuO/DtTFTRr3vzSqVOnX5vUJr5cMgt4OCWzU+JSvXr99v8WLlhwN/brDnMWCeGkZ3itVhI3oKZgXNjE+pLASUIiKqFttdGlmlzqzIKnC0Q6JxTXNgtYWjnpdsX+nakKNmrT5tzXJ70Z3qH1/3JnAQ+n3NkyrKnPAQecPG/+t/dWVlauAyepZrSi0EleltXJYFdTo8KZqO5Zzq3zVXqFuJXUjnXgiEbE5db09/xb7xll2dQCsKutsolxqmydc1W/4MDvIZ5jPwpt/BPU2aCrPPigg076Zu7X91dUVIS3qaP2c5KGkspJqp64RK4rBLPqsxzQysm4zi/vZBGoEqBJc1JJYSrhaSW4o8KtqFBRg0wPWNmPqLA4tEeQDjbfYotTXnzx5Xsb9MD/CTrv4ZRjo/bvf9CQr7/6+jEqJ8IpW4VA9ZQLOLlUG+qWr4vS8IlSe1Ld0dk1nLQyk1BwKbC4XJGEaTZw0hBmX62lEJYdXEDDUoItttzi5BdeeMlv05tjX/JwyrFBf/e7Q47+9JNPn+BdpjjlZIVuVpinQxQ6kFQIUbO8DmesHJcrtHHV6wKJBo/8m79bis26FEkfXLbaEgd2l2LSitZShLQ/lNO2W2974tjnnnsox0OpwVfn4ZTjIXD44Yce8/FHHz+u4ZStcnI5bxIAufI0LkVgqQJXWBiXdNYgimtvnF20esv2csUBymVnCVFpNw1wrHPatv22Q8eOfe7RbNvmy0dbwMMpxyNk0OGHD/rPR//5p3wdeZwDavWjcx7SUSxn0jO7VF7SuV1hW60KEG8CZh3cH1wrr6iw0wKYCxJxtpGKMS7/oxVPXS6tK1R0KT7AaYcddxg8ZszYJ+pyPn+M2wIeTjkeHUcddcTADz/4cCzh5HrwV4dpVsLXAoDOuSRRWFaehvCxQhaeF2Xi4CRVV5xKiTJ1lCJjW602y7DYlceKU4YWeOVnrrbhc8Bpl512OeafTz31jxwPpQZfnYdTjofAkKOO6v/O++8+h2rDN9/WrHNyncb1eIaElTWb65k8SV5IKzLCR4NStzXKOS046LYlMbELLPg8Dk6Ej9XOOHhHhWw6hJMqtPacQTrYdbddj/7HP578Z5J++jLJLeDhlNxWiUoee+wxB7w95+2XsUwjDk4y/Iqa9ekILgUklY4EEH53PZjLY/Lz82sfSnaFWHFwknBICiYNX6v/Wrnp9hFclnqzlKgrPHaFcpZy1cBCQnyvvTsc+sgjjz+baID4Qokt4OGU2FTJCg4ZMqT3O2/PfgU7pkTByQWCuByMBpS+m6UdzXJoqZSsbXjjjpEhj3z2zcppWVaT9VthqlRKcSu4o/JQEi6WXaTqk4Cz2uwEWKYq6Lh3x4MfevTRfycbIb5UUgt4OCW1VMJyxx8/eL9ZM+eMD4KgIFxDlKreMkX+sxxKqijp/Fo1uV5YoMMTrRx0nZbj6hBKKiIJNA0n/C03mbP6aikqSwmyXZY9XH2Q59M5NA1Pq34rVybba4V+/CyTrgw6dupy0EMPPfRSwiHiiyW0gIdTQkMlLXb8kCH7zn5nzmtBEDSCgyEhHioosbEZ/7acQp8nStnosMcCCJ3RAo3+Th5PcNC55eMiFlxdcNR5LgsO7KPe6lcrG9d5NciS2NXqK46TSo3n18CT1wgJ8b326NDn4VGjoJb9vxxawMMph8ZEVUMHD+44+505kzKZTAinVF71yzUlnKJUQTbN0c6r4cTvtVPLXE2UGmE79da7UvHI463clCvMtNpk2UnfLbTsY4WhVhujjpUgkgpS75Spz4UV4h322vOARx55/NVsrp0vG28BD6d4G2VV4rjjjtt7zuyZbwJO4eu48wtr4VQbCtS87DIqeczvkq6QthLKLiVlJZKprKSakvBLkuiWbYjKfVkwkYrKCqP0MeybtdRBh7RxSioK3nHHAk6779Fh/1GjRiGU9/9yaAEPpxwaM1ROQwd3nDP77cmZTKaQYR0ViGugS2dyhRAu55RQkV3R6kwrCf23CyZxzmmZzwUXSzHqsE+2SyoYCU15TtxtdCkiKwy07OUqp8/Jfsn+4W7dnh326P3oo08glPf/cmgBD6ccGhNVHXfMMd3mvPv260EQhF6DFxxo+EgV4oKOhpR07ChQabUUFRa5wsIokySBlQVYhmyWwxMYUYrKBSfdHgk01Ge9wCCqD1otRj0YHEIqSPuwLsc+xOo8nHJs2MGDB/V85+13kX/Iw+Dl21ek4+mka+3FqHl8RDfJBaYkoHDBwOXsWlkkCcF0+63wjn2Q9REeUi1JlalvBiSBsgv8Epg6BNaKkzbQoawGF8ohrNuzw559H330caxt8/9yaAEPpxwaE1UNHTx4/1lvzx7HauXjK9adL+6YqcOb2uPT1e+WkoCSYYVURlaoFrcOKgpeWoVJhaPvOMqQxzKpdnSel0pH1k0IWHCyYKnDMnkuuSWMhg7PbQENn2nbWvYFnPbYc/f+jz32jxdyPJQafHUeTjkeAscdd1yfObNnvsSBDOVEJyCcmCdBGTqPXidEGNU+QFyzJ7nOe0hFovM1VsjjUlva8SQsJMBwPNqE/2g7223BSSsNfW6eU65FkhDWq9ct5RRlH7Qb+2pJNbhOvkgsHbAmgHCzQDE5SIXIerCUoMNee/oV4jn2o/Ca/QR1NugqjznmmAHvvffOv+AUcC6pjDig6WTVzlud0OVMTZDhODoqFQTrKigoCMsTbDIU0pCwHFp+JpWVDj21qqEDE06EK/qJNlqruV3t4efsk4ahVjmuQcU2SkhLWxJQ+F5OCvicfxOaBC6+Q194/bS6lLCDctpxpx2PGD16zJgGPfB/gs57OOXYqCeeeFyfmTNnh6uFMeixXa/loN+HRdWOLcMIOBK/p/ogCFAOTkMFI4HCsvJ8cUsRpKNphSQdX5ajExOOaA+AKRdTsv34XIJHKjSdrJeAkSrFukRShUm1ZYEeEwXK6H3H2Tb5Ofqkw2+e3wJ9ZUUZnq07+PHHR/vHV3LsSx5OOTbopZf+qdsLL7z4SlVVVQmdXcOJzl3tMNVOLWd1KhMcT0eRcKJyknfANEi0I8puSifTyk5+p1UJ1RHbQnWHthcWFoaAkmGfhoauG2V12MV2utpPKEm1I/tmhZc4R7jmrGYSIMRpcyo/1IM+sV/4G/3Sykn2qyA/VdXjt7163X777RNzPJQafHUeTjkeAiNGjNjp0Ucf/lcmk2lfXFy8zh7dPJVURYCTcI5MOp3Gf8z0ePFdpqqqKnwBHv6ucbB0QUFBJpVKhZ+LvE94SDqdDq+pVGIGmGqveyaDqmpvE+Lz2u9q6gjrRTl+J5VdVVVVqgauqfz8/NpjRR+onML2st2sC8fUQCvsH/pfAw/2MbRDTR9YR9g//JNwI5hqyobdqgFpuENE2NGa4/BLXl5e2Ce0Ab/jH5UTFae1jmod6GYqPzn8iKMGXH311R/leCg1+Oo8nHI8BG666aYmzz779Anl5RXbFBQUFKTT6bVBEJRmMpnSIAgq6JxATSqVV5XJpNL5+flwRNyWCx0UDo+/M5lMFZwVv9conPD3/Pz82noqKyvz4FiooybMwuLP/Jr64JDpVCqVj3pqGAcvLKipH9e/IJPJ4DOcG+0N/65RGQBhGepPp9P5FRUVhVVVVXigme0Lxw/Oh/9I1eC7mn6E3xUUFIR/5+fnp/Py8sL21wAI5VMVFRVhObS/Bl6ovCo/P7+s5phK/A021/SFtiLI0HZ8j+MANrSt9jw1dsEXODHasQ4kYRt0tgZOsBP/Ix6FndBO/I56YdeiIAhKMplMUSaTWZWXl3nvmGOO/ddZZ51VluOh1OCr83Bq8EPAG8BboH5awMOpfl4X3ypvgQZvAQ+nBj8EvAG8BeqnBTyc6ud18a3yFmjwFvBwavBDwBvAW6B+WsDDqX5eF98qb4EGbwEPpwY/BLwBvAXqpwU8nOrndfGt8hZo8BbwcGrwQ8AbwFugflrAw6l+XhffKm+BBm8BD6cGPwS8AbwF6qcFPJzq53XxrfIWaPAW8HBq8EPAG+D/tVMHJAAAAAjD+re2xsE1kCkSaAo4p2YvUhG4F3BO9xMAQKAp4JyavUhF4F7AOd1PAACBpoBzavYiFYF7Aed0PwEABJoCzqnZi1QE7gWc0/0EABBoCjinZi9SEbgXcE73EwBAoCngnJq9SEXgXsA53U8AAIGmgHNq9iIVgXsB53Q/AQAEmgLOqdmLVATuBZzT/QQAEGgKOKdmL1IRuBdwTvcTAECgKeCcmr1IReBewDndTwAAgaaAc2r2IhWBewHndD8BAASaAs6p2YtUBO4FnNP9BAAQaAoMyIMm+LA+lbYAAAAASUVORK5CYII=';

export interface IProducts {
  totalCount: number;
  pageSize: number;
  pageNumber: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  previousPageLink: string;
  nextPageLink: string;
  data: IProduct[];
}
export interface IProduct {
  id: string;
  sku?: string;
  name: string;
  shortDescription?: string;
  description?: string;
  price: number;
  mrp: number;
  discountPercentage: number;
  stock: number;
  rating: number;
  lowStockThreshold: number;
  productAttributes: IProductAttributes[];
  categoryId: string;
  brandId: string;
  productImages: IProductImage;
  productIconImage: IProductImage;
}

export interface IProductAttributes {
  name: string;
  value: string;
  productImages: IProductImage;
}
export interface IProductImage {
  thumpImages: string[];
  productImages: string[];
}

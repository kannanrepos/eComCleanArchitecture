import ProductDetails from './ProductDetails';

const ProductDetailsContent = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6 p-4">
        Product specifications
      </h3>
      <div className="mb-5 sm:mb-6 px-4">
        <ProductDetails />
      </div>
    </section>
  );
};

export default ProductDetailsContent;

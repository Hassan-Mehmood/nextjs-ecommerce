import Product from './Product';

// These are here just temporarily because we will change it with data from our database
const products = [
  {
    id: 1,
    img: '/product1.jpg',
    text: 'Genoa Mini Dress in Mid Blue Wash Denim',
    price: 278,
  },
  {
    id: 2,
    img: '/product3.jpg',
    text: 'Genoa Mini Dress in Mid Blue Wash Denim',
    price: 199,
  },
  {
    id: 3,
    img: '/product2.jpg',
    text: 'Genoa Mini Dress in Mid Blue Wash Denim',
    price: 78,
  },
  {
    id: 4,
    img: '/product4.jpg',
    text: 'Genoa Mini Dress in Mid Blue Wash Denim',
    price: 78,
  },
];

const Products = () => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-8 mx-auto max-w-7xl items-center">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;

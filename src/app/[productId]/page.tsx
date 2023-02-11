import { ProductDisplay } from '../components/productId/ProductDisplay';

function ProductPage({ params }: { params: { productId: string } }) {
  return (
    <section>
      <ProductDisplay params={params} />
    </section>
  );
}
export default ProductPage;

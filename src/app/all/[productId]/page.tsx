import { ProductDisplay } from "./components/ProductDisplay";
function PropductPage({ params }: { params: { productId: string } }) {
  return (
      <section >
        <ProductDisplay params={params}/>
      </section>
  );
}
export default PropductPage;

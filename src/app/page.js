import ProductItem from "../components/ProductItem";
import { items } from "@/data/items";

function Home() {
  const { products } = items;

  return (
    <div className="container grid grid-cols-4 m-auto pt-6">
      {products.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
}

export default Home;

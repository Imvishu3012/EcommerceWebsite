import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function BestSelling() {
  const best = products.slice(0, 3);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Best Selling Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {best.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

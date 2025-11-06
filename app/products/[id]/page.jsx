import { products } from "@/lib/products";
import Link from "next/link";

export default async function ProductPage({ params }) {
  const { id } = params; 
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <p>Product not found.</p>;

  const quantities = [12, 24, 36, 48];

  return (
    <div className="max-w-md mx-auto">
      
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <p className="text-gray-600 mb-2">{product.category}</p>
      <p className="text-xl font-bold mb-4">${product.price}</p>

      {product.conditional ? (
        <select id="quantity" className="border p-2 rounded-md mb-3">
          {quantities.map((q) => (
            <option key={q}>{q} pcs</option>
          ))}
        </select>
      ) : (
        <input
          type="number"
          id="quantity"
          min="1"
          defaultValue="1"
          className="border p-2 rounded-md mb-3"
        />
      )}

      <Link
        href="/checkout"
        className="bg-green-600 text-white py-2 px-4 rounded-md"
      >
        Checkout
      </Link>
    </div>
  );
}

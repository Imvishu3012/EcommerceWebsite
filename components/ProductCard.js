import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl shadow-sm p-4 hover:shadow-lg transition">
      <Image
        width={400}
        height={400}
        src={product.img}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="font-bold mt-2">₹{product.price}</p>
      <Link
        href={`/products/${product.id}`}
        className="block mt-3 bg-blue-600 text-white py-1.5 rounded-md text-center"
      >
        View
      </Link>
    </div>
  );
}

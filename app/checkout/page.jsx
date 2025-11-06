"use client";
import { useState } from "react";

export default function Checkout() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully! Confirmation sent to ${email}`);
  };

  return (
    <div className="max-w-md mx-auto border p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="border w-full p-2 mb-3 rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">
          Pay Now
        </button>
      </form>
    </div>
  );
}

"use client";
import { Product } from "@/app/types/product";
import { useState, useEffect } from "react";
import Image from "next/image";

const Productpage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [item, setItem] = useState<Product | null>(null);

  useEffect(() => {
    async function apidata() {
      const rep = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data: Product = await rep.json();
      setItem(data);
    }
    apidata();
  }, [id]);

  if (!item) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f]">
        <div className="max-w-3xl max-w-1xl mx-auto p-10 mt-10 mb-10 shadow-[0_10px_25px_rgba(59,130,246,0.7)] rounded-2xl bg-black">
          <Image
            src={item.image}
            alt={item.title}
            width={250}
            height={250}
            className="mx-auto mb-15 object-contain  "
          />

          <h1 className="text-3xl text-gray-600 font-bold mb-4">
            {item.title}
          </h1>
          <p className="text-gray-600 mb-4">{item.description}</p>
          <p className="text-xl font-semibold text-green-600">
            Price: ${item.price}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Category: {item.category}
          </p>
        </div>
      </div>
    </>
  );
};

export default Productpage;

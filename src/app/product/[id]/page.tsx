"use client";
import { Product } from "@/app/types/product";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/app/components/navbar";

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
      <div className="min-h-screen items-center bg-gradient-to-r from-orange-400/35 via-pink-500/35 to-purple-600/35">
        <Navbar />
        <div className=" flex flex-1 items-center justify-center mt-10">
          <div className="max-w-3xl max-h-150 p-10  bg-black/10 backdrop-blur-xl border-4 border-white/10 rounded-2xl shadow-lg">
            <Image
              src={item.image}
              alt={item.title}
              width={130}
              height={130}
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
      </div>
    </>
  );
};

export default Productpage;

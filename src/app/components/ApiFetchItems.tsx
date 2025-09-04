"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../types/product";
import Image from "next/image";
import Link from "next/link";
import { FaFire } from "react-icons/fa";

const ApiFetchItems = () => {
  const [item, setItem] = useState<Product[]>([]);
  const apiurl: string = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function apidata() {
      const rep = await fetch(apiurl);
      const data: Product[] = await rep.json();
      setItem(data);
    }
    apidata();
  }, []);

  return (
    <>
      <h1 className="text-5xl text-center font-semibold my-10 text-gray-600 flex items-center justify-center gap-2  animate-pulse">
        <FaFire className="w-10 h-10 text-orange-500" />
        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent ">
          Trending Products
        </span>
        
      </h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-10">
        {item.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="bg-white/10 backdrop-blur-xl border-4 border-white/10 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-6 p-4 h-100 flex flex-col justify-between">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={300}
                className="w-full h-50 object-contain rounded-md mb-10"
              />
              <h2 className="text-lg font-medium text-gray-600 mb-1">
                {product.title}
              </h2>
              <h3 className="text-md font-medium text-green-600 mb-4">
                Price : ${product.price}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ApiFetchItems;

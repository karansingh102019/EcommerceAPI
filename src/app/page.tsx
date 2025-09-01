"use client";
import React, { useEffect, useState } from "react";
import { Product } from "./types/product";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
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
      <h1 className=" text-6xl text-center font-light my-10 text-gray-600 ">
        AK Store Products
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10 ">
        {item.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div
              className="bg-black rounded-2xl shadow-[0_5px_2px_rgba(59,130,246,0.4)] hover:shadow-[0_10px_25px_rgba(59,130,246,0.6)] transition-transform transform hover:-translate-y-6 p-4
      h-100 flex flex-col justify-between"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={300}
                className="w-full h-50 object-contain rounded-md mb-10"
              />
              <h2 className="text-lg font-medium text-gray-600 mb-5">
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

export default Home;

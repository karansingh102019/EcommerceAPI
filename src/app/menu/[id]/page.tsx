"use client";
import Navbar from "@/app/components/navbar";
import { useParams } from "next/navigation";

const Page = () => {
  const prop = useParams();
  console.log(prop);
  const propid = prop.id;

  return (
    <>
      
      <div className="min-h-screen bg-gradient-to-r from-orange-400/35 via-pink-500/35 to-purple-600/35">
        <Navbar/>
        <section className="flex flex-col items-center justify-center text-center px-6 py-20">
          <h1 className="text-6xl font-bold text-white mt-10 mt-14 animate-pulse" >
             <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">{propid} AK Store</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-800  mt-16">
            Welcome to{" "}
            <span className="font-semibold text-blue-300">AK Store</span> Your
            one-stop destination for premium products at the best prices. We
            focus on <span className="text-blue-400">quality</span>,{" "}
            <span className="text-blue-400">fast delivery</span>, and{" "}
            <span className="text-blue-400">customer satisfaction</span>.
          </p>

          <div className="flex gap-10 mt-14">
            <div className="bg-white/10 backdrop-blur-xl border-2 border-white/10  p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <h2 className="text-lg font-medium text-gray-600">Fast Delivery</h2>
              <p className="mt-2 text-gray-500">
                Get your products delivered quickly and safely.
              </p>
            </div>
            <div className="bg-white/10  backdrop-blur-xl border-2 border-white/10  p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <h2 className="text-lg font-medium text-gray-600">
                Quality Products
              </h2>
              <p className="mt-2 text-gray-500">
                Only the best products curated for our customers.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border-2 border-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <h2 className="text-lg font-medium text-gray-600">24/7 Support</h2>
              <p className="mt-2 text-gray-500">
                We’re always here to help with your queries.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;

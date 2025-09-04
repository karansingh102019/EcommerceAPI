"use client";

import { useState } from "react";
import Navbar from "../components/navbar";

interface FormData {
  name: string;
  email: string;
  message: string;
}
type inputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type formEvent = React.FormEvent<HTMLFormElement>;

const Form = () => {
  const [form, setform] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: inputEvent) => {
    setform({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const submit = async (e: formEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
    await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setform({ name: "", email: "", message: "" });
    console.log("Form submitted karan!");
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-orange-500/35 via-pink-400/35 to-purple-800/35  ">
        <Navbar/>
        <div className="max-w-md mx-auto  items-center justify-center bg-white/20 backdrop-blur-xl shadow-lg mt-22 rounded-2xl p-6">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-600">
            Contact Us
          </h1>

          <form onSubmit={submit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;

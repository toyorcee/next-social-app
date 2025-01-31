"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import News from "./News";

export default function RightSidebar() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/${input}`);
  };
  return (
    <>
      <div className="sticky top-0 bg-white py-2">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-gray-100 border-0 focus:border focus:border-blue-400 focus:outline-none focus:ring-0 rounded-3xl text-sm w-full px-4 py-2"
          />
        </form>
      </div>
      <News />
    </>
  );
}

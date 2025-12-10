import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between p-6 font-bold bg-black text-white">
      <Link to="/">Blog</Link>
      <Link to="/contact">お問い合わせ</Link>
    </header>
  );
}
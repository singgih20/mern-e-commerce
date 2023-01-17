import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, ProductDetailPage, ProductListPage, RegisterPage, LoginPage, CartPage } from './pages';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />
        <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={"Not Found 404"} />

      </Routes>
    </BrowserRouter>
  )
}

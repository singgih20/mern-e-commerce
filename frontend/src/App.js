import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, ProductDetailPage, ProductListPage, RegisterPage, LoginPage, CartPage, UserCartDetailPage, UserOrderDetailPage, UserOrderPage, UserProfilePage} from './pages';
import { ProtectedRoutesComponent } from './components'

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

        <Route element={<ProtectedRoutesComponent />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-order" element={<UserOrderPage />} />
          <Route path="/user/cart-detail" element={<UserCartDetailPage />} />
          <Route path="/user/order-detail" element={<UserOrderDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

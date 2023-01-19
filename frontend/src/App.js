import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { 
  HomePage, 
  ProductDetailPage, 
  ProductListPage,
  RegisterPage,
  LoginPage,
  CartPage,
  //User
  UserCartDetailPage,
  UserOrderDetailPage,
  UserOrderPage,
  UserProfilePage,
  //Admin
  AdminAnalyticPage,
  AdminChatPage,
  AdminCreateProductPage,
  AdminEditProductPage,
  AdminEditUserPage,
  AdminOrderDetailPage,
  AdminOrderPage,
  AdminProductPage,
  AdminUserPage
} from './pages';
import { ProtectedRoutesComponent, HeaderComponent, FooterComponent } from './components'

export default function App() {
  return (
    <BrowserRouter>
    <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />
        <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={"Not Found 404"} />

        {/* User Protected Routes */}
        <Route element={<ProtectedRoutesComponent isAdmin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-order" element={<UserOrderPage />} />
          <Route path="/user/cart-detail" element={<UserCartDetailPage />} />
          <Route path="/user/order-detail" element={<UserOrderDetailPage />} />
        </Route>

        {/* Admin Protected Routes */}
        <Route element={<ProtectedRoutesComponent isAdmin={true} />}>
          <Route path="/admin/users" element={<AdminUserPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductPage />} />
          <Route path="/admin/create-new-product" element={<AdminCreateProductPage />} />
          <Route path="/admin/edit-product" element={<AdminEditProductPage />} />
          <Route path="/admin/orders" element={<AdminOrderPage />} />
          <Route path="/admin/order-detail" element={<AdminOrderDetailPage />} />
          <Route path="/admin/chats" element={<AdminChatPage />} />
          <Route path="/admin/analytic" element={<AdminAnalyticPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  )
}

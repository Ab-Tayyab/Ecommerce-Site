import Footer from "./components/footer/Footer";
import HomeScreen from "./components/homeProduct/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/ProductDetail/Detail";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import ShippingScreen from "./components/shippingDetails/ShippingScreen";
import PaymentScreen from "./components/shippingDetails/PaymentScreen";
import PlaceOrderScreen from "./components/shippingDetails/PlaceOrderScreen";
import Navebar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import AllProducts from "./components/allproducts/AllProducts";
import SaleProductsSlider from './components/saleProducts/saleProductsSlider'
import DashBoard from "./components/dashboard/DashBoard";
import Profile from "./components/profile/Profile";
import CreateProduct from "./components/dashboard/CreateProduct";
import { Container } from "react-bootstrap";
import LogginScreen from './components/account/LoginScreen'
import SignupScreen from './components/account/SignupScreen'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navebar />
        <main className="py-3">
          <Container>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SaleProductsSlider />
                    <HomeScreen />
                  </>
                }
              />
              <Route path="/allitems" element={<AllProducts />} />
              <Route path="/product/:id/" element={<Detail />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/cart/:id" element={<ShoppingCart />} />
              <Route path="/shipping" element={<ShippingScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/createProduct" element={<CreateProduct />} />
              <Route path="/login" element={<LogginScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

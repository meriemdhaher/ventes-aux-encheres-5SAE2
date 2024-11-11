import { BrowserRouter, Route, Routes, useNavigate,useParams } from "react-router-dom";
import { OfferList} from "./components/OfferList.js";  // Adjust the path according to your file structure

import {
  LoginAsSeller,
  Register,
  Login,
  UserProfile,
  DashboardLayout,
  Layout,
  CreateCategory,
  UpdateCategory,
  UpdateProductByAdmin,
  AdminProductList,
  Income,
  Dashboard,
  ProductList,
  ProductEdit,
  AddProduct,
  ProductsDetailsPage,
  Home,
  OfferDetail,
  OfferForm,
  OffersPage, 
  UserList,
  WinningBidList,
  NotFound,
  ScrollToTop,
  PrivateRoute,
} from "./router/index.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
  <Route path="/" element={<Layout><Home /></Layout>} />
  <Route path="/login" element={<Layout><Login /></Layout>} />
  <Route path="/register" element={<Layout><Register /></Layout>} />
  <Route path="/seller/login" element={<PrivateRoute><Layout><LoginAsSeller /></Layout></PrivateRoute>} />
  <Route path="/add" element={<PrivateRoute><Layout><DashboardLayout><AddProduct /></DashboardLayout></Layout></PrivateRoute>} />
  <Route path="/product/update/:id" element={<PrivateRoute><Layout><DashboardLayout><ProductEdit /></DashboardLayout></Layout></PrivateRoute>} />
  <Route path="/details/:id" element={<Layout><ProductsDetailsPage /></Layout>} />
  <Route path="/category/create" element={<PrivateRoute><Layout><DashboardLayout><CreateCategory /></DashboardLayout></Layout></PrivateRoute>} />
  <Route path="/category/update/:id" element={<PrivateRoute><Layout><DashboardLayout><UpdateCategory /></DashboardLayout></Layout></PrivateRoute>} />
  <Route path="/*" element={<Layout><NotFound /></Layout>} />
  <Route path="/offers" element={<Layout><OffersPage /></Layout>} />
  <Route path="/offer/create" element={<PrivateRoute><Layout><OfferForm /></Layout></PrivateRoute>} />
  <Route path="/offer/edit/:id" element={<PrivateRoute><Layout><OfferForm /></Layout></PrivateRoute>} />
  <Route path="/offer/:id" element={<Layout><OfferDetail /></Layout>} />
</Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
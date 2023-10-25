import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router-dom";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";

function MasterPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container my-5">
          <Cart />
          <Shop />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MasterPage;

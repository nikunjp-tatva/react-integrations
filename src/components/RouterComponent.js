import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import GoogleMapIntegration from "./GoogleMapIntegration";
import PaymentForm from "./PaymentForm";
import NavBar from "./NavBar";
import Stripe from "./Stripe";

export default function RouterComponent() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/map" element={<GoogleMapIntegration />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/payment2" element={<Stripe />} />
        </Routes>
      </div>
    </Router>
  );
}

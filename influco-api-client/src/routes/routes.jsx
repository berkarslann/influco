import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UserPage from "../pages/user/user";
import HomePage from "../pages/home/home";
import InfluencerPage from "../pages/influencer/influencer";
import SeriePage from "../pages/serie/serie";
import ActivitiesPage from "../pages/activities/activities";
import ControlPanelPage from "../pages/control-panel/control-panel";
import LoginPage from "../pages/login/login";
import SignupPage from "../pages/signup/signup";
import BrandPanelPage from "../pages/brand-panel/brand-panel";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../redux/auth";
const AppRoutes = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brand-panel"  element={<BrandPanelPage />} />
        <Route path="/influencer/:influencerId" element={<InfluencerPage />} />
        <Route path="/serie/:serieId" element={<SeriePage />} />
       
        {auth.currentUser && (
          <Route path="/control-panel" element={<ControlPanelPage />} />
        )}

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;

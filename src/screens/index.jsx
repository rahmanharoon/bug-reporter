import React from "react";
import Bugs from "../components/bugs/Bugs";
import AppNavbar from "../components/navbar/AppNavbar";
import AddButton from "../components/button/AddButton";
import AddBugModal from "../components/modals/bugsModal/AddBugModal";
import EditBugModal from "../components/modals/bugsModal/EditBugModal";
import AddTechModal from "../components/modals/techsModal/AddTechModal";
import TechListModal from "../components/modals/techsModal/TechListModal";

const Home = () => (
  <>
    <AppNavbar />
    <div className="container">
      <AddButton />
      <AddBugModal />
      <EditBugModal />
      <AddTechModal />
      <TechListModal />
      <Bugs />
    </div>
  </>
);

export default Home;

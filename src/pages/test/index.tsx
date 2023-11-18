import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast("Bomboclaat!");

export default function SupaBase() {
  return (
    <>
      <button
        style={{ width: "50px", height: "50px", backgroundColor: "yellow" }}
        onClick={notify}></button>
      <ToastContainer />
    </>
  );
}

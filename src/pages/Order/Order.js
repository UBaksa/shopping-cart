import React, { useState } from "react";
import "./Order.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import toast, { Toaster } from "react-hot-toast";

export default function Order() {
  const Navigation = useNavigate();

  const [ime, setIme] = useState("");
  const [brojKartice, setBrojKartice] = useState("");
  const [pinkod, setPinkod] = useState("");
  const [vazido, setVazido] = useState("");
  const [grad, setGrad] = useState("");
  const [postanskiBroj, setPostanskiBroj] = useState("");
  const { clearCart } = useContext(AppContext);

  const handleSubmit = () => {
    let greska = "";
    if (ime.trim() === "") {
      greska = "Invalid name !";
      toast.error(greska);
    } else if (brojKartice.trim() === "") {
      greska = "Invalid card number !";
      toast.error(greska);
    } else if (pinkod.trim() === "") {
      greska = "Invalid pin code!";
      toast.error(greska);
    } else if (vazido.trim() === "") {
      greska = "Invalid expire date !";
      toast.error(greska);
    } else if (grad.trim() === "") {
      greska = "Invalid city !";
      toast.error(greska);
    } else if (postanskiBroj.trim() === "") {
      greska = "Invalid postal code !";
      toast.error(greska);
    } else {
      setIme("");
      setBrojKartice("");
      setGrad("");
      setPinkod("");
      setPostanskiBroj("");
      setVazido("");
      clearCart();
      setTimeout(() => {
        Navigation(
          "C:UsershpDesktopReact.JSsecond react projectshopping-cartsrcpagesProductsProducts.js"
        );
      }, 1300);
    }
  };
  return (
    <div className="order-card">
      <div>
        <Toaster position="bottom-right" />
      </div>
      <div className="nav">PAYMENT VIA CARD</div>
      <div className="forma">
        <div className="first">
          <div className="name">
            <label htmlFor="ime" className="labell">
              Name on card
            </label>
            <br></br>
            <input
              type="text"
              id="ime"
              value={ime}
              onChange={(e) => setIme(e.target.value)}
              placeholder="e.g Saul Goodman"
              required
            />
          </div>
        </div>
        <div className="second"></div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./Pay.css";
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
      toast.success("Purchase successfully !");
      clearCart();
      setTimeout(() => {
        Navigation("/Products");
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
            <label htmlFor="ime">Name on card:</label>
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
          <div className="card-number">
            <label htmlFor="brojkartice">Card number:</label>
            <br></br>
            <input
              type="text"
              id="brojkartice"
              value={brojKartice}
              onChange={(e) => setBrojKartice(e.target.value)}
              required
              placeholder=" xxxx xxxx xxxx xxxx"
            />
          </div>
          <div className="pinkod">
            <label htmlFor="pinkod">Pin code:</label>
            <br></br>
            <input
              type="password"
              id="pinkod"
              value={pinkod}
              onChange={(e) => setPinkod(e.target.value)}
              required
              placeholder="xxxx"
            />
          </div>
        </div>
        <div className="second">
          <div className="vazido">
            <label htmlFor="vazido">Valid until:</label>
            <br></br>
            <input
              type="text"
              id="vazido"
              value={vazido}
              onChange={(e) => setVazido(e.target.value)}
              required
              placeholder="mm/yyyy"
            />
          </div>
          <div className="grad">
            <label htmlFor="grad">City & State:</label>
            <br></br>
            <input
              type="text"
              id="grad"
              value={grad}
              onChange={(e) => setGrad(e.target.value)}
              required
              placeholder="e.g Albequrqie/New Mexico"
            />
          </div>
          <div className="postal">
            <label htmlFor="postal">ZIP / Postal code</label>
            <br></br>
            <input
              type="text"
              id="postal"
              value={postanskiBroj}
              onChange={(e) => setPostanskiBroj(e.target.value)}
              required
              placeholder="e.g 36300"
            />
          </div>
        </div>
      </div>
      <button
        style={{
          width: "10rem",
          height: "2.5rem",
          marginTop: "1rem",
          borderRadius: "1rem",
          fontWeight: "bold",
          color: "yellow",
          backgroundColor: "#2e3a5b",
          cursor: "pointer",
        }}
        onClick={() => {
          handleSubmit();
        }}
      >
        Click to buy
      </button>
    </div>
  );
}

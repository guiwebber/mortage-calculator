import { useState } from "react";
import "./index.css";
import img from "./assets/images/illustration-empty.svg";
import imgCalc from "./assets/images/icon-calculator.svg";

function App() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [rate, setRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const calculateMortgage = () => {
    const P = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseInt(years) * 12;

    if (!P || !r || !n) return;

    const M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyPayment(M.toFixed(5));
    setTotalPayment((M * n).toFixed(5));
  };

  return (
    <div className="container">
      <div className="content">
        <div className="left">
          <div className="titleNclear">
            <h2>Mortgage Calculator</h2>
            <a href="#" onClick={() => { setAmount(""); setYears(""); setRate(""); setMonthlyPayment(null); setTotalPayment(null); }}>Clear all</a>
          </div>
          <div>
            <p className="titleInput">Mortgage Amount</p>
            <div className="divRelative">
              <span className="symbol">€</span>
              <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className="flex">
              <div className="halfDiv">
                <p className="titleInput">Mortgage Term</p>
                <div className="divRelative">
                  <span className="rightSymbol">years</span>
                  <input type="text" className="halfInput" value={years} onChange={(e) => setYears(e.target.value)} />
                </div>
              </div>
              <div className="halfDiv">
                <p className="titleInput">Interest Rate</p>
                <div className="divRelative">
                  <span className="rightSymbol">%</span>
                  <input type="text" className="halfInput" value={rate} onChange={(e) => setRate(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
          <div className="divSelect">
            <p className="titleInput">Mortgage Type</p>
            <label className="label">
              <input type="radio" name="radioBtn" className="input" /> Repayment
            </label>
            <label className="label">
              <input type="radio" name="radioBtn" className="input" /> Interest Only
            </label>
            <button className="btnCalc" onClick={calculateMortgage}>
              <img src={imgCalc} alt="" /> Calculate Repayments
            </button>
          </div>
        </div>
        <div className="right">
          <div className="divImg">
            <img src={img} alt="" />
          </div>
          <div className="text">
            {monthlyPayment && totalPayment ? (
              <>
                <h3>Results</h3>
                <p>Monthly Payment: €{monthlyPayment}</p>
                <p>Total Repayment: €{totalPayment}</p>
              </>
            ) : (
              <>
                <h3>Results shown here</h3>
                <p>Complete the form and click "calculate repayments" to see your results.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

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
  const [errors, setErrors] = useState({});
  const [mortgageType, setMortgageType] = useState("");
  const formatNumber = (num) => {
    let formattedNum = num.toFixed(5); // Garante 5 casas decimais sem arredondar

    let moreFormat = formattedNum.replace(".", ",");

    let [integerPart, decimalPart] = moreFormat.split(",");

    return `${integerPart}.${decimalPart.slice(0, 3)},${decimalPart.slice(
      3,
      5
    )}`;
  };

  const validateFields = () => {
    const newErrors = {};
    if (!amount) newErrors.amount = "This field is required";
    if (!years) newErrors.years = "This field is required";
    if (!rate) newErrors.rate = "This field is required";
    if (!mortgageType) newErrors.mortgageType = "Please select a mortgage type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateMortgage = () => {
    if (!validateFields()) return;

    const P = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseInt(years) * 12;

    if (!P || !r || !n) return;

    const M = (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    const total = M * n;

    setMonthlyPayment(formatNumber(M));
    setTotalPayment(formatNumber(total));
  };

  return (
    <div className="container">
      <div className="content">
        <div className="left">
          <div className="titleNclear">
            <h2>Mortgage Calculator</h2>
            <a
              href="#"
              onClick={() => {
                setAmount("");
                setYears("");
                setRate("");
                setMonthlyPayment(null);
                setTotalPayment(null);
                setErrors({});
              }}
            >
              Clear all
            </a>
          </div>
          <div className="testeDiv">
            <div className="firstDivLeft">
              <p className="titleInput">Mortgage Amount</p>
              <div className="divRelative">
                <span className={`symbol ${errors.amount ? "error-span" : ""}`}>
                  €
                </span>
                <input
                  type="text"
                  className={errors.amount ? "error-input" : ""}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              {errors.amount && (
                <p className="error-message">{errors.amount}</p>
              )}

              <div className="flex">
                <div className="halfDiv">
                  <p className="titleInput">Mortgage Term</p>
                  <div className="divRelative">
                    <span
                      className={`rightSymbol ${
                        errors.years ? "error-span" : ""
                      }`}
                    >
                      years
                    </span>
                    <input
                      type="text"
                      className={`halfInput ${
                        errors.years ? "error-input" : ""
                      }`}
                      value={years}
                      onChange={(e) => setYears(e.target.value)}
                    />
                  </div>
                  {errors.years && (
                    <p className="error-message">{errors.years}</p>
                  )}
                </div>
                <div className="halfDiv">
                  <p className="titleInput">Interest Rate</p>
                  <div className="divRelative">
                    <span
                      className={`rightSymbol ${
                        errors.rate ? "error-span" : ""
                      }`}
                    >
                      %
                    </span>
                    <input
                      type="text"
                      className={`halfInput ${
                        errors.rate ? "error-input" : ""
                      }`}
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                    />
                  </div>
                  {errors.rate && (
                    <p className="error-message">{errors.rate}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="divSelect">
              <p className="titleInput">Mortgage Type</p>
              <label className="label">
                <input
                  type="radio"
                  name="radioBtn"
                  className="input"
                  value="Repayment"
                  onChange={(e) => setMortgageType(e.target.value)}
                />{" "}
                Repayment
              </label>
              <label className="label">
                <input
                  type="radio"
                  name="radioBtn"
                  className="input"
                  value="Interest Only"
                  onChange={(e) => setMortgageType(e.target.value)}
                />{" "}
                Interest Only
              </label>
              {errors.mortgageType && (
                <p className="error-message">{errors.mortgageType}</p>
              )}
            </div>
          </div>
          <button className="btnCalc" onClick={calculateMortgage}>
            <img src={imgCalc} alt="" /> Calculate Repayments
          </button>
        </div>
        <div className="right">
          {monthlyPayment && totalPayment ? (
            <div className="showingResults">
              <div className="textResults">
                <h2>Your Results</h2>
                <p className="textsOpacity">
                  Your results are shown below based ont he information you
                  provided. To adjust the results, edit the form and click
                  "calculate repayments" again.
                </p>
              </div>
              <div className="results">
                <div className="topDiv">
                  <p className="textsOpacity">Your monthly repayments</p>
                  <h1 className="monthlyResult">£{monthlyPayment}</h1>
                </div>
                <div className="bottomDiv">
                  <p className="textsOpacity">
                    Total you'll repay over the term
                  </p>
                  <h4> £{totalPayment}</h4>
                </div>
              </div>
            </div>
          ) : (
            <div className="preShow">
              <div className="divImg">
                <img src={img} alt="" />
              </div>
              <h3>Results shown here</h3>
              <p className="textsOpacity">
                Complete the form and click "calculate repayments" to see what
                your monthly repayments would be.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

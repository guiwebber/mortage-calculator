import "./index.css";
import img from "./assets/images/illustration-empty.svg";
import imgCalc from "./assets/images/icon-calculator.svg";
function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="left">
          <div className="titleNclear">
            <h2>Mortgage Calculator</h2>
            <a href="#">Clear all</a>
          </div>
          <div>
            <p className="titleInput">Mortgage Amount</p>
            <div className="divRelative">
              <span className="symbol">€</span>
              <input type="text" />
            </div>
            <div className="flex">
              <div className="halfDiv">
                <p className="titleInput">Mortgage Amount</p>
                <div className="divRelative">
                  <span className="rightSymbol">years</span>
                  <input type="text" className="halfInput"/>
                </div>
              </div>
              <div className="halfDiv">
                <p className="titleInput">Mortgage Amount</p>
                <div className="divRelative">
                  <span className="rightSymbol">%</span>
                  <input type="text" className="halfInput" />
                </div>
              </div>
            </div>
          </div>
          <div className="divSelect">
            <p className="titleInput">Mortagage Type</p>
            <label className="label">
              <input type="radio" name="radioBtn" className="input" /> Repayment
            </label>
            <label className="label">
            <input type="radio" name="radioBtn"  className="input" /> Interest Only
            </label>
            <button className="btnCalc"> <img src={imgCalc} alt="" /> Calculate Repayments</button>
          </div>
        </div>
        <div className="right">
          <div className="divImg">
            <img src={img} alt="" />
          </div>
          <div className="text">
            <h3>Results shown here</h3>
            <p>
              Complete the form and click "calculate repayments" to see what
              your monthly repayments would be.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

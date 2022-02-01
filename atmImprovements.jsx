// const ATMDeposit = ({ onChange, isDeposit }) => {
//   const choice = ['Deposit', 'Cash Back'];
//    console.log(`ATM isDeposit: ${isDeposit}`);
//   return (
//     <label className="label huge">
//       <h3> {choice[Number(!isDeposit)]}</h3>
//       { {isDeposit} && <div>
//       <input id="number-input" type="number" width="200" onChange={onChange}></input>
//       <input type="submit" width="200" value="Submit" id="submit-input"></input>
//       </div>
//       }
//     </label>
//   );
// };

// const Account = () => {
//   const [deposit, setDeposit] = React.useState(0);
//   const [totalState, setTotalState] = React.useState(0);
//   const [isDeposit, setIsDeposit] = React.useState(true);
//   const [atmMode, setAtmMode] = React.useState("");

//   let status = `Account Balance $ ${totalState} `;
//   console.log(`Account Rendered with isDeposit: ${isDeposit}`);
//   const handleChange = (event) => {
//     console.log(`handleChange ${event.target.value}`);
//     setDeposit(Number(event.target.value));
//   };
//   const handleSubmit = (event) => {
//     let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
//     setTotalState(newTotal);
//     setValidTransaction(false);
//     event.preventDefault();
//   };
//   const handleModeSelect = (event) => {
//     console.log(event.target.value)
//     if(event.target.value = "Deposit") {
//       setIsDeposit(true);
//     } else if(event.target.value = "Cash Back"){
//       setIsDeposit(false);
//     } else {
//       setIsDeposit("");
//     }
//     console.log(isDeposit);
//     event.preventDefault();

//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 id="total">
//         <label>Select an action below to continue</label>
//           <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
//             <option id="no-selection" value=""></option>
//             <option id="deposit-selection" value="Deposit">Deposit</option>
//             <option id="cashback-selection" value="Cash Back">Cash Back</option>
//           </select>
//           {status}
//       </h2>
  
//       <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
//     </form>
//   );
// };
// // ========================================
// ReactDOM.render(<Account />, document.getElementById('root'));
// // <option onClick={() => setIsDeposit(true)}>Deposit</option>
// // <option onClick={() => setIsDeposit(false)}>Cash Back</option>


const ATMDeposit = ({ onChange, deposit, isDeposit, totalState }) => {
    const choice = ['Deposit', 'Cash Back'];
    console.log(`ATM isDeposit: ${isDeposit}`);
    const valid = (deposit > 0) && (isDeposit || (!isDeposit && deposit <= totalState));
    return (
      <label className="label huge m-2">
        <h3 className="m-2"> {choice[Number(!isDeposit)]}</h3>
        <input className="form-control m-2" id="number-input" type="number" width="200" onChange={onChange}></input>
        <input className="btn btn-success m-2" type="submit" width="200" value="Submit" id="submit-input" disabled={!valid}></input>
      </label>
    );
  };
  
  const Account = () => {
    const [deposit, setDeposit] = React.useState(0);
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [atmMode, setAtmMode] = React.useState("");
  
    let status = `Account Balance $ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);
    const handleChange = (event) => {
      console.log(`handleChange ${event.target.value}`);
      setDeposit(Number(event.target.value));
    };
    const handleSubmit = (event) => {
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      setTotalState(newTotal);
      event.preventDefault();
    };
    const handleModeSelect = (event) => {
      console.log(`handleModeSelect ${event.target.value}`);
      setAtmMode(event.target.value);
      if(event.target.value == "Deposit"){
        setIsDeposit(true);
      } else if(event.target.value == "Cash Back"){
        setIsDeposit(false);
      }
    }
  
    return (
      <form className="p-3 m-2 bg-light text-dark" onSubmit={handleSubmit}>
        <h2 className="m-2" id="total">{status}</h2>
        <label className="m-2">Select an action below to continue</label>
        <select className="m-2 form-select" onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
        <option id="no-selection" value=""></option>
        <option id="deposit-selection" value="Deposit">Deposit</option>
        <option id="cashback-selection" value="Cash Back">Cash Back</option>
        </select>
        {atmMode && <ATMDeposit onChange={handleChange} deposit={deposit} isDeposit={isDeposit} totalState={totalState}></ATMDeposit>}
      </form>
    );
  };
  // ========================================
  ReactDOM.render(<Account />, document.getElementById('root'));
  
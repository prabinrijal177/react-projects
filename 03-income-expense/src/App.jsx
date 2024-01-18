import { useState } from 'react';
import './App.css';


function App() {

  const [statements, setStatements] = useState([]);

  const [input, setInput] = useState({
    statement: "",
    amount: "",
    statementType: "income",
  },
  );

  const [showError, setShowError] = useState({
    statement: false,
    amount: false,

  });

  const handleUpdateInput = (e) =>{
    setInput({
      ...input,
      [e.target.name] : e.target.value,
    });
  };

  const handleAddNewStatement = () =>{
    const {statement, amount, statementType} = input;

    if (!statement){
      return setShowError({
        statement: true,
        amount: false,
      });
    }else if(!amount){
      return setShowError({
        statement: false,
        amount: true,
      });

    }else{
      setShowError({
        statement: false,
        amount: false,
      });
      setStatements([...statements,{
        name: statement,
        amount: parseFloat(amount).toFixed(2),
        type: statementType,
        date: new Date().toDateString(),
      },
    ]);
    setInput({
      statement: "",
      amount:"",
      statementType:"income",
    });
    }
  };

  return(
  <main>
     <div>

      <h2 className="total-text">0</h2>
      <div className="input-container">

        <input type="text" placeholder='Income or expense' onChange={handleUpdateInput}
        value={input.statement}
        name='statement'
        style={showError.statement ? {borderColor: "red"} : null}
        />

        <input type="number"  onChange={handleUpdateInput}
        value={input.amount}
        name='amount'
        style={showError.amount ? {borderColor: "red"} : null}/>

        <select onChange={handleUpdateInput}
        value={input.statementType}
        name='statementType'>


          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button onClick={handleAddNewStatement}>+</button>
      </div>
      <div>
  {statements.map((statement) => (
    <div className="card" key={statement.id}>
      <div className="card-info">
        <h4>{statement.name}</h4>
        <p>{statement.date}</p>
      </div>
      <p className={`amount-text ${statement.type === "income" ? "success" : "danger"}`}>
        {statement.type === "income" ? "+" : "-"}${statement.amount}
      </p>
    </div>
  ))}
</div>

    </div>
  </main>
)}

export default App;

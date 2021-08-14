import React,{useState} from 'react'

const TransferMoney = () => {
  const [acnumber,setacnumber]=useState("");
  const [acnumber1,setacnumber1]=useState("");
  const [bbalance,setbbalance]=useState("");
  const senderNumber=(e)=>{
    setacnumber(e.target.value);
  }
  const recievernumber=(e)=>{
    setacnumber1(e.target.value);
  }
  const balance=(e)=>{
    setbbalance(e.target.value);
  }
  const userSubmit=async(e)=>{
    console.log("idhar toh aaya")
    const res=await fetch('/transfermoneyuser',{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
     },
     body: JSON.stringify({
       acnumber,acnumber1,bbalance
      })
    });
    const data = await res.json();
    console.log(data);
    if(data.status===400||!data)
    {
      console.log("Error Occured");
    }
  }
    return (
        <>
         <details>
                    <summary></summary>
                    <nav class="menu">
                        <a href="/">Home</a>
                        <a href="/viewuser">ViewUser</a>
                        <a href="/transfermoney">Transfer</a>
                        <a href="/transhistory">TransactionHistory</a>
                    </nav>
                </details>
         <section className="header1">
          <nav className="navbar">
                    <img className="mainlogo" src="./images/banklogo.jpg"></img>
                    <div className="heading">
                        MoneyBank
                    </div>
                    <div className="navitem">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/viewuser">View-User</a></li>
                            <li><a href="/transfermoney">Transfer-Money</a></li>
                            <li><a href="/transhistory">Transaction-History</a></li>
                        </ul>
                    </div>
                </nav>
          </section>  
          <div class="transferbody">
          <div className="headlogo">
          <i class="fas fa-piggy-bank fa-7x" style={{
              marginRight:"2%",
              color:"white"
          }}></i>
          <h1 style={{
              color:"white"
          }}>SECURE MONEY TRANSFER</h1>
          </div>
          <div class="form" method="POST">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's Transfer Money!</div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" onChange={senderNumber} placeholder=" " autoComplete="new-password"/>
        <div class="cut"></div>
        <label for="firstname" class="placeholder">Account Number of Sender</label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" onChange={recievernumber} placeholder=" " autoComplete="new-password"/>
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Account Number of Reciever</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" onChange={balance} placeholder=" " autoComplete="off"/>
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Enter Amount</label>
      </div>
      <button type="text" onClick={userSubmit} class="submit">submit</button>
    </div>
          </div>  
        </>
    )
}

export default TransferMoney

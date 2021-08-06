import React from 'react'

const TransferMoney = () => {
    return (
        <>
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
          <div class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's Transfer Money!</div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " autoComplete="off"/>
        <div class="cut"></div>
        <label for="firstname" class="placeholder">Account Number of Sender</label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Account Number of Reciever</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Enter Amount</label>
      </div>
      <button type="text" class="submit">submit</button>
    </div>
          </div>  
        </>
    )
}

export default TransferMoney

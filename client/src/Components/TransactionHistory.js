import React,{useEffect,useState} from 'react'
const TransactionHistory = () => {
  const [userdata,setuserdata]=useState([]);
  const showuser=async ()=>{
    const res=await fetch('/transhistory',{
      method:"GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
    });
    const data=await res.json();
    setuserdata(data);
  }
  useEffect(() => {
    showuser();
  }, [])
  const currdate=new Date().toLocaleString();
  console.log(currdate);
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
      <div className="container my-5">
      <table class="table table-hover table-bordered">
  <thead>
    <tr className="table-danger">
      <th scope="col">Name</th>
      <th scope="col">AccountNumber</th>
      <th scope="col">Balance</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
   {userdata.map((ele)=>{
     console.log(ele);
    return(<tr className="table-success">
      <th scope="row">{ele.name}</th>
      <td>{ele.acnumber}</td>
      <td>{ele.bbalance}</td>
      <td>{ele.date}</td>
    </tr>)
   })}
  </tbody>
</table>
      </div>
          </>
  )
}
export default TransactionHistory

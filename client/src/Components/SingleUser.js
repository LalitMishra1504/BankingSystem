import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
const SingleUser = () => {
    const params=useParams();
    const [userdata,setuserdata]=useState({});
    const usershown=async()=>{
        const res=await fetch(`/singleuser/${params._id}`,{
            method:"GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        const data=await res.json();
        console.log(data);
        setuserdata(data);
        console.log(userdata);
    }
    useEffect(() => {
        usershown();
    }, [])
    return (
        <>
        {console.log(userdata.name)}
          <section className="header1">
          <nav className="navbar">
                    <img className="mainlogo" src="/images/banklogo.jpg" alt="image"></img>
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
          <div className="main-container1">
                <div className="content-container1">
                        <img src="/images/bankimg.JPG" alt="image" className="cardimage" />
                        <div className="customerinfo">
                            <h4 className="text"><i className="fas fa-user logo"></i>NAME:<h5>{userdata.name}</h5></h4>
                            <h4 className="text"><i className="fas fa-envelope logo"></i>EMAIL:<h5>{userdata.email}</h5></h4>
                            <h4 className="text"><i className="fas fa-list-ol logo"></i>ACCOUNT-NUMBER:<h5>{userdata.acnumber}</h5></h4>
                            <h4 className="text"><i className="fas fa-rupee-sign logo"></i>BALANCE:<h5>{userdata.bbalance}</h5></h4>
                        </div>
                        <button className="btn">TransferMoney</button>
                    </div>
                </div>
        </>
    )
}
export default SingleUser

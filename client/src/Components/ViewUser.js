import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
const ViewUser = () => {
    const history = useHistory();
    const [openmodal, setopenmodal] = useState(false);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [acnumber, setacnumber] = useState("");
    const [bbalance, setbbalance] = useState("");
    const [customerdetail, setcustomerdetail] = useState([]);
    const onNameHandler = (e) => {
        setname(e.target.value);
    }
    const onEmailHandler = (e) => {
        setemail(e.target.value);
        console.log(email);
    }
    const onanumberHandler = (e) => {
        setacnumber(e.target.value);
    }
    const bankbalanceHandler = (e) => {
        setbbalance(e.target.value);
    }
    const customerdetails = async (e) => {
        setopenmodal(false);
        e.preventDefault();
        const res = await fetch('/userdetail', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, acnumber, bbalance
            })
        });
        const data = await res.json();
        if (res.status === 422 || !data) {
            window.alert("Not Register");
        }
        else {
            window.alert("register Succesfully");
            setname("");
            setemail("");
            setacnumber("");
            setbbalance("");
            showuser();
        }
    }
    const gotoloc = (_id) => {
        console.log(_id);
        history.push(`/singleuser/${_id}`);
    }
    const showuser = async () => {
        const res = await fetch('/showdata', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        setcustomerdetail(data);
        // console.log(data);
        // console.log(customerdetail);
        // if (res.status === 200) {
        //     window.alert("success");
        // }
        // else {
        //     window.alert("not success");
        // }
    }
    useEffect(() => {
        showuser()
    }, [])
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
                <button style={{
                    background: "Red",
                    border: "none",
                    textAlign: "center",
                    marginLeft: "40%"
                }} onClick={() => {
                    setopenmodal(true);
                }}>Add Customer</button>
                <Modal isOpen={openmodal}>
                    <h2 style={{
                        textAlign: "center",
                    }}>Customer Detail's</h2>
                    <div>
                        <form method="POST">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" onChange={onNameHandler} placeholder="Enter Name" />
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" onChange={onEmailHandler} aria-describedby="emailHelp" placeholder="Enter email" autoComplete="off" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                <label for="exampleInputEmail1">Account Number</label>
                                <input type="accountnumber" class="form-control" id="exampleInputEmail1" onChange={onanumberHandler} aria-describedby="emailHelp" placeholder="Enter Account Number" autoComplete="off" />
                                <label for="exampleInputEmail1">Bank Balance</label>
                                <input type="" class="form-control" id="exampleInputEmail1" onChange={bankbalanceHandler} aria-describedby="emailHelp" placeholder="Enter BankBalance" autoComplete="off" />
                            </div>
                        </form>
                    </div>
                    <div>
                        <button onClick={customerdetails} style={{
                            background: "Red",
                            border: "none",
                            textAlign: "center",
                            marginLeft: "40%"
                        }}>Save</button>
                    </div>
                </Modal>
                <div className="main-container">
                {
                    customerdetail.map((res) => {
                        console.log(res);
                        return(
                            <div className="content-container">
                                <img src="./images/bankimg.JPG" className="cardimage" />
                                <div className="customerinfo">
                                    <h4 className="text"><i className="fas fa-user logo"></i>NAME:<h5>{res.name}</h5></h4>
                                    <h4 className="text"><i className="fas fa-envelope logo"></i>EMAIL:<h5>{res.email}</h5></h4>
                                    <h4 className="text"><i className="fas fa-list-ol logo"></i>ACCOUNT-NUMBER:<h5>{res.acnumber}</h5></h4>
                                    <h4 className="text"><i className="fas fa-rupee-sign logo"></i>BALANCE:<h5>{res.bbalance}</h5></h4>
                                </div>
                                <button className="btn" onClick={()=>{
                                    gotoloc(res._id)
                                }}>USER INFO</button>
                            </div>
                        )
                    })
                }
                </div>
            </section>
        </>
    )
}

export default ViewUser

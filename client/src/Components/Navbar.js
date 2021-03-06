import React from 'react'

const Navbar = () => {
    return (
        <>
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
        </>
    )
}

export default Navbar

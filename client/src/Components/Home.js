import React from 'react'

const Home = () => {
    return (
        <>
            <div>
                <details>
                    <summary></summary>
                    <nav class="menu">
                        <a href="/">Home</a>
                        <a href="/viewuser">ViewUser</a>
                        <a href="/transfermoney">Transfer</a>
                        <a href="/transhistory">TransactionHistory</a>
                    </nav>
                </details>
                <section className="header">
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
                    <div className="text-box">
                        <h1>World's Biggest Bank</h1>
                        <p> Financial institutions which provide loans, accept deposits and manage monetary circulation are banks.</p>
                        <button className="mainbtn"><a href="#"></a>KNOW MORE</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home

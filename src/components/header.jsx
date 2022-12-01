import "../styles/header.css"
import Prices from "./prices"

import logo from "../images/logostella.png"
import menu1 from "../images/menu.png"
import menu2 from "../images/menu2.png"

import {Link} from "react-router-dom"
import {useState} from 'react'
import { ethers } from 'ethers';


function Header() {


    const [walletAddress, setWalletAddress] = useState("Connect Wallet")

    async function requestAccount() {
        if(window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                })
                // setWalletAddress(accounts[0])
                setWalletAddress('Connected')
            } catch (er) {
                console.log('error connection')
            }
        }

        else {
            alert('Metamask not detected')
        }
    }

    async function connectWallet() {
        if (typeof window.ethereum !== 'undefined') {
            await requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum)
        }
    }

    const [icon, setIcon] = useState(menu1)
    const [display, setDisplay] = useState('none')
 
    function ChangeIcon() {
        if (icon == menu1) {
            setIcon(menu2)
            setDisplay('flex')
        }
        if (icon == menu2) {
            setIcon(menu1)
            setDisplay('none')
        }
    }

    return (
        <>
        <div className="wrapper">
            <div className="logo"><Link to="/"><img src={logo} /></Link></div>

            <div className="nav">
                <Link to="/nftmarket" className="navCom"><div >NFT</div></Link>
                <Link to="/swap" className="navCom"><div>Swap</div></Link>
                <Link to="/stake" className="navCom"><div>Stake</div></Link>
                <Link to="/bet" className="navCom"><div>Bets</div></Link>
                <Link to="/" className="navCom"><div>News</div></Link>
            </div>
            <div className="connect" onClick={requestAccount}>{walletAddress}</div>
            <div className="menu" onClick={ChangeIcon}><img src={icon}/></div>

            <div className="rates"><Prices /></div>
        </div>
        <div className="navM" style={{display: display}}>
                <Link to="/nftmarket" className="navEl"><div >NFT</div></Link>
                <Link to="/swap" className="navEl"><div>Swap</div></Link>
                <Link to="/bet" className="navEl"><div>Bets</div></Link>
                <Link to="/stake" className="navEl"><div>Stake</div></Link>
                <Link to="/" className="navEl"><div>News</div></Link>
        </div>
        </>
    )
}

export default Header
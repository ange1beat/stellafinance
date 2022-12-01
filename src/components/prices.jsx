import axios from "axios";
import React, { useState, useEffect, } from "react";
import "../styles/prices.css"


function Prices() {

  const [price, setPrice] = useState([{image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579', current_price: "..."}, {image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880', current_price: "..."}, {image: '', current_price: ""}, {image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850', current_price: "..."},])
  const [priceColor, setPriceColor] = useState('black')

  useEffect(() => {

    const interval = setInterval(() => {
      setPriceColor('blue')
        axios
        .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .catch('ok')
        .then(data => {
                setPrice(data.data)
                console.log(data.data)
                setPriceColor('black')
            })
    
    }, 10000)

    return () => clearInterval(interval)

   }, [])
   
   
    

  return (
    <div className="wrapperPrices">
    <div className="coinBTC">
    <img src={price[0].image} alt='btc'/>
    <span style={{color: priceColor}}>{price[0].current_price}</span>
    </div>

    <div className="coinETH">
    <img src={price[1].image} alt='eth'/>
    <span style={{color: priceColor}}>{price[1].current_price}</span>
    </div>

    <div className="coinBNB">
    <img src={price[3].image} alt='bnb'/>
    <span style={{color: priceColor}}>{price[3].current_price}</span>
    </div>
    </div>
  )
}

export default Prices;

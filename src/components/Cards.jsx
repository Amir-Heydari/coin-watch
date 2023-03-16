import React from 'react'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa'
import { SiBinance, SiTether } from 'react-icons/si'
function Cards({cardData}) {
  return (
    <div className='flex justify-around mt-10 border-b-4 pb-10'>

      <div className='bg-zinc-800 py-5 px-14 rounded-xl font-bold dark:bg-white'>
        <p className='flex text-4xl text-white dark:text-zinc-800'><BsCurrencyBitcoin className='mr-2' />Bitcoin</p>

        <p className='mt-5 flex text-2xl text-white dark:text-zinc-800'>Live price:  <span className='mx-2'>${cardData.bitcoin.usd}</span></p>

        <p className='mt-5 flex text-2xl text-white dark:text-zinc-800'>24h change: <span className='mx-2' style={cardData.bitcoin.usd_24h_change>=0 ? {color:'green'} : {color:'red'}}>{cardData.bitcoin.usd_24h_change.toFixed(3)}%</span></p>
      </div>

      <div className='bg-zinc-800 py-5 px-14 rounded-xl font-bold dark:bg-white'>
        <p className='flex text-4xl text-white dark:text-zinc-800'><FaEthereum className='mr-2' />Ethereum</p>

        <p className='mt-5 flex text-2xl text-white dark:text-zinc-800'>Live price:  <span className='mx-2'>${cardData.ethereum.usd}</span></p>

        <p className='mt-5 flex text-2xl text-white dark:text-zinc-800'>24h change: <span className='mx-2' style={cardData.ethereum.usd_24h_change>=0 ? {color:'green'} : {color:'red'}}>{cardData.ethereum.usd_24h_change.toFixed(3)}%</span></p>
      </div>


      <div className='bg-zinc-800 py-5 px-14 rounded-xl font-bold dark:bg-white'>
        <p className='flex text-4xl text-white dark:text-zinc-800'><SiTether className='mr-2' />Tether</p>

        <p className='mt-5 flex text-2xl text-white dark:text-zinc-800'>Live price:  <span className='mx-2'>${cardData.tether.usd}</span></p>

        <p className='mt-5 flex text-2xl text-white dark:text-zinc-800'>24h change: <span className='mx-2' style={cardData.tether.usd_24h_change>=0 ? {color:'green'} : {color:'red'}}>{cardData.tether.usd_24h_change.toFixed(3)}%</span></p>
      </div>



      <div className='bg-zinc-800 py-5 px-14 rounded-xl font-bold dark:bg-white'>
        <p className='flex text-4xl text-white dark:text-zinc-800'><SiBinance className='mr-2' />Binance Coin</p>

        <p className='mt-5 flex text-2xl text-white dark:text-zinc-800'>Live price:  <span className='mx-2'>${cardData.binancecoin.usd}</span></p>

        <p className='mt-5 flex text-2xl text-white dark:text-zinc-800'>24h change: <span className='mx-2' style={cardData.binancecoin.usd_24h_change>=0 ? {color:'green'} : {color:'red'}}>{cardData.binancecoin.usd_24h_change.toFixed(3)}%</span></p>
      </div>

    </div>
  )
}

export default Cards

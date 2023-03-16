import React from 'react'

function Table({ data }) {

    return (

        <div className='flex justify-center dark:text-white'>

            <table className='table-auto bg-transparent'>
                <thead className='text-xl font-bold'>
                    <tr className='border-b-0 border-gray-500'>
                        <th className='px-8 py-4 text-center shadow-xl'>#</th>
                        <th className='px-8 py-4 text-center shadow-xl'>Name</th>
                        <th className='px-8 py-4 text-center shadow-xl'>Price</th>
                        <th className='px-8 py-4 text-center shadow-xl'>1H%</th>
                        <th className='px-8 py-4 text-center shadow-xl'>24H%</th>
                        <th className='px-8 py-4 text-center shadow-xl'>7D%</th>
                        <th className='px-8 py-4 text-center shadow-xl'>Market Cap</th>
                        
                    </tr>
                </thead>
                <tbody className='text-xl'>
                    {
                        data.map((v) => {
                            const color = v.price_change_percentage_24h_in_currency >= 0 ? 'text-green-700' : 'text-red-700'
                            const one_H_Color = v.price_change_percentage_1h_in_currency >= 0 ? 'text-green-700' : 'text-red-700'
                            const seven_D_Color = v.price_change_percentage_7d_in_currency >= 0 ? 'text-green-700' : 'text-red-700'
                            return (
                                <tr key={v.id} className='font-semibold border-b-0 border-gray-500 text-lg  hover:bg-gray-200 dark:hover:bg-zinc-800'>
                                    <td className='px-8 py-4s text-center'>{v.market_cap_rank}</td>
                                    <td className='flex px-24 py-4 text-center font-bold'><img className='w-10 h-10 mr-5' alt='coin symbol' src={v.image} /> <p>{v.name}</p><p className='text-gray-600 ml-4'>{v.symbol}</p></td>
                                    <td className='px-8 py-4 text-center'>${v.current_price}</td>
                                    <td className='px-8 py-4 text-center'><span className={one_H_Color} >{v.price_change_percentage_1h_in_currency.toFixed(3)}%</span></td>
                                    <td className='px-8 py-4 text-center'><span className={color} >{v.price_change_percentage_24h_in_currency.toFixed(3)}%</span></td>
                                    <td className='px-8 py-4 text-center'><span className={seven_D_Color} >{v.price_change_percentage_7d_in_currency.toFixed(3)}%</span></td>
                                    <td className='px-8 py-4 text-center'>${v.market_cap}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table

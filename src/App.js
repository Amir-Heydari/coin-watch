import Header from "./components/Header";
import Cards from "./components/Cards";
import Table from "./components/Table";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // const dispatch = useDispatch()
  // const vsCurrency = useSelector((state) => state.fetchingReducer.vsCurrency )
  // const data = useSelector((state)=> state.fetchingReducer.data)

  const [data, setData] = useState();
  const [cardData, setCardData] = useState();
  const [theme, setTheme] = useState("light");
  const [vsCurrency, setVsCurrency] = useState("usd");

  

  useEffect(() => {
    const dataUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`;
    const cardUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin&vs_currencies=usd&include_24hr_change=true`
    
    axios.get(dataUrl).then((res) => {
      setData(res.data);      
    });

    axios.get(cardUrl).then((res) => {
      setCardData(res.data);      
    });

    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme,vsCurrency]);

  const handleTheme = ()=>{
    setTheme(theme=== "dark" ? "light" : "dark")
  }

  console.log(theme)

  return (
    
    <div className="dark:bg-slate-900">

      {data && cardData && (
        <div>
          <Header setVsCurrency={setVsCurrency} handleTheme={handleTheme}/>
          <Cards cardData={cardData} />
          <Table data={data} />
        </div>
      )}

    </div>
  );
}

export default App;

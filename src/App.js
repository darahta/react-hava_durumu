import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./City";

function App() {
   const key = "81ca6642768548d85f6eeb6ca02c1630";
   const [search, setSearch] = useState("");
   const [city, setCity] = useState();
   useEffect(() => {
      async function getApi() {
         try {
            const response = await axios.get(
               `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
            );
            console.log(response);
            setCity(response.data);
         } catch (error) {
            console.error(error);
         }
      }
      getApi();
   }, [search]);
   console.log(search);
   return (
      <div className="App">
         <div>
            <input
               onChange={(e) => setSearch(e.target.value)}
               type="text"
               placeholder="placeholder"
               clasName="px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600 bg-weight"
            />
            <City city={city} />
         </div>
      </div>
   );
}

export default App;

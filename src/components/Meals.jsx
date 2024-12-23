import axios from "axios";
import { useEffect, useState } from "react";
import "../style.css"


const Meals = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.
        get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").
        then((res) => setData(res.data.meals)).
        catch((err) => console.log(err))
    }, [])

    const ItemsLists = data.map(({strMeal, strMealThumb, idMeal}) => {
        return (
            <section className="card">
              <img src={strMealThumb} />
              <section className="content">
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
              </section>
            </section>
        )
    }) 

  return (
    <div className="items-container">
        {ItemsLists}
    </div>
  )
}

export default Meals
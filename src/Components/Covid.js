import React, { useEffect,useState} from 'react'
import './covid.css'

//console.log("7");
const Covid = () => {

  const [data,setData] = useState([]);
    
   //console.log("6");
    const getcoviddata=async()=>{
        try{
            console.log("9");
            const res= await fetch("https://api.covid19india.org/data.json");
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);

        }catch(err){
            console.log(err);
        }
    }
    //console.log("7");

    useEffect(() =>{
         getcoviddata();
    },[]);
    
    return (
        <>
            <h1>LIVE</h1>
            <h2>LIVE COVID-19 TRACKER</h2>
            <section>
            <ul>
              <li className="card">
                <div className="card_main">
                  <div className="card_inner">
                    <p className ="crad_name"><span>OUR</span> COUNTRY</p>
                    <p className="moo">INDIA</p>
                    </div>
                  </div>
                </li>

                <li className="card">
                <div className="card_main">
                  <div className="card_inner">
                    <p className ="crad_name"><span>TOTAL</span> RECOVERED </p>
                    <p className="moo">{data.recovered}</p>
                    </div>
                  </div>
                </li>


                <li className="card">
                <div className="card_main">
                  <div className="card_inner">
                    <p className ="crad_name"><span>TOTAL</span> CONFIRMED</p>
                    <p className="moo">{data.confirmed}</p>
                    </div>
                  </div>
                </li>


                <li className="card">
                <div className="card_main">
                  <div className="card_inner">
                    <p className ="crad_name"><span>TOTAL</span> DEATH</p>
                    <p className="moo">{data.deaths}</p>
                    </div>
                  </div>
                </li>



                <li className="card">
                <div className="card_main">
                  <div className="card_inner">
                    <p className ="crad_name"><span>TOTAL</span> ACTIVE</p>
                    <p className="moo">{data.active}</p>
                    </div>
                  </div>
                </li>



                <li className="card">
                <div className="card_main">
                  <div className="card_inner">
                    <p className ="crad_name"><span>LAST</span> UPDATED</p>
                    <p className="moo">{data.lastupdatedtime}</p>
                    </div>
                  </div>
                </li>
              </ul>
              </section>
        </>
    )
}
export default Covid



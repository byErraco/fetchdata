import React, { useEffect, useState, Fragment } from 'react';
import Spiner from './Spiner'



const Data = () => {

    const [data,setData] = useState([]);
    const [isLoading,setIsloading] = useState(true)
    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then((response) => response.json())
        //     .then((data) => setData(data.splice(0,10)))
        (async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            
            const data = await response.json()
            setTimeout(()=> {
                setData(data.splice(0,10))
                setIsloading(false)

            },3000)
            
        })();

    }, [])


    return ( 
        <Fragment>
          {isLoading ? <Spiner/> :
              <div>
              <ul>
                  {data.map((item) =>{
                      return <li key={item.id}>{item.body} </li>
                  }
                      )}
              </ul>
          </div>
         
          }
        </Fragment>
       
     );
}
 
export default Data;
  import React, { useEffect, useState } from 'react';
  import "./content.css"
  import axios from "axios"
  import ContentItem from './ContentItem';

  export default function Content() {

    const [data, setData] = useState([]);
    let ht = window.innerHeight;
    useEffect(() => {
      let i = 0;
      const getSome = async () => {
      
        try{
          fetch("/get", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"numb": i})
          })
          .then(res => res.json())
          .then(dat => dat.map(item => setData(prev => [...prev, item])));
          i=i+20
        }catch(err){
          console.log(err)
        }
      }
      
      getSome()
      
      window.onscroll=()=>{
        if(window.pageYOffset >= ht){
          getSome()
          console.log(data)
          console.log('go')
          ht=ht+window.innerHeight;
        }
      }
    }, [])
    console.log(data)
    return(
      <>  
      <div className='row'>
      {data ? data.map((item, i) => (
          <ContentItem key={i} item={item} index={i}/>
        )) : console.log("loading...")}
      </div>   
      </>
    );
  };


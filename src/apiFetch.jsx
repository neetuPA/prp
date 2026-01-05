import {useState } from 'react';
import { useEffect } from 'react';

export const apiFetch = () => {
   
        const [data, setData] = useState(null);
        const[loading,setLoading]=useState(true);
        const[err,setErr]=useState(null);
        const getData=async()=>{
            setLoading(true);
            setErr(null);
          
            try{
                const response=await fetch("https://api.escuelajs.co/api/v1/products");
                const jsonData=await response.json();
                console.log(jsonData);
                setData(jsonData); 
            }catch(err){
                comsole.log(err);
                setData(data);
            } finally {
      setLoading(false);
    }

        }
        useEffect(()=>{
            getData();
        },[]);

        return{data, loading, err};
    }
 

// export default apiFetch;

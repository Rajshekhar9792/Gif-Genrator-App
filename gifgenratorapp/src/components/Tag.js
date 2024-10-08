import React, { useState } from 'react';
// import axios from 'axios';
// import {useEffect} from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("Car");

  // const[gif, setGif] = useState('');
  // const [loading, setLoading] = useState('false');


  // async function fetchData(){
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data} = await axios.get(url);
  //   // console.log(output);
  //   const imageSource = data.data.images.downsized_large.url;
  //   // console.log(imageSource);
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect( () => {
  //   fetchData();
  // },[])

  const { gif, loading, fetchData } = useGif(tag);

  // function clickHandler(){
  //   fetchData(); 
  // }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className='bg-blue-500 w-1/2 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width='450' />)
      }

      <input
        className='w-10/12 text-lg py-1 rounded-lg mb-[3px] text-center'
        onChange={changeHandler}
        value={tag}
      />

      {/* <button className="bg-yellow-500 w-10/12 text-lg py-1 rounded-lg mb-[20px] " onClick={clickHandler}>Genrate</button> */}
      <button className="bg-yellow-500 w-10/12 text-lg py-1 rounded-lg mb-[20px] " onClick={() => fetchData()}>Genrate</button>


    </div>
  )
}

export default Tag;


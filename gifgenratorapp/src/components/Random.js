import React, { useState } from 'react';
// import axios from 'axios';
// import {useEffect} from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif'


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  // const[gif, setGif] = useState('');
  // const [loading, setLoading] = useState('false');


  // async function fetchData(){
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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

  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className='bg-green-500  w-1/2 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width='450' />)
      }

      <button className="bg-yellow-500 w-10/12 text-lg py-1 rounded-lg mb-[20px] " onClick={clickHandler}>Genrate</button>

    </div>
  )
}

export default Random;

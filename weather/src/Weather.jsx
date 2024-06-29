import React, { useState } from 'react'

const Weather = ({onSearch}) => {

    const [city,setCity] = useState('');

    const handleSubmit = () =>{
        onSearch(city)
    }
    return (
        <div className='flex justify-center my-10'>
            <input type='text' onChange={(e) => setCity(e.target.value)} value={city} placeholder='Enter City' className='px-4 py-2 w-full max-w-xs rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-none bg-gray-700 text-white focus:outline-none  focus:bg-opacity-20'/>
            <button className='ml-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-950 focus:bg-gray-950 text-white' onClick={() => handleSubmit()}>Search</button>
        </div>
    )
}

export default Weather

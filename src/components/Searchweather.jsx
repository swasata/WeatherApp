import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { } from '../components/Searchweather.css'

function Searchweather() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=80bad93401bf141c764dc400a0669e4b`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }
    }

    // let ctemp = (data.main.temp.toFixed(2))- 32 * (5 / 9);
    // (32°F − 32) × 5/9 = 0°C
    // ctemp - 32 * (5 / 9);
    //    let cel = ((5/9).toFixed(1));


    return (
        <>
            <div className="container t-b ">
                <div className="row flex ">
                    <div className=" pt-10  ">
                        <div className="search  justify-center">
                            <input className='input text-stone-900 font-bold font-serif text-center'
                                value={location}
                                onChange={event => setLocation(event.target.value)}
                                onKeyPress={searchLocation}
                                placeholder='Enter Location  '
                                type="text" />
                            
                        </div>


                        <div className="container ">
                            <div className="top bg-[#140c87] text-white border-2 rounded-md">
                                <div className="location">
                                    <p className='pl-5 underline'>{data.name}</p>
                                </div>
                                <div className="temp  text-center  ">
                                    {data.main ?
                                        <h1>
                                            {data.main.temp.toFixed(2)}°F <span> | </span>
                                            {(((data.main.temp.toFixed(5)) - 32) * ((5 / 9))).toFixed(2)}°C
                                        </h1> : null}
                                </div>
                                <div className="description text-center font-serif font-bold underline pb-2  ">
                                    {data.weather ? <p>{data.weather[0].main}</p> : null}
                                </div>
                            </div>

                            {data.name !== undefined &&
                                <div className="bottom text-center bg-[#2b74d9] border-2 rounded-md ">
                                    <div className="feels">
                                        <p>Feels Like</p>
                                        {data.main ? <p className='bold  underline'>{data.main.feels_like.toFixed(2)}°F
                                            <span> | </span>
                                            {(((data.main.feels_like.toFixed(5)) - 32) * ((5 / 9))).toFixed(2)}°C
                                        </p> : null}

                                    </div>
                                    <div className="humidity">
                                        <p>Humidity</p>
                                        {data.main ? <p className='bold underline'>{data.main.humidity}%</p> : null}

                                    </div>
                                    <div className="wind pb-3">
                                        <p>Wind Speed</p>
                                        {data.wind ? <p className='bold underline'>{data.wind.speed.toFixed(2)} MPH</p> : null}
                                    </div>

                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


export default Searchweather




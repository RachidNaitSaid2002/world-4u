import { useParams, Link } from 'react-router-dom';
import './detail.scss';
import React, { useState, useEffect } from 'react';

const Detail = () => {
    const { name } = useParams();
    const [countryInfo, setCountryInfo] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
                const data = await response.json();
                setCountryInfo(data[0]);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching content:', error);
            }
        };
        fetchData();
    }, [name]);

    return (
        <>
            <div className="head"> <Link to='/'className='btn'> <span class="material-symbols-outlined">
                arrow_back
            </span> Back </Link> </div>
            {loading ? <div className='loading'> <span class="loader"></span> </div> :   <div className="section">
                {countryInfo && typeof countryInfo === 'object' && (
                    <>
                        <div className="left">
                            <img src={countryInfo.flags.svg} alt={countryInfo.flags.alt} />
                        </div>
                        <div className="right">
                            <div className='right_left'>
                                <h2>{countryInfo.name.common}</h2>
                                <p>Native Name : <span>
                                    {(countryInfo && countryInfo.name && countryInfo.name.nativeName && Object.values(countryInfo.name.nativeName)[0].common)}
                                </span></p>
                                <p>Population : <span>{countryInfo.population}</span></p>
                                <p>Region : <span>{countryInfo.region}</span></p>
                                <p>Sub Region : <span>{countryInfo.subregion}</span></p>
                                <p>Capital : <span>{countryInfo.capital[0]}</span></p>
                            </div>
                            <div className='right_right'>
                                <p>Top Level Domain : <span>{countryInfo.tld}</span></p>
                                <p>Currencies : <span>
                                    {countryInfo.currencies &&
                                        Object.values(countryInfo.currencies).map((currency) => currency.name)}
                                </span></p>
                                <p>Languages : <span>
                                    {countryInfo.languages && Object.values(countryInfo.languages)[0]} {countryInfo.languages && Object.values(countryInfo.languages)[1]}
                                </span></p>
                            </div>
                        </div>
                    </>
                )}
            </div>}
          
        </>
    );
};

export default Detail;
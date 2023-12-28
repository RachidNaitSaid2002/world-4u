import './card.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card_c = ({ region, country }) => {
  console.log('Entered country:', country);
  console.log('Selected region:', region);
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        // Filter the data based on the selected region and country
        const filteredData = data.filter(item => {
          const countryName = item.name.common.toLowerCase();
          const filterCountry = country.toLowerCase();
          return (
            (region === 'All' || item.region === region) &&
            countryName.startsWith(filterCountry)
          );
        });

        setContent(filteredData);
        console.log(filteredData);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchData();
  }, [region, country]); // Add region and country as dependencies

  return (
    <>
      <div className="all">
        {content &&
          content.map((item) => {
            if (item.name.common !== 'Israel') {
              return (
                <div className="card" key={item.name.common}>
                  <div className="head_C">
                    <img src={item.flags.svg} alt={item.flags.alt} />
                  </div>
                  <div className="content">
                  <Link to={`/Detail/${item.name.common}`} className="title">
                      {item.name.common}
                    </Link>
                    <h4>
                      Population : <span>{item.population}</span>
                    </h4>
                    <h4>
                      Region : <span>{item.region}</span>
                    </h4>
                    <h4>
                      Capital : <span>{item.capital}</span>
                    </h4>
                  </div>
                </div>
              );
            }
            return (
              <div className="card" key={item.name.common}>
              <div className="head_C" style={{height : '50%'}}>
                <img src="https://cdnuploads.aa.com.tr/uploads/Contents/2021/06/10/thumbs_b_c_9505e558c78af50b7a55dcb8d9565704.jpg?v=234436" alt="" />
              </div>
              <div className="content">
              <span className="title">
                  Free Palastain
                </span>
                <h4>
                  Population : <span>0</span>
                </h4>
                <h4>
                  Region : <span>0</span>
                </h4>
                <h4>
                  Capital : <span>0</span>
                </h4>
              </div>
            </div>
            ); 
          })}
      </div>
    </>
  );
};

export default Card_c;
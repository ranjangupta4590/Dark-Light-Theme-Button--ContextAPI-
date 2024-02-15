
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
                setUserData(response.data.results[0]);
                // console.log(response.data.results)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-black flex items-center justify-center">
            {userData && (
                <div className="card flex flex-wrap mx-auto  bg-black dark:bg-gray-200  p-8 rounded-md transition-transform transform hover:scale-105 duration-300">
                    <div className=" card  dark:border-2 dark:border-black dark:shadow-lg dark:shadow-black  w-35 h-35 rounded-full overflow-hidden mx-auto mb-4 transition-transform transform hover:scale-110 duration-300">
                        <img
                            className="w-full h-full object-cover  "
                            src={userData.picture.large}
                            alt="User image"
                        />
                    </div>
                    <div className='my-auto px-10'>
                        <h2 className="text-xl font-semibold text-white dark:text-black mb-2">
                            Name : {userData.name.title} {userData.name.first} {userData.name.last}
                        </h2>
                        <p className="text-gray-600 ">Sex : {userData.gender}</p>
                        <p className="text-gray-600">Mobile : {userData.phone}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;

'use client';
import React from 'react';
import { useState } from 'react';
import getUsers from '../libs/getUsers';
const BlogPage = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const fetchedData = await getUsers();
      setData(fetchedData);
    } catch (error) {
      console.log('Boom', error);
    }
  };
  if (!data) {
    fetchData();
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">BlogPage</h1>
      <div className="my-4">
        {data ? (
          <div>
            {data.map((item) => {
              return <h1 key={item.key}>{item.title}</h1>;
            })}
          </div>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;

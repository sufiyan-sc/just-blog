'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import getPosts from '../libs/getPosts';
const BlogPage = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const fetchedData = await getPosts();
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
              return (
                <Link
                  key={item.id}
                  href={`/blogs/${item.id.toString()}`}
                  className="block"
                >
                  {item.title}
                </Link>
              );
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

'use client';
import React, { useState, useEffect } from 'react';
import getPost from '../../libs/getPost';
const BlogSubPage = ({ params }) => {
  const [data, setData] = useState(null);
  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUser = await getPost(params.id);
        setData(fetchedUser);
      } catch (error) {
        console.log('BOOM', error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div>
      {data && (
        <div className="p-4">
          <h4 className="text-2xl">{`Blog${data.id}`}</h4>
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default BlogSubPage;

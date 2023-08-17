import Image from 'next/image';
import React from 'react';
const getDog = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random', {
    cache: 'no-cache',
  });
  return await response.json();
};

const Dog = async () => {
  const dogData = await getDog();
  console.log(dogData);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl">Dog</h1>
      <Image
        src={dogData.message}
        height={400}
        width={400}
        alt="dog"
        className="rounded-xl my-4"
      />
    </div>
  );
};

export default Dog;

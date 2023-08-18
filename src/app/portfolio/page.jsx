import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import digitalHeroImg from '../../../public/digital-work-3.jpg';
import businessHeroImg from '../../../public/business-work-1.jpg';

const Portfolio = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold">Portfolio</h1>
      <div>
        <Link href="/portfolio/digital">
          <Image
            src={digitalHeroImg}
            alt="thumbnail"
            height={500}
            width={400}
          ></Image>
          <h3>Go Digital</h3>
        </Link>
      </div>
      <div>
        <Link href="/portfolio/business">
          <Image
            src={businessHeroImg}
            alt="thumbnail"
            height={500}
            width={400}
          ></Image>
          <h3>Go Business</h3>
        </Link>
      </div>
    </>
  );
};

export default Portfolio;

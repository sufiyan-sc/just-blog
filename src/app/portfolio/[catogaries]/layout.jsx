import React from 'react';
import Link from 'next/link';
const layout = ({ children }) => {
  return (
    <div>
      <div className="">
        <Link href="/portfolio/digital" className="mr-4">
          Digital
        </Link>
        <Link href="/portfolio/business">Business</Link>
      </div>
      {children}
    </div>
  );
};

export default layout;

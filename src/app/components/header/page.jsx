import Link from 'next/link';
import React from 'react';
import LightDarkMode from '../LightDarkMode/page';

const navItems = [
  {
    id: 1,
    title: 'About',
    url: '/about',
  },
  {
    id: 2,
    title: 'Blogs',
    url: '/blogs',
  },
  {
    id: 3,
    title: 'Users',
    url: '/users',
  },
];

const Header = () => {
  return (
    <div className="container mx-auto flex items-center justify-around">
      <h1 className="text-3xl font-bold">
        <Link href="/">JustBlog</Link>
      </h1>
      <ul className="flex items-center justify-between gap-5">
        <li>
          <LightDarkMode />
        </li>
        {navItems.map((item) => {
          return (
            <Link href={item.url} key="item.id">
              {item.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;

import Image from 'next/image';
import justBlog from '../../public/justBlog-Hero.jpg';
export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center"></div>
      <div className="relative">
        <Image src={justBlog} alt="JustBlog"></Image>
        <h1 className="hero__headline">Just a Begining</h1>
      </div>
    </main>
  );
}

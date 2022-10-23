import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import Code from '../components/code'
// <link rel="icon" href="/favicon.ico" />
import { generateJSXMeshGradient } from "meshgrad";


const Home: NextPage = () => {
  // Number of color stops
const ELEMENTS = 5
  return (
  <>
      <Head>
        <title>unblock.d - coming soon</title>
        <meta name="description" content="unblock.d - coming soon" />
      </Head>
      <div style={generateJSXMeshGradient(ELEMENTS)} className='flex items-center justify-center h-screen w-screen'>
        <div>

        </div>
<a href="https://github.com/Unblockd" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Your product <mark className="px-2 text-black bg-yellow-200 rounded dark:bg-yellow-500">unblock.d</mark></h1>
<p className="text-lg font-normal text-black lg:text-xl dark:text-gray-400">We build cool s**t that ends up in the hands of real people 🚀</p>
</a>
    </div>
      </>
  );
};

export default Home;

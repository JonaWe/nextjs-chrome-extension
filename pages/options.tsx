import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { ColorButton } from '../components/UI/ColorButton';

const presetButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

const Page: NextPage = () => {
  const [color, setColor] = useState('');

  function changeColor(color: string) {
    return () => {
      chrome.storage.sync.set({ color });
      setColor(color);
    };
  }

  useEffect(() => {
    chrome.storage.sync.get('color', ({ color }) => {
      setColor(color);
    });
  }, []);
  return (
    <div>
      <Head>
        <title>Options</title>
      </Head>
      <h1>Change the color</h1>
      {presetButtonColors.map((buttonColor) => (
        <ColorButton
          key={buttonColor}
          color={buttonColor}
          onClick={changeColor(buttonColor)}
          active={buttonColor === color}
        />
      ))}
    </div>
  );
};

export default Page;

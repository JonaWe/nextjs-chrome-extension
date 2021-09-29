import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { ColorButton } from '../components/UI/ColorButton';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 200px;
  width: 200px;
`;

function setPageBackgroundColor() {
  chrome.storage.sync.get('color', ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

async function handleClick() {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    func: setPageBackgroundColor,
  });
}

const Page: NextPage = () => {
  const [color, setColor] = useState('');

  useEffect(() => {
    chrome.storage.sync.get('color', ({ color }) => {
      setColor(color);
    });
  }, []);

  return (
    <Wrapper>
      <ColorButton onClick={handleClick} color={color} />
    </Wrapper>
  );
};

export default Page;

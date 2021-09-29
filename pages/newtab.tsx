import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  opacity: 0;
  animation: fadeIn ease-in 1;
  animation-fill-mode: forwards;
  animation-duration: 0.15s;
  animation-delay: 0.2s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: none;
  background-color: black;
`;

const Page: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>New Tab</title>
      </Head>
      <Img src="images/newtab.jpg" />
    </Wrapper>
  );
};

export default Page;

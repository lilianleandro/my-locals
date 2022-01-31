import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  display: contents;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: 48px;
  margin-bottom: var(--large);
  margin-top: var(--large);
  @media (min-width: 768px) {
    font-size: 64px;
  }
  @media (min-width: 1024px) {
    font-size: var(--large);
  }
  &:hover {
    color: #000;
    transition: color ease 0.6s;
  }
`

export const Body = styled.div`
  p {
    align-items: center;
    text-align: center;
    font-size: 18px;
    line-height: var(--medium);
    padding: 8px;

    margin: var(--small) 0;
    @media (min-width: 768px) {
      font-size: 36px;
    }
    @media (min-width: 1024px) {
      font-size: 32px;
    }
  }
`

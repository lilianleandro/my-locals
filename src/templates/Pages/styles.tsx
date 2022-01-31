import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);

  &:hover {
    color: #000;
    transition: color ease 0.6s;
  }
`

export const Body = styled.div`
  p {
    align-items: center;
    text-align: center;
    font-size: var(--medium);
    line-height: var(--medium);
    padding: 8px;

    margin: var(--small) 0;
  }
`

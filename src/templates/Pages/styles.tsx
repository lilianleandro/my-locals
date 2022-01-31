import styled from 'styled-components'
const universe = 'https://wallpaperaccess.com/full/45399.jpg'

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
  background-image: url(${universe});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  max-width: 100%;
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
  max-width: 80%;
  background-color: rgb(0, 0, 0, 0.7);
  border-radius: 8px;
  p {
    align-items: center;
    text-align: center;
    font-size: var(--medium);
    line-height: var(--medium);
    padding: 8px;
    border-radius: 8px;
    margin: var(--small) 0;
  }
`

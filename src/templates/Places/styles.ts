import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`

export const Container = styled.section`
  max-width: var(--container);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: 48px;
  margin-bottom: var(--medium);
  width: max-content;
  padding: 8px;
  display: contents;
  @media (min-width: 768px) {
    font-size: 64px;
  }
  @media (min-width: 1024px) {
    font-size: var(--large);
    display: flex;
  }

  &:hover {
    text-decoration: underline;
  }
`

export const Body = styled.div`
  padding: 8px;
  border-radius: 8px;
  margin-bottom: var(--large);
  p {
    font-size: 18px;
    margin-bottom: var(--medium);
    @media (min-width: 768px) {
      font-size: 36px;
    }
    @media (min-width: 1024px) {
      font-size: 32px;
    }
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-gap: var(--medium);
  align-items: center;
  justify-items: center;
  img {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`

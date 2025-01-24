import { styled } from 'styled-components';

export const MainContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1270px) {
    flex-direction: column-reverse;
  }
`;

export const IntroductionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1420px) {
    & > p:nth-child(2) {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1270px) {
    width: 90%;
    align-items: center;
    justify-content: center;

    p {
      text-align: center;
    }
  }

  @media (max-width: 450px) {
    p {
      text-align: start;
    }
  }
`;

export const ImgContainer = styled.div`
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: 2260px) {
    width: 30rem;
    height: 30rem;
  }

  @media (max-width: 1550px) {
    width: 25rem;
    height: 25rem;
  }

  @media (max-width: 1420px) {
    width: 20rem;
    height: 20rem;
  }

  @media (max-width: 1270px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 375px) {
    width: 15rem;
    height: 15rem;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// export const Img = styled.img<ContainerProps>`
//   width: 40rem;
//   object-fit: cover;
//   border-radius: 50%;
//   height: auto;
//   aspect-ratio: 1;

//   @media (max-width: 2260px) {
//     width: 30rem;
//   }

//   @media (max-width: 1550px) {
//     width: 25rem;
//   }

//   @media (max-width: 1420px) {
//     /* width: 25rem; */
//   }

//   @media (max-width: 375px) {
//     width: 15rem;
//   }
// `;

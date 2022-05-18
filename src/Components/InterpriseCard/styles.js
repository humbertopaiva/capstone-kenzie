import styled from "styled-components";

export const InterPriseCardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto 0 auto;
  margin-top: ${({ inInfoCard }) => (inInfoCard ? "75px" : 0)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    animation: unset;
  }

  .CardTitle {
    align-self: start;
    padding-left: 12px;

    font-weight: 700;
    font-size: 24px;
    color: var(--orange);
    padding-bottom: 60px;
    /* padding-top temporário */
  }

  .CardVideoContainer {
    display: flex;
    justify-content: center;
    position: relative;
  }

  .CardVideo {
    /* position: relative; */
    width: ${({ inInfoCard }) => (inInfoCard ? "367px" : "342px")};
    height: ${({ inInfoCard }) => (inInfoCard ? "302px" : "411px")};
    object-fit: cover;

    border-radius: 18.76px;
    filter: ${({ inInfoCard }) => (inInfoCard ? "unset" : "blur(0px)")};
  }

  .CardAbout {
    width: 304px;
    max-height: 16ch;

    display: ${({ inInfoCard }) => (inInfoCard ? "none" : "block")};

    border-radius: 6px;

    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;

    position: absolute;
    background: rgba(0, 0, 0, 0.5);

    transition: 0.4s ease;

    font-weight: 600;
    font-size: 18px;
    color: #fff;

    text-align: center;

    bottom: 60px;
  }

  .CardButtons {
    display: flex;
    display: ${({ inInfoCard }) => (inInfoCard ? "none" : "flex")};
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    gap: 28.6px;

    position: absolute;
    bottom: -25px;
  }

  .CardButtons button {
    width: 71px;
    height: 71px;
    border-radius: 50%;
  }

  .ButtonX {
    border: 3px solid var(--orange);
  }

  .ButtonHamb {
    border: none;
  }

  .ButtonHeart {
    border: none;
    border: 3px solid var(--primary);
  }

  .CardButtons button img {
    width: 28.6px;
    height: 24.52px;
  }

  .CardButtons button:nth-child(3) img {
    width: 45px;
    height: 35px;
  }
`;

export const InfoCard = styled.div`
  bottom: 18px;

  display: ${({ inInfoCard }) => (inInfoCard ? "flex" : "none")};
  align-items: flex-start;
  flex-direction: column;
  width: 342px;
  height: 900px;

  position: relative;
  background-color: #fff;

  border-radius: 8px;
  margin: 0 auto 100px auto;

  border: 2px solid var(--gray-4);

  h2,
  h4 {
    font-weight: 700;
    color: var(--orange);
  }

  h2 {
    width: 90%;
    margin: 41px auto 36px auto;

    color: var(--orange);
    font-size: 24px;
  }

  h4 {
    font-size: 16px;
  }

  a,
  p {
    font-weight: 400;
    font-size: 12px;
  }

  p {
    color: #5e5e5e;
  }

  a {
    color: #1dd3b0;
    width: 200px;
  }

  div {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 25px;
    gap: 13px;
  }

  .InfoCardContact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 6px;
  }

  .InfoCardSocial {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }

  .ImgContainer {
    display: flex;
    flex-direction: row;

    gap: 14px;
  }

  .ImgContainer img {
    width: 81px;
    height: 87px;
  }

  .CardButtons2 {
    display: flex;
    display: ${({ inInfoCard }) => (inInfoCard ? "flex" : "none")};
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    gap: 28.6px;

    position: absolute;
    bottom: -40px;
    left: 34px;
  }

  .CardButtons2 button {
    width: 71px;
    height: 71px;
    border-radius: 50%;
  }

  .ButtonX2 {
    border: 3px solid var(--orange);
  }

  .ButtonHamb2 {
    border: none;
  }

  .ButtonHeart2 {
    border: none;
    border: 3px solid var(--primary);
  }

  .CardButtons2 button img {
    width: 28.6px;
    height: 24.52px;
  }

  .CardButtons2 button:nth-child(3) img {
    width: 45px;
    height: 35px;
  }
`;
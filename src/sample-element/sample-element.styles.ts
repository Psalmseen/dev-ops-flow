import { css } from 'lit';

export const sampleEleentStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .title {
    padding: 30px;
    background-color: #324;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    word-spacing: 5px;
    margin-bottom: 50px;
  }
  .name {
    width: max-content;
    display: flex;
    margin: 0 auto;
    gap: 1rem;
  }

  .name input {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 1.3rem;
    border: 1px solid #324;
    outline: none;
  }
  .name button {
    border: none;
    background-color: #324;
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 4px;
    transition: all 0.3s;
    cursor: pointer;
  }
  .name button:hover {
    transform: scale(1.1) translateY(-2px);
  }
  .display {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0 0.5rem;
    padding: 0 2rem;
    margin: 4rem auto;
    text-transform: capitalize;
  }
  .display > * {
    padding: 1rem 0.5rem;
  }
  .nom {
    background-color: #3242;
  }
  .delete {
    background-color: #f99;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 0.5rem;
  }
  .delete:hover {
    background-color: #f55;
  }
`;

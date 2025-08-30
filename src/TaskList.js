import styled from "styled-components";

export const TaskListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #df9999ff;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px #000000;
    font-size: 36px;
    font-weight: bold;
  }
  input {
    background-color: rgba(0, 0, 0, 1);
    border: 2px solid #5d0606ff;
    margin-bottom: 10px;
    outline: none;
    color: #dd1212ff;
  }
  input::placeholder {
    color: #dd1212ff;
  }
  input:focus {
    border: 2px solid #e46e6eff;
    outline: none;
  }

  button {
    border: 2px solid #5d0606ff;
    background-color: transparent;
    color: #df9999ff;
  }
  button:hover {
    background-color: #3e0404ff;
    cursor: pointer;
  }
  ul {
    flex-wrap: wrap;
    width: 400px;
    column-gap: 20px;
    list-style: none;
    margin-top: 10px;
    display: flex;
    align-items: center;

    li {
      width: 120px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        color: #df9999ff;
        font-size: 18px;
        text-shadow: 1px 1px 2px #000000;
      }
      button {
        margin-left: 10px;
        padding: 5px 10px;
        background-color: #ff4d4d;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: #ff1a1a;
        }
      }
    }
  }
`;

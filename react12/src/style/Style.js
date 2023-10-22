import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  border: 1px solid transparent;
  width: 220px;
  font-size: 16px;

  &:hover{
    background-color: #fff;
    color: #000;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
export const Outline = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
&:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;

}
`

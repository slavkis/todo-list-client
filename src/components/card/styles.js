import styled from "styled-components";
import Checkbox from '@mui/material/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CardContainer = styled.div`
  margin: 50px 0;
  background-color: #FFEFFC;
  width: 35vw;
  min-height: 65vh;
  height: auto;
  border: solid 1.7px;
  border-color: #5B2B74;
  border-radius: 5px;
`;

export const List = styled.div`
  margin-top: 5vh;
  margin-left: 0.5vw;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5vw;
  margin: 2vh;
  padding: 1vh;
  margin-right: 3vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 3vw;
  background-color: #E6C8F6;
  border-bottom: solid 1.7px;
  border-color: #5B2B74;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const Title = styled.h3`
  display: flex;
  color: #5B2B74;
`;

export const ExitButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2vw;
  height: 19px;
  width: 19px;
  color: white;
  background-color: #917CC2;
  border: solid 2px;
  border-color: #917CC2;
  border-radius: 3px;
`;

export const StyledTrashIcon = styled(FontAwesomeIcon)`
  color: #917CC2;
  margin-left: auto;
  cursor: pointer;
  &:hover{
    color: #844F8F;
  }
`;

export const StyledExit = styled(FontAwesomeIcon)`

`;

export const SendButton = styled(FontAwesomeIcon)`
  position: absolute;

  margin-left: 50vh;
  color: #917CC2;
  cursor: pointer;
  &:hover{
    color: #844F8F;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4vh;
  gap: 1vw;
`;


export const StyledInput = styled.textarea`
  resize: none;
  margin-left: 2.3vw;
  margin-right: 2vw;
  padding: 5px;
  padding-left: 15px;
  width: 100%;
  height: 2vh;
  background-color: #FFEFFC;
  border: solid 1px;
  border-color: #5B2B74;
  border-radius: 5px;
  &:focus-visible{
    outline: 1.5px solid #917CC2;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  &:hover{
    background-color: rgba(223, 186, 243, 0.2) !important;
  }

  color: #917CC2 !important;
`;

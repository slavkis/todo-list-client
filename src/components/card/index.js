import {
  CardContainer,
  Header,
  Title,
  List,
  ListItem,
  StyledCheckbox,
  ExitButton,
  StyledTrashIcon,
  StyledExit,
  StyledInput,
  InputContainer,
  SendButton,
} from './styles';
import { faTrash, faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { getItems } from '../../api/listItems';
import { useState } from 'react';
import axios from 'axios';

export function Card() {
  const items = getItems();

  const [title, setTitle] = useState('');

  return (
    <CardContainer>
      <Header>
        <Title>
          List Name
        </Title>
        <ExitButton>
          <StyledExit icon={faXmark}/>
        </ExitButton>
      </Header>
      <List>
        <ListItem>
          <StyledCheckbox />
          List Item List Item List Item List Item List Item List Item List Item
          <StyledTrashIcon icon={faTrash} />
        </ListItem>
        <ListItem>
          <StyledCheckbox />
          List Item  List Item List Item
          <StyledTrashIcon icon={faTrash} />
        </ListItem>
        <ListItem>
        <StyledCheckbox />
          List Item
          <StyledTrashIcon icon={faTrash} />
        </ListItem>
        <ListItem>
        <StyledCheckbox />
          List Item
          <StyledTrashIcon icon={faTrash} />
        </ListItem>
        <ListItem>
          <StyledCheckbox />
          List Item
          <StyledTrashIcon icon={faTrash} />
        </ListItem>
        <InputContainer>
          <StyledInput type="text" placeholder='Click to add task'/>
          <SendButton type="reset" icon={faPaperPlane} />
        </InputContainer>
      </List>
    </CardContainer>
  );
}

export default Card;

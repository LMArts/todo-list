import { ButtonRemove } from '../../Buttons/ButtonRemove';
import { Container, ContainerList, ItemList } from './styles';

interface Data {
  id: string,
  item: string
}

type Props = {
  data: Data[];
  remove: (id: string) => void;
}

export function ListTask({...props}: Props) {
  return (
    <Container>
      {
        props.data.map((task, i) =>
          <ContainerList>
            <ItemList key={task.id}>{task.item}</ItemList>
            <ButtonRemove onClick={()=>props.remove(task.id)}/>
          </ContainerList>
        )
      }
    </Container>
  );
}
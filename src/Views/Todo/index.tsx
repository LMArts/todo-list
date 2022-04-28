import { useState } from 'react';
import { ButtonAdd } from '../../Components/Buttons/ButtonAdd';
import { EmptyContent } from '../../Components/Displays/EmptyContent';
import { Input } from '../../Components/Forms/Input';
import { ListTask } from '../../Components/Lists/ListTasks';
import { Container, ContainerInput } from './styles';
import {v4 as uuidv4} from 'uuid';

interface TaskData {
  id: string,
  item: string
}

export function Todo() {

  const [itemTask, setItemTask] = useState('');
  const [listTasks, setListTasks] = useState<TaskData[]>([]);

  function handleAddTask(){
    const newTask = {
      id: uuidv4(),
      item: itemTask
    }
    console.log(newTask);
    setListTasks([...listTasks, newTask]);
  }

  function handleRemoveTask(id: string){
    setListTasks(listTasks.filter((task)=> task.id !== id))
  }

  return (
    <Container>
      <ContainerInput>
        <Input 
          placeholder='Digite'
          onChange={e=>setItemTask(e.currentTarget.value)}
        />
        <ButtonAdd 
          disabled={itemTask === '' ? true : false}
          onClick={()=>handleAddTask()}
        /> 
      </ContainerInput>
      {
        listTasks.length !== 0?
          <ListTask 
            data={listTasks} 
            remove={handleRemoveTask} 
          />
        :
          <EmptyContent text='Nenhum item cadastrado' />
      }
    </Container>
  );
}

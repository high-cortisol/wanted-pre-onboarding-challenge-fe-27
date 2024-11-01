import { ScrollArea } from '../ui/scroll-area';
import TodoItem from './todo-item';

const TodoList = () => {
  return (
    <ScrollArea>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ScrollArea>
  );
};

export default TodoList;

import { AppBar, Container } from '~/src/components/common';
import AddNewTodoForm from '~/src/components/AddNewTodoForm';
import TodoItemList from '~/src/components/TodoItemList';
import DoneItemList from '~/src/components/DoneItemList';

export default function Home() {
  return (
    <main>
      <AppBar />
      <Container className="mb-6">
        <AddNewTodoForm />
        <div className="flex w-full flex-col xl:flex-row xl:gap-6">
          <TodoItemList />
          <DoneItemList />
        </div>
      </Container>
    </main>
  );
}

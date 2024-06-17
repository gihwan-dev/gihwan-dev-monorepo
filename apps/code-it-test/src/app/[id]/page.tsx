import { AppBar, Container } from '~/src/components/common';
import CheckListDetail from '~/src/components/CheckListDetail';
import DetailImageInput from '~/src/components/DetailImageInput';
import DetailMemoInput from '~/src/components/DetailMemoInput';
import DetailActions from '~/src/components/DetailActions';
import { getTodoDetail } from '~/src/apis/todo-api';
import { TodoDetailContextProvider } from '~/src/providers/TodoDetailContextProvider';

export const revalidate = 0;

export default async function TodoDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const todoDetail = await getTodoDetail(Number(params.id));
  console.log(todoDetail);
  return (
    <main>
      <AppBar />
      <Container>
        <TodoDetailContextProvider todoDetail={todoDetail}>
          <CheckListDetail />
          <div className="flex flex-col xl:flex-row xl:gap-6">
            <DetailImageInput />
            <DetailMemoInput />
          </div>
          <DetailActions />
        </TodoDetailContextProvider>
      </Container>
    </main>
  );
}

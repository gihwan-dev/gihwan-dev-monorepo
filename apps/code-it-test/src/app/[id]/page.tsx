import { AppBar, Container } from '~/src/components/common';
import CheckListDetail from '~/src/components/CheckListDetail';
import DetailImageInput from '~/src/components/DetailImageInput';
import DetailMemoInput from '~/src/components/DetailMemoInput';

export default function TodoDetailPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  return (
    <main>
      <AppBar />
      <Container>
        <CheckListDetail id={id} />
        <DetailImageInput id={id} />
        <DetailMemoInput id={id} />
      </Container>
    </main>
  );
}

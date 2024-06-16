import CheckListDetailController from '~/src/components/CheckListDetail/CheckListDetailController';

interface CheckListDetailProps {
  id: number;
}

export default function CheckListDetail({ id }: CheckListDetailProps) {
  return <CheckListDetailController id={id} />;
}

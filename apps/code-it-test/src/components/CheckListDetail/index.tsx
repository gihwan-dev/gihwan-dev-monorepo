import CheckBox from '~/src/app/assets/icon/CheckBox';
import CheckListDetailContainer from '~/src/components/CheckListDetail/CheckListDetailContainer';
import CheckListDetailText from '~/src/components/CheckListDetail/CheckListDetailText';

interface CheckListDetailProps {
  isChecked: boolean;
  onClick: () => void;
  text: string;
}

export default function CheckListDetail({
  text,
  ...rest
}: CheckListDetailProps) {
  return (
    <CheckListDetailContainer isChecked={rest.isChecked}>
      <CheckBox {...rest} />
      <CheckListDetailText isChecked={rest.isChecked} text={text} />
    </CheckListDetailContainer>
  );
}

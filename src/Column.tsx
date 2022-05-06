import { ColumnContainer, ColumnTitle, CardContainer } from './styles';

type ColumnProps = {
  text: string;
};

export function Column({ text }: ColumnProps) {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <CardContainer>First Item</CardContainer>
      <CardContainer>Second Item</CardContainer>
      <CardContainer>Third Item</CardContainer>{' '}
    </ColumnContainer>
  );
}

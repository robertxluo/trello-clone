import { AppContainer, CardContainer, ColumnContainer, ColumnTitle } from './styles';

export function App() {
  return (
    <AppContainer>
      <ColumnContainer>
        <ColumnTitle>Todo:</ColumnTitle>
        <CardContainer>First Item</CardContainer>
        <CardContainer>Second Item</CardContainer>
        <CardContainer>Third Item</CardContainer>
      </ColumnContainer>
    </AppContainer>
  );
}

import { AddNewItem } from './AddNewItem';
import { Column } from './Column';
import { AppContainer } from './styles';

export function App() {
  return (
    <AppContainer>
      <Column text={'Todo:'}></Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={() => console.log('Item created')} />
    </AppContainer>
  );
}

import { useState } from 'react';
import { NewItemForm } from './NewItemForm';
import { AddItemButton } from './styles';

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};

export function AddNewItem({ onAdd, toggleButtonText, dark }: AddNewItemProps) {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton onClick={() => setShowForm(true)} dark={dark}>
      {toggleButtonText}
    </AddItemButton>
  );
}

import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from './Button';
import { WordPair } from '../types';

interface AddWordDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddWord: (word: WordPair) => void;
}

export const AddWordDialog: React.FC<AddWordDialogProps> = ({
  open,
  onOpenChange,
  onAddWord,
}) => {
  const [foreign, setForeign] = useState('');
  const [native, setNative] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (foreign.trim() && native.trim()) {
      onAddWord({ foreign, native });
      setForeign('');
      setNative('');
      onOpenChange(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
          <Dialog.Title className="text-xl font-bold mb-4">Add New Word</Dialog.Title>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="foreign" className="block text-sm font-medium text-gray-700">
                  Foreign Word
                </label>
                <input
                  id="foreign"
                  type="text"
                  value={foreign}
                  onChange={(e) => setForeign(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="native" className="block text-sm font-medium text-gray-700">
                  Native Translation
                </label>
                <input
                  id="native"
                  type="text"
                  value={native}
                  onChange={(e) => setNative(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <Button 
                type="button" 
                onClick={() => onOpenChange(false)}
                className="bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                Cancel
              </Button>
              <Button type="submit">Add Word</Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
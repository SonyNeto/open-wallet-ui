import type { FC } from 'react';
import { Dialog, DialogContent } from './commons/Dialog';
import { Spinner } from './commons/loader/Spinner';
import { useLoader } from '../hooks/useLoader';

export const DialogLoader: FC = () => {
  const isLoading = useLoader((state) => state.isLoading);

  return (
    <Dialog open={isLoading}>
      <DialogContent isClosable={false} className="h-20 w-30 items-center justify-center">
        <Spinner className="size-10 border-4" />
      </DialogContent>
    </Dialog>
  );
};

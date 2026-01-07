import type { FC } from 'react';
import { Page } from '../../components/commons/Page';
import { Graphs } from './components/Graphs';

export const DashboardPage: FC = () => {
  return (
    <Page>
      <main className="flex flex-col p-2">
        <header className="mb-4 flex w-full items-center justify-between">
          <h1 className="text-xl font-medium">Dashboard</h1>
        </header>

        <Graphs />
      </main>
    </Page>
  );
};

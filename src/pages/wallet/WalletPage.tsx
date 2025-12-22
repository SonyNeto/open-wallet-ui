import { type FC } from 'react';
import { Button } from '../../components/commons/Button';
import { Link, useLocation } from 'react-router';
import { ROUTES } from '../../constants/routes';
import { WalletList } from './components/WalletList';
import { Page } from '../../components/commons/Page';

export const WalletPage: FC = () => {
  const { search } = useLocation();

  return (
    <Page>
      <main className="px-8 py-16">
        <h1 className="font-title mb-4 text-2xl font-bold">Wallet</h1>

        <Button asChild className="mb-4">
          <Link to={{ pathname: ROUTES.WALLET.NEW, search }}>New Transaction</Link>
        </Button>

        <WalletList />
      </main>
    </Page>
  );
};

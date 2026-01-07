import { Suspense, type FC } from 'react';

import { CategoryPerPeriod } from './CategoryPerPeriodChart';
import { Card } from '../../../components/commons/Card';

export const Graphs: FC = () => {
  return (
    <div>
      <Card header={<h2>Spending by category</h2>}>
        <Suspense fallback={<div>Loading...</div>}>
          <CategoryPerPeriod />
        </Suspense>
      </Card>
    </div>
  );
};

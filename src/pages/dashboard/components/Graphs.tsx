import { type FC } from 'react';
import { CategoryPerPeriod } from './CategoryPerPeriodChart';
import { Card } from '../../../components/commons/Card';

export const Graphs: FC = () => {
  return (
    <div>
      <Card header={<h2>Spending by category</h2>}>
        <CategoryPerPeriod />
      </Card>
    </div>
  );
};

import { TransactionsService } from '../services/TransactionsService';
import type { QueryOpts } from '../utils/types';

export const entriesKeys = {
  all: () => ['entries'] as const,
  getEntries: (queryOpts?: QueryOpts) => [...entriesKeys.all(), { queryOpts }] as const,
};

export function getEntriesQueryOpts(queryOpts?: QueryOpts) {
  return {
    queryKey: [...entriesKeys.getEntries(queryOpts)],
    queryFn: () => TransactionsService.getEntries(queryOpts),
  };
}

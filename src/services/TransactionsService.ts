import { client } from './client';
import type { QueryOpts } from '../utils/types';
import { getDefinedKeys } from '../utils/functions';

export const TransactionsService = {
  async getEntries(queryOpts?: QueryOpts) {
    const response = await client.get<{
      data: {
        entries: {
          id: string;
          transaction_id: string;
          name: string;
          description?: string | null;
          amount: number;
          period: string;
          user_id: string;
          type: string;
          total_amount: number;
          installment: number;
          total_installments: number;
          created_at: string;
          reference_date: string;
          category_id?: string | null;
          category_name?: string | null;
          category_color?: string | null;
        }[];
      };
      query: {
        page: number;
        per_page: number;
        next_page: boolean;
        total_pages: number;
        total_items: number;
      };
    }>(`/v1/transactions/entries`, {
      params: queryOpts,
    });

    return response.data;
  },
  async deleteTransaction(id: string) {
    await client.delete(`/v1/transactions/${id}`);
  },
  async postTransaction(payload: {
    category_id?: string | null;
    entries: { amount: number; reference_date: string }[];
    name: string;
    note?: string | null;
    type: string;
  }) {
    const response = await client.post<{
      data: {
        transaction: {
          category_id?: string | null;
          created_at: string;
          description?: string | null;
          id: string;
          name: string;
          type: string;
          user_id: string;
        };
      };
    }>('/v1/transactions', payload);

    return response.data;
  },
  async patchTransaction(params: {
    transactionId: string;
    payload: {
      category_id?: string | null;
      name?: string;
      note?: string | null;
      entries?: { amount: number; reference_date: string }[];
    };
  }) {
    const response = await client.patch<{
      data: {
        transaction: {
          category_id?: string | null;
          created_at: string;
          description?: string | null;
          id: string;
          name: string;
          type: string;
          user_id: string;
        };
      };
    }>(`/v1/transactions/${params.transactionId}`, {
      update: getDefinedKeys(params.payload),
      ...params.payload,
    });

    return response.data;
  },
};

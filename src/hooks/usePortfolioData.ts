import data from '@/data/data.json';
import { PortfolioData } from '@/types';

export const usePortfolioData = (): PortfolioData => {
  return data.portfolio as unknown as PortfolioData;
};

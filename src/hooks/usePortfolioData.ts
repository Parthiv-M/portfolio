import data from '@/data/data.json';

export interface PortfolioData {
  name: string;
}

export const usePortfolioData = (): PortfolioData => {
  return data.portfolio;
};

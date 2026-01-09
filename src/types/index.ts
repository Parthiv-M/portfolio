export interface Project {
  name: string;
  description: string;
  techStack?: string[];
  link?: string;
  colSpan: number;
}

export interface Event {
  name: string;
  role: string;
  description: string[];
  isAward: boolean;
  image?: string;
}

export interface WorkExperience {
  logo: string;
  position: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string;
}

export interface PortfolioData {
  name: string;
  projects: Project[];
  events: Event[];
  work: WorkExperience[];
  clubs: WorkExperience[];
  volunteering: WorkExperience[];
}
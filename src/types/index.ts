export type Image = {
  dimensions: { width: number; height: number };
  alt: null;
  copyright: null;
  url: string;
};

export type Year = number | string;

export type FormValues = {
  searchProjects?: string;
  searchCourses?: string;
};

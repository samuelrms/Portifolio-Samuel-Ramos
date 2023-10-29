export const urlReadmeGithub = (repo: string) => ({
  readme: `https://api.github.com/repos/samuelrms/${repo}/readme`,
  repo: `https://api.github.com/repos/samuelrms/${repo}`
});

export const urlGithub =
  'https://api.github.com/users/samuelrms/repos?type=all&sort=updated&direction=desc&page=1&per_page=100';

export const noDataImg =
  'https://images.prismic.io/portifolio-samuel-rms/c274be1f-f388-4e27-9f62-e930e0cfa135_o-que-e-um-hacker-joan-gamell-unsplash.jpg?auto=compress,format';

export const searchRepo = (repo: string) =>
  `https://api.github.com/search/repositories?q=user:samuelrms+${repo}+in:title+is:public&type:all&per_page=100&page=1`;

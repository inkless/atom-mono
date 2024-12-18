export const getApiBase = () => {
  if (process.env.JEST_WORKER_ID !== undefined) {
    return 'http://localhost';
  }

  return '';
};

export const getApiUrl = (url: string) => {
  return `${getApiBase()}${url}`;
};

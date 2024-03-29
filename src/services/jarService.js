const URL = "http://localhost:3001/jars";

export const jarService = {
  fetchJars: () => fetch(URL).then((r) => r.json()),
};

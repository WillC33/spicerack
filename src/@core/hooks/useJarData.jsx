import React, { createContext, useContext, useState, useEffect } from "react";
import { jarService } from "../../services/jarService.js";
const JarDataContext = createContext();

export const useJarData = () => {
  const context = useContext(JarDataContext);
  if (!context) {
    throw new Error("useJarData must be used within a JarDataProvider");
  }
  return context;
};

export const JarDataProvider = ({ children }) => {
  const [jars, setJars] = useState(null);
  const [jarData, setJarData] = useState(null);

  useEffect(() => {
    jarService.fetchJars().then((r) => setJars(r));
  }, []);

  const fetchJarData = (id) => {
    console.log(jars);
    const [selectedJar] = jars?.filter?.((jar) => jar.id === id);
    setJarData(selectedJar);
  };

  return (
    <JarDataContext.Provider value={{ jarData, setJarData, fetchJarData }}>
      {children}
    </JarDataContext.Provider>
  );
};

const jarModel = {
  friendlyName: "Steffy",
  content: "Cumin",
  lastFilled: "2024-03-29",
};

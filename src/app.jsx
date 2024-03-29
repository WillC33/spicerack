import "./app.css";
import { JarDataProvider } from "./@core/hooks/useJarData.jsx";
import DisplayForm from "./product/DisplayForm.jsx";

export function App() {
  return (
    <>
      <JarDataProvider>
        <DisplayForm />
      </JarDataProvider>
    </>
  );
}

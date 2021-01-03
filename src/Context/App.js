import react, { useState, createContext } from "React";

export const ThemeContext = createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <>
      <h1>name</h1>
      <ThemeContext.provider>
        <button onClick={() => setDarkTheme(prevDarkTheme => !prevDarkTheme)} />
      </ThemeContext.provider>
    </>
  );
}

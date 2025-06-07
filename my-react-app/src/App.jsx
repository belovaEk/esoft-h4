import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./Header"
import FiltersPanel from "./FiltersPanel"
import BookList from "./BookList"
import BookPage from "./BookPage"
import SettingsPage from "./SettingsPage"
import BookReader from "./BookReader"

import { useState } from "react"
import { themes } from "./styles/theme"
import { ThemeContext } from "./context/ThemeContext"



function App() {

  const [theme, setTheme] = useState(() => {
  return localStorage.getItem('theme') || 'light';
});

const toggleTheme = () => {
  setTheme(prevTheme => {
    const newTheme = prevTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    return newTheme;
  });
};
  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Router>
      <div style={{
        background: themes[theme].background,
        color: themes[theme].color
      }}>
      <Header/>
      <FiltersPanel/>
      <Routes>
        <Route path="/" element={
              <>
                <BookList />
              </>
            } />

        <Route path="/book" element={<BookPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/reader/:id" element={<BookReader />} />
        <Route path="*" element={<div>Страница не найдена</div>} />
      </Routes>
    </div>
    </Router>
    </ThemeContext.Provider>
  )
}

export default App

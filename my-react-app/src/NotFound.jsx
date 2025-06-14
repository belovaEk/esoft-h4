import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { themes } from "./styles/theme";


export function NotFound(){

    const { theme } = useContext(ThemeContext);
    const currentTheme = themes[theme];


    return(
        <div style={{    position: 'fixed',
    width: '100%',
    height: '100%',
    background: currentTheme.background,
    textAlign: 'center',
    padding: '15%',
    fontSize: '50px'}}>Страница не найдена((</div>
    )
}
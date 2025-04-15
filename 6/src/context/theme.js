import {createContext, useContext, useState} from 'react'

const themeConfig = {
    light: {
        color: 'darkgrey',
        backgroundColor: 'lightgrey'
    },
    dark: {
        color: 'lightgrey',
        backgroundColor: 'darkgrey'
    }
}

const ThemeContext = createContext(themeConfig.light)

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(themeConfig.light)

    const toggle = () => {
        setTheme((prevTheme) => {
            if (prevTheme === themeConfig.light) {
                return themeConfig.dark
            }
            return themeConfig.light
        })
    }

    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}

export default ThemeContextProvider
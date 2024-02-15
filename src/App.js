
import { useEffect, useState } from 'react'
import './App.css'
import Card from './component/Card'
import ToggleBtn from './component/ToggleBtn'
import { ThemeProvider } from './context/theme'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="bg-black flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ToggleBtn/>
              </div>

              <div className="w-full mx-auto">
                  <Card/>
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
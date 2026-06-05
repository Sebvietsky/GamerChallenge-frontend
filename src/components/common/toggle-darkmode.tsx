"use client"

import { Moon } from "lucide-react"
import { sidebarStyles as styles } from "./sidebar/sidebar.styles"

export function ToogleDark() {
  
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark")
  }
  
  return(
    <button onClick={toggleDark} className={styles.bottomAction}>
          <Moon size={20} />
    </button>
  )
}
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      
      <dir className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post author="Thales" description="oi"/>  
          <Post author="Thales" description="oi"/>  
        </main>
      </dir>
    </div>
  )
}



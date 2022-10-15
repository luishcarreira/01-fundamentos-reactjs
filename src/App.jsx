
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Luis Henrique"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum necessitatibus nisi est reiciendis! Modi nemo nostrum quia molestias in. Quasi a libero iste veniam, molestias omnis maxime doloremque reiciendis?"
          />
          <Post
            author="Lucas Matheus"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum necessitatibus nisi est reiciendis! Modi nemo nostrum quia molestias in. Quasi a libero iste veniam, molestias omnis maxime doloremque reiciendis?"
          />
        </main>
      </div>
    </ div>
  )
}
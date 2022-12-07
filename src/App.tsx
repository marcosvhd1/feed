import './Global.css'
import styles from './App.module.css'

import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from './components/Post/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/69948857?v=4",
      name: 'Gabriel Machado',
      role: 'Web Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Esse site é um lixo, bando de filha da puta',
      },
    ],
    publishedAt: new Date('2022-12-06 15:30:00'),
  },
];

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              );
            })
          }
        </main>
      </div>
    </>
  )
}
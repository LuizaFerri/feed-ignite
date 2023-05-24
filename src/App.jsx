import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/45185814?v=4",
      name: "Luiza Ferri",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet",
      },
      { type: "paragraph", content: "Lorem ipsum dolor sit amet" },
      { type: "paragraph", content: "Lorem ipsum dolor sit amet" },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "link", content: "anne.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-09T12:00:00Z"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      name: "Diego Fernandes",
      role: "CTO Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Ut eu sem integer vitae justo eget magna fermentum iaculis. Nisi vitae suscipit tellus mauris a diam. Pellentesque dignissim enim sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Vestibulum",
      },
      {
        type: "paragraph",
        content:
          "morbi blandit cursus risus at ultrices mi tempus. Ut tristique et egestas quis ipsum suspendisse",
      },
      { type: "paragraph", content: "Lorem ipsum dolor sit amet" },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "link", content: "anne.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-08T12:00:00Z"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;

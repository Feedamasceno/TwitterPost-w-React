import React from "react";
import Verified from "./Verified";
import DateTime from "./DateTime";
import Views from "./Views";
import Bookmarks from "./BookmarksSection";
import Comments from "./Comments";
import LikeButton from "./Like.js";
import ChatIcon from "./ChatIcon.js";
import "./styles.css";

export default function App() {
  var post1 = {
    name: "Tim Cook",
    username: "@tim_cook",
    message: "O Cacique é um ótimo funcionário!",
    isValidate: true,
    verification:
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg",
    logo:
      "https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png",
    image:
      "https://s2.glbimg.com/3VI32VvQb7fKfUKivQ4ZXT4kHNI=/620x620/e.glbimg.com/og/ed/f/original/2022/05/17/tim_cook_apple.jpg"
  };

  return (
    <main>
      <section className="App">
        <TwitterPost post={post1} />
      </section>
    </main>
  );
}

function TwitterPost({ post }) {
  return (
    <article className="TwitterPost">
      <header className="HeaderName">
        <aside className="LeftSide">
          <img class="Ceo" src={post.image} alt="Diretor executivo da Apple" />
          <h1> {post.name} </h1>
          <section class="Verified">
            <Verified post={post} />
          </section>
          <p> {post.username} </p>
        </aside>
        <aside className="RightSide">
          <img class="BlueBird" src={post.logo} alt="Logo do Twitter" />
        </aside>
      </header>
      <section className="Content">
        <p> {post.message} </p>
      </section>
      <section className="ContentData">
        <DateTime />
        <Views />
      </section>
      <section className="Bookmarks">
        <p>
          {" "}
          <Bookmarks />
        </p>
      </section>
      <footer>
        <section className="LastContent">
          <LikeButton />
          <ChatIcon />
          <Comments />
        </section>
      </footer>
    </article>
  );
}

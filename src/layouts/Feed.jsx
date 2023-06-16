import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  serverTimestamp,
  orderBy,
  query,
  addDoc,
} from "firebase/firestore/lite";
import InputOption from "../components/InputOption";
import Post from "../components/Post";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";
//Icons
import {
  CalendarViewDay,
  Create as CreateIcon,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
//styles
import "./feed.css";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    const _posts = collection(db, "posts");
    getDocs(query(_posts, orderBy("timestamp", "desc"))).then(
      (_postsSnapshot) =>
        setPosts(
          _postsSnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
    );
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db,"posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      });
      setInput("");
      console.log("Post agregado correctamente");
    } catch (error) {
      console.error("Error al agregar el post:", error);
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="feed">
      <div className="feed-input-container">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input value={input} onChange={onChange} type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed-input-options">
          <InputOption title="Photo" Icon={Image} color="#7085F9" />
          <InputOption title="Video" Icon={Subscriptions} color="#e7a33e" />
          <InputOption title="Event" Icon={EventNote} color="#c0cbcd" />
          <InputOption
            title="Write Article"
            Icon={CalendarViewDay}
            color="#7fc15e"
          />
        </div>
      </div>
      {/* Post */}
      <FlipMove >
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;

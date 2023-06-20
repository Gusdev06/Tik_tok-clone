import React, { useEffect, useState } from "react";
import "./App.scss";
import Video from "./pages/video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos"); // firebase entra no banco de dados e entra na coleção videos
    const videosSnapshot = await getDocs(videosCollection); //aqui era pegar os documentos dentro da collection
    const videosList = videosSnapshot.docs.map((doc) => doc.data()); //irei estar mapeando um por um e para cada um do video eu vou qurer a informação dele
    setVideos(videosList);
  }

  useEffect(
    () => {
      getVideos();
    },
    [] /*sem esses colchetes essa função ira entrar em um loop*/
  );

  return (
    <div className="App">
      <div className="App__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

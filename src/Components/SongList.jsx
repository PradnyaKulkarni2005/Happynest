import React from "react";
import { useParams } from "react-router-dom";
import sleepyenglishSongs from "../data/Songs/englishsleepysongs.json";
import sleepyhindiSongs from "../data/Songs/hindisleepingsongs.json";
import sleepymarathiSongs from "../data/Songs/marathisleepingsongs.json";
import excitedenglishSongs from "../data/Songs/englishexcitedsongs.json";
import excitedhindiSongs from "../data/Songs/hindiexcitedsongs.json";
import excitedmarathiSongs from "../data/Songs/marathiexcitedsongs.json";
import englishstories from "../data/Stories/englishstories.json"
import marathistories from "../data/Stories/marathistories.json"
import hindistories from "../data/Stories/hindistories.json"
import './songslist.css';



export default function SongList() {
  const { language } = useParams();

  let songsData = [];
  if (language === "sleepyenglish") {
    songsData = sleepyenglishSongs;
  } else if (language === "sleepyhindi") {
    songsData = sleepyhindiSongs;
  } else if (language === "sleepymarathi") {
    songsData = sleepymarathiSongs;
  }
  else if (language === "excitedenglish") {
    songsData = excitedenglishSongs;
  } else if (language === "excitedhindi") {
    songsData = excitedhindiSongs;
  } else if (language === "excitedmarathi") {
    songsData = excitedmarathiSongs;
  }
  else if (language === "english") {
    songsData = englishstories;
  } else if (language === "hindi") {
    songsData = hindistories;
  } else if (language === "marathi") {
    songsData = marathistories;
  }
  

  

  return (
    <div className="songscontainer">
      
      <div >
        {songsData.map((song, index) => (
          <div key={index} className="songscard">
           
            <iframe 
              width="600"
              height="350"
              src={song.url}
              title={song.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>

          </div>
        ))}
      </div>
    </div>
  );
}

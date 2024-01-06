const fs = require("fs");

// load in the spotify2023.json file
const spotify = require("./spotify2023.json");

// add a new field called songAttributes to every object in the array

oneSong = spotify[0];

function editSong(song) {
  //
  song.artists = song.artist_name;
  delete song.artist_name;
  song.artists = [song.artists];

  song.song_attributes = {
    danceability: song.danceability,
    energy: song.energy,
    mode: song.mode,
    speechiness: song.speechiness,
    acousticness: song.acousticness,
  };
  delete song.danceability;
  delete song.energy;
  delete song.mode;
  delete song.speechiness;
  delete song.acousticness;
  delete song.artist_id;
  delete song.track_id;
  return song;
}

for (let i = 0; i < spotify.length; i++) {
  spotify[i] = editSong(spotify[i]);
}

const writeJsonToFile = (path, data) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2), "utf8");
    console.log("Data successfully saved to disk");
  } catch (error) {
    console.log("An error has occurred ", error);
  }
};

writeJsonToFile("spotify.json", spotify);

console.log(spotify[3]);

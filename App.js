import logo from "./logo.svg";
import "./App.css";
import React from "react";

const image =
  "https://i.pinimg.com/originals/f4/ed/18/f4ed18e4f8c07a1688153de9daa5bd6c.jpg";
const name = "jerrys";
const batch = "B45WDs";

function App() {
  const data = [
    {
      image:
        "https://i.pinimg.com/originals/f4/ed/18/f4ed18e4f8c07a1688153de9daa5bd6c.jpg",
      name: "jerry",
      batch: "B45WD",
    },
    {
      image:
        "https://w.forfun.com/fetch/50/5081f28733ce69397d496a2dfdcedc2d.jpeg",
      name: "kung fu panda",
      batch: "B45WD",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2018/12/03/21/22/cartoon-3854292_1280.png",
      name: "chota bheem",
      batch: "B45WD",
    },
  ];

  return (
    <div className="App">
      {/*
      <Profile
        image={data[0].image}
        name={data[0].name}
        batch={data[0].batch}
      />
      <Profile
        image={data[1].image}
        name={data[1].name}
        batch={data[1].batch}
      />
      <Profile
        image={data[2].image}
        name={data[2].name}
        batch={data[2].batch}
  /> */}
      {data.map((profile, index) => (
        <Profile
          key={index}
          image={profile.image}
          name={profile.name}
          batch={profile.batch}
        />
      ))}
    </div>
  );
}

export default App;

function Profile({ image, name, batch }) {
  /*    const profile_obj = {
      img: "https://i.pinimg.com/originals/f4/ed/18/f4ed18e4f8c07a1688153de9daa5bd6c.jpg",
      name: "jerry",
      class: "B45WD",
    };*/
  return (
    <div className="profile">
      <img src={image} />
      <h2>{name}</h2>
      <p>{batch}</p>
    </div>
  );
}

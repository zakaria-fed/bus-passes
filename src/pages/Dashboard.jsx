import { useState } from "react";
import Navbar from "./components/Navbar";
import Pass from "./components/Pass";

const DashboardPage = ({ auth, handleAuth, authUser }) => {
  const [passesBooked, handlePassesBooked] = useState([{}]);

  const passes = [
    {
      id: "5asdAS65",
      departure: "SLJ",
      arrival: "Rabat",
      start: "08h00",
      end: "08h31",
      sign: "21",
    },
    {
      id: "sad6A566",
      departure: "Karia",
      arrival: "SLJ",
      start: "08h30",
      end: "08h42",
      sign: "10",
    },
    {
      id: "AS5ASDds",
      departure: "Bettana",
      arrival: "Rabat",
      start: "08h00",
      end: "08h31",
      sign: "10",
    },
  ];

  if (auth) {
    return (
      <>
        <Navbar userName={authUser[0].name} handleAuth={handleAuth} />

        <div className="container m-auto my-5 d-flex gap-3 justify-content-center">
          {passes.map((pass) => (
            <Pass
              key={pass.id}
              data={pass}
              passesBooked={passesBooked}
              handlePassesBooked={handlePassesBooked}
              auth={authUser[0]}
            />
          ))}
        </div>
      </>
    );
  } else {
    return "Not authentified Authentified";
  }
};

export default DashboardPage;

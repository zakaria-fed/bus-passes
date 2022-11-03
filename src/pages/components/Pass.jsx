import { useState } from "react";

const Pass = ({ data, passesBooked, handlePassesBooked, auth }) => {
  //   let userPasses = passesBooked.filter(
  //     (userPass) => userPass.userId === auth.id
  //   )[0];

  /*
        userPasses: 
        [
            {
                userId: x,
                passData: {}
            }, 
            {
                ...
            }
        ]

        --> it contains a whole of passes for a user
    
    */

  const [alreadyBooked, setAlreadyBooked] = useState(false);

  const handleBooking = () => {
    setAlreadyBooked(true);
    const authId = auth.id;
    
    // passesBooked.filter((pass) => pass.data?.id === data.id).length > 0
    if (alreadyBooked) {
        return;
    } else {
        handlePassesBooked([...passesBooked, { authId, data }]);
        return;
    }
    };

  return (
    <div className="p-3 card col">
      <span className="text-secondary">{data.id}</span>
      <h6>{data.departure}</h6>
      <h6>{data.arrival}</h6>
      <h4>
        {data.start} {`-->`} {data.end}
      </h4>
      <span className="btn btn-outline-primary w-25">Sign {data.sign}</span>

      <button
        disabled={alreadyBooked}
        onClick={handleBooking}
        className="my-3 btn btn-primary"
      >
        Book{alreadyBooked && "ed"}
      </button>
    </div>
  );
};

export default Pass;

import React, { useState } from "react";
import moment from "moment";

// Steemit API
import steem from "steem";

// Components
import TextInput from "./components/TextInput";

const App = () => {
  const [username, setUsername] = useState("");
  const [history, setHistory] = useState([]);

  const onSubmitHandle = (e) => {
    e.preventDefault();
    steem.api.getAccountHistory(username, 1000, 1000, function (err, result) {
      setHistory(result);
    });

    setUsername("");
  };

  return (
    <div>
      <div className="d-flex justify-content-center mb-5">
        <form onSubmit={(e) => onSubmitHandle(e)}>
          <TextInput
            labelName={"Username"}
            placeholder={"Plase write username..."}
            required={true}
            value={username}
            name={"username"}
            type={"text"}
            setUsername={setUsername}
          />
        </form>
      </div>

      <div className="d-flex flex-wrap">
        {history &&
          history.map((his) => (
            <div key={his[0]} className="card w-25 m-2">
              <div className="card-header">Account History</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Memo Key -{" "}
                  {his[1].op[1].memo_key
                    ? his[1].op[1].memo_key
                    : "----------------"}
                </li>
                <li className="list-group-item">
                  Date:{" "}
                  {moment(his[1].timestamp).format("DD-MM-YYYY - hh:mm:ss")}
                </li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;

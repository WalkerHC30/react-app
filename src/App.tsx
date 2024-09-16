import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

let count = 0;
function App() {
  const [alertVisible, setVisiblity] = useState(false);
  count++;

  console.log(count);

  const array = ["jjj", "qqq"];
  const newArr = array.map((item) => (item === "jjj" ? "JoJo" : item));
  console.log(newArr);

  // useEffect(() => {
  //   console.log(count);
  // }, []);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setVisiblity(false)}>
          <span>My Alert</span>
        </Alert>
      )}
      <Button color="secondary" onClick={() => setVisiblity(true)}>
        BUTTON
      </Button>
    </div>
  );
}

export default App;

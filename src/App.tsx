import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [alertVisible, setVisiblity] = useState(false);
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

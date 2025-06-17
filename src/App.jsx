import { useState } from "react";
import Confetti from "react-confetti";
import { SpinWheel } from "react-spin-wheel";
import "react-spin-wheel/dist/index.css";
import Button from "./Button/Button";

// Main App component
function App() {
  // State to control celebration/confetti
  const [isCelebrate, setIsCelebrate] = useState(false);

  // Toggle celebration state
  const handleCelebrate = () => {
    setIsCelebrate((prev) => !prev);
  };

  return (
    // Center content vertically and horizontally with Tailwind CSS
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <div>
        {/* SpinWheel component with country items */}
        <SpinWheel
          items={[
            "United States",
            "Brazil",
            "India",
            "China",
            "Russia",
            "Australia",
            "Japan",
            "Canada",
            "France",
            "Germany",
          ]}
          // When spinning finishes, toggle celebration and show alert
          onFinishSpin={(item) => {
            handleCelebrate();
            alert(`You love ${item}`);
          }}
        />
      </div>
      <div>
        {/* Button to manually toggle celebration */}
        <Button
          onClick={handleCelebrate}
          className={`${
            !isCelebrate
              ? "bg-blue-500 hover:bg-blue-700"
              : "bg-red-500 hover:bg-red-700"
          } text-white font-bold py-2 px-4 rounded-full`}
        >
          {isCelebrate ? "Stop Celebrating" : "Celebrate"}
        </Button>
        {/* Show confetti when isCelebrate is true */}
        <p>{isCelebrate && <Confetti numberOfPieces={1000} />}</p>
      </div>
    </div>
  );
}

export default App;

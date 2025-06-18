import { useState } from "react";
import Confetti from "react-confetti";
import { SpinWheel } from "react-spin-wheel";
import "react-spin-wheel/dist/index.css";
import Button from "./Button/Button";

// Main App component
function App() {
  // State to control celebration/confetti animation
  const [isCelebrate, setIsCelebrate] = useState(false);

  // Toggles the celebration state (confetti on/off)
  const handleCelebrate = () => {
    setIsCelebrate((prev) => !prev);
  };

  return (
    // Center all content vertically and horizontally using Tailwind CSS
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <div className="text-center">
        <h1 className="text-4xl text-red-600 font-bold mb-4">Spin To Win!</h1>
      </div>
      <div>
        {/* SpinWheel component with prize items */}
        <SpinWheel
          items={[
            "PlayStation 5",
            "iPad Pro",
            "Galaxy S23",
            "Gift Card",
            "Smart Watch",
            "Headphones",
            "XBOX",
            "LCD TV",
            "MacBook Pro",
            "iPhone 16 Pro",
          ]}
          // When spinning finishes, trigger celebration and show alert
          onFinishSpin={(item) => {
            handleCelebrate();
            alert(`You Win ${item} 🎉`);
          }}
        />
      </div>
      <div>
        {/* Button to manually toggle confetti celebration */}
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
        {/* Show confetti animation when isCelebrate is true */}
        <p>{isCelebrate && <Confetti numberOfPieces={1000} />}</p>
      </div>
    </div>
  );
}

export default App;

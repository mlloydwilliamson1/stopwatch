import { useState } from "react";
import { formatTime } from "./helpers/timeHelpers";
import Button from "./components/Button";

function App() {
  // Start button
  // Stop button
  // Lap button
  // Timer
  // Record laps somehow, somewhere

  const [time, setTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer>();

  const startTimer = () => {
    const newTimerInterval = setInterval(() => {
      setTime((currentTime: number) => currentTime + 1);
    }, 10);
    setTimerInterval(newTimerInterval);
  };

  const stopTimer = () => {
    clearInterval(timerInterval);
    setTimerInterval(undefined);
  };

  const resetTimer = () => {
    if (timerInterval) {
      stopTimer();
      setTime(0);
      startTimer();
    } else {
      setTime(0);
    }
  };

  return (
    <div>
      <div>Time</div>
      <div>{formatTime(time)}</div>
      <Button label="Start" onClick={startTimer} />
      <Button label="Stop" onClick={stopTimer} />
      <Button label="Reset" onClick={resetTimer} />
      <Button label="Lap" onClick={() => {}} />
    </div>
  );
}

export default App;

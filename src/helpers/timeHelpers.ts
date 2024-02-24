export function formatTime(milliseconds: number) {
  const hours = Math.floor(milliseconds / (100 * 60 * 60));
  const minutes = Math.floor((milliseconds % (100 * 60 * 60)) / (100 * 60));
  const seconds = Math.floor((milliseconds % (100 * 60)) / 100);
  const remainingMilliseconds = milliseconds % 100;

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${remainingMilliseconds.toString().padStart(2, "0")}`;
}

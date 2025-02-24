export const truncate = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export const formatTime = (seconds) => {
  if (seconds < 60) return `${seconds}s`;

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  let result = "";
  if (hours > 0) result += `${hours}H `;
  if (minutes > 0) result += `${minutes}m `;
  if (secs > 0) result += `${secs}s`;

  return result.trim(); // Remove any trailing spaces
};

export const formatNumber = (number) => {
  const formattedNumber = new Intl.NumberFormat("en-US").format(number);
  return `$${formattedNumber}`;
};


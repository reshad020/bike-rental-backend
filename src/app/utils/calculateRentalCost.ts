export function calculateRentalCost(
  startTime: Date,
  pricePerHour: number
): number {
  // Convert start and return time to Date objects
  const start: Date = new Date(startTime);
  const end: Date = new Date();

  // Calculate the difference in milliseconds
  const durationInMilliseconds: number = end.getTime() - start.getTime();

  // Convert milliseconds to hours
  const durationInHours: number = durationInMilliseconds / (1000 * 60 * 60);

  // Calculate the total cost
  const totalCost: number = durationInHours * pricePerHour;

  return totalCost;
}

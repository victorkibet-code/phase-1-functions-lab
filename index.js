
// index.js

// Function to calculate distance from the headquarters in blocks
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42);
  }
  
  // Function to calculate distance from the headquarters in feet
  function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    return blocks * 264; // 1 block = 264 feet
  }
  
  // Function to calculate distance travelled in feet
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  // Function to calculate fare price
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free sample for short distances
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }
 
  
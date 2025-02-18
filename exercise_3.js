// DO NOT COMMIT ANY CREDENTIALS!!!

// Using pseudocode, explain in plain English how you would use the Google Maps API to receive directions from Altria HQ to the nearest gas station. Assume you know the address of Altria HQ, but not the address of the nearest gas station
// 1. Initialize the Google Maps API with API key

// 2. Define the starting location (Altria HQ)
//Set STARTING_LOCATION = "Altria HQ Address"

// 3. Search for nearby gas stations
//Use Google Places API to search for "gas stations" near STARTING_LOCATION
//Limit search radius to reasonable distance (e.g., 5 miles)
//Sort results by distance (closest first)

// 4. Select the nearest gas station from results
//Set NEAREST_GAS_STATION = first result from Places API response

// 5. Request directions between the two points
//Use Google Directions API to get route from STARTING_LOCATION to NEAREST_GAS_STATION
//Specify transportation mode (e.g., "driving")

// 6. Process and display the directions
//Receive response containing route information
//Extract step-by-step directions from the response
//Format and display directions to user

// Challenge - Extreme: Write a function in Javascript that executes this process, taking the API key as an argument. DO NOT COMMIT THE API KEY.

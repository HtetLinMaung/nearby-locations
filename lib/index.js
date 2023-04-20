"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nearbyLocations = void 0;
/**
 * Calculate distance between two coordinates in kilometers using the Haversine formula.
 * @param coord1 First coordinate
 * @param coord2 Second coordinate
 * @returns Distance in kilometers
 */
function haversineDistance(coord1, coord2) {
    const R = 6371; // Radius of Earth in kilometers
    const latDiff = deg2rad(coord2.latitude - coord1.latitude);
    const lonDiff = deg2rad(coord2.longitude - coord1.longitude);
    const a = Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
        Math.cos(deg2rad(coord1.latitude)) *
            Math.cos(deg2rad(coord2.latitude)) *
            Math.sin(lonDiff / 2) *
            Math.sin(lonDiff / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
/**
 * Convert degrees to radians
 * @param degrees Degrees to be converted
 * @returns Radians
 */
function deg2rad(degrees) {
    return (degrees * Math.PI) / 180;
}
/**
 * Calculate nearby locations within a specified distance.
 * @param centralLocation Central location to calculate nearby locations
 * @param locations Array of locations to evaluate
 * @param maxDistance Maximum distance from the central location in kilometers
 * @returns Array of nearby locations within the specified distance
 */
function nearbyLocations(centralLocation, locations, maxDistance) {
    return locations.filter((location) => haversineDistance(centralLocation, location) <= maxDistance);
}
exports.nearbyLocations = nearbyLocations;
// Example usage:
// const centralLocation: Coordinate = {
//   latitude: 37.7749,
//   longitude: -122.4194,
// };
// const locations: Coordinate[] = [
//   { latitude: 37.8049, longitude: -122.4484 }, // 4.1 km away
//   { latitude: 37.7619, longitude: -122.3884 }, // 3.8 km away
//   { latitude: 37.7299, longitude: -122.3694 }, // 5.8 km away
// ];
// const maxDistance = 5; // 5 km radius
// console.log(nearbyLocations(centralLocation, locations, maxDistance));

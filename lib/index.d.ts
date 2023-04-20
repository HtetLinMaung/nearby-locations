type Coordinate = {
    latitude: number;
    longitude: number;
};
/**
 * Calculate nearby locations within a specified distance.
 * @param centralLocation Central location to calculate nearby locations
 * @param locations Array of locations to evaluate
 * @param maxDistance Maximum distance from the central location in kilometers
 * @returns Array of nearby locations within the specified distance
 */
export declare function nearbyLocations(centralLocation: Coordinate, locations: Coordinate[], maxDistance: number): Coordinate[];
export {};

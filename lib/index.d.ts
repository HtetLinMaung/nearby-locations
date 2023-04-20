export type Coordinate = {
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
export type DbType = "mongoose" | "sequelize";
export interface NearbyConditionOptions {
    latitude: number;
    longitude: number;
    maxDistance: number;
    latitudeColumnName?: string;
    longitudeColumnName?: string;
}
export declare function getNearbyCondition(options: NearbyConditionOptions, dbType: DbType): object | string;

import SwiftAlert from "./src/SwiftAlert";
import SwiftAlerts from "./src/SwiftAlerts";

/**
 * Create new Swift Alert or return existing alert for ID provided..
 */
export function swiftAlert<Meta extends Record<string, any>>(id: string = "default") {
    // Return SwiftAlert Instance.
    return new SwiftAlert<Meta>(id);
}


/**
 * Plural version of swiftAlert() for handling multiple Alerts.
 */
export function swiftAlerts<IDS extends string[]>(...ids: IDS) {
    return new SwiftAlerts<IDS>(ids);
}

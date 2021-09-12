import SwiftAlert from "./src/SwiftAlert";
import SwiftAlerts from "./src/SwiftAlerts";

/**
 * Concept: Basically an alert
 */
const SWIFT_ALERTS: Record<string, SwiftAlert<any>> = {};

export function getAllSwiftAlerts() { return SWIFT_ALERTS; }

/**
 * Create new Swift Alert or return existing alert for ID provided..
 */
export function swiftAlert<Meta extends Record<string, any>>(id: string = "default") {
    // Return alert if exists already.
    if (SWIFT_ALERTS[id]) return SWIFT_ALERTS[id] as SwiftAlert<Meta>;

    // Initialize new alert and save to alerts memory variable.
    SWIFT_ALERTS[id] = new SwiftAlert<Meta>(id);

    // Return SwiftAlert Instance.
    return SWIFT_ALERTS[id] as SwiftAlert<Meta>;
}


/**
 * Plural version of swiftAlert() for handling multiple Alerts.
 */
export function swiftAlerts<IDS extends string[]>(...ids: IDS) {
    return new SwiftAlerts<IDS>(ids);
}

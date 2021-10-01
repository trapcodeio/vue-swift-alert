import SwiftAlert from "./src/SwiftAlert";
import SwiftAlerts from "./src/SwiftAlerts";

declare global {
    interface Window {
        // add you custom properties and methods
        SWIFT_ALERTS: Record<string, SwiftAlert<any>>
    }
}

/**
 * Concept: Basically an alert
 */
window.SWIFT_ALERTS = {};

/**
 * Create new Swift Alert or return existing alert for ID provided..
 */
export function swiftAlert<Meta extends Record<string, any>>(id: string = "default") {
    // Return alert if exists already.
    if (window.SWIFT_ALERTS[id]) return window.SWIFT_ALERTS[id] as SwiftAlert<Meta>;

    // Initialize new alert and save to alerts memory variable.
    window.SWIFT_ALERTS[id] = new SwiftAlert<Meta>(id);

    // Return SwiftAlert Instance.
    return window.SWIFT_ALERTS[id] as SwiftAlert<Meta>;
}



/**
 * Plural version of swiftAlert() for handling multiple Alerts.
 */
export function swiftAlerts<IDS extends string[]>(...ids: IDS) {
    return new SwiftAlerts<IDS>(ids);
}


/**
 * forget Swift Alert
 * @param id
 */
export function forgetSwiftAlert(id: string) {
    delete window.SWIFT_ALERTS[id]
    return true;
}
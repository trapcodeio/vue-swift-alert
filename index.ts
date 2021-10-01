import SwiftAlert from "./src/SwiftAlert";
import SwiftAlerts from "./src/SwiftAlerts";

// Const that holds all alerts
// @ts-ignore
export const SWIFT_ALERTS: Record<string, SwiftAlert> = window.SWIFT_ALERTS = {}

/**
 * Create new Swift Alert or return existing alert for ID provided..
 */
export function swiftAlert<Meta extends Record<string, any>>(id: string = "default") {
    if (SWIFT_ALERTS.hasOwnProperty(id)) return SWIFT_ALERTS[id];

    // Return SwiftAlert Instance.
    const alert = new SwiftAlert<Meta>(id);

    // Store.
    SWIFT_ALERTS[id] = alert;

    // Record alert
    return alert;
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
    delete SWIFT_ALERTS[id]

    return true;
}
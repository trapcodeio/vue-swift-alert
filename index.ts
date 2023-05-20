import { inject, reactive } from "vue";
import SwiftAlert from "./src/SwiftAlert";
import SwiftAlerts from "./src/SwiftAlerts";

export type SWIFT_ALERTS<Meta = any> = Record<string, SwiftAlert<Meta>>;

export function injectSwiftAlerts<Meta>(): SWIFT_ALERTS<Meta> {
  const SWIFT_ALERTS = inject<SWIFT_ALERTS | undefined>(
    "SWIFT_ALERTS",
    undefined
  );

  if (!SWIFT_ALERTS) {
    throw new Error(
      "SwiftAlerts not found. Did you forget to install the plugin?"
    );
  }

  return SWIFT_ALERTS;
}

/**
 * Create new Swift Alert or return existing alert for ID provided..
 */
export function swiftAlert<Meta extends Record<string, any>>(
  id: string = "default"
) {
  const SWIFT_ALERTS = injectSwiftAlerts<Meta>();

  // Return alert if exists already.
  if (SWIFT_ALERTS[id]) return SWIFT_ALERTS[id];

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

/**
 * forget Swift Alert
 * @param id
 */
export function forgetSwiftAlert(id: string) {
  delete injectSwiftAlerts()[id];
  return true;
}

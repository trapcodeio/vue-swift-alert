import { Plugin, reactive } from "vue";
import SwiftAlert from "./src/SwiftAlert";
// @ts-ignore
import SwiftAlertComponent from "./src/swift-alert.vue";
import { SWIFT_ALERTS } from ".";

// Export plugin
export default <Plugin>{
  install(app) {
    // Create a reactive array to store the alerts
    const SWIFT_ALERTS = reactive<SWIFT_ALERTS>({});

    // Provide the array to the app
    app.provide("SWIFT_ALERTS", SWIFT_ALERTS);

    // Load the component
    app.component("SwiftAlert", SwiftAlertComponent);
  },
};

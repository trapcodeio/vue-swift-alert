import { Plugin, reactive } from "vue";
import SwiftAlertComponent from "./src/swift-alert.vue";
import SwiftAlert from "./src/SwiftAlert";

// Export plugin
export default <Plugin>{
  install(app) {
    // Create a reactive array to store the alerts
    const SWIFT_ALERTS = reactive<Record<string, SwiftAlert<any>>>({});

    // Provide the array to the app
    app.provide("SWIFT_ALERTS", SWIFT_ALERTS);

    // Load the component
    app.component("SwiftAlert", SwiftAlertComponent);
  },
};

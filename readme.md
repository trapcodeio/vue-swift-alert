# vue-swift-alert

Stage: Personal.

## Single Alerts

```vue

<script lang="ts" setup>
import {swiftAlert} from "vue-swift-alert";
import SwiftAlert from "vue-swift-alert/src/swift-alert.vue";

const loginMsg = swiftAlert('loginMsg');

loginMsg.show() // Show alert content
loginMsg.hide() // Hide alert content
loginMsg.toggle() // Toggle alert content

loginMsg.message('Your Login was successful.'); // Set message
loginMsg.message(); // get message

loginMsg.meta // Reactive alert meta data {message: string}
loginMsg.meta.message = 'Your Login was successful.'; // Set message
loginMsg.meta.message // Get message

// Meta also serves as a reactive store for any data relating to this alert.
loginMsg.meta.some_other_key = "Some other value";
</script>

<template>
  <SwiftAlert id="loginMsg">
    <span class="success">{{loginMsg.meta.message}}</span>
    <!-- OR -->
    <span class="success">{{loginMsg.message()}}</span>
  </SwiftAlert>
</template>
```

## Multiple Alerts
```vue

<script lang="ts" setup>
import {swiftAlerts} from "vue-swift-alert";

// Control Multiple Alerts
const alerts = swiftAlerts("loginSuccess", "loginError");

alerts.show('loginError')
alerts.hide('loginSuccess')
alerts.toggle('loginError')
alerts.hideAll();
alerts.showAll();

// Destruct Single Swift Alert instances.
const {loginError, loginSuccess} = swiftAlerts("loginSuccess", "loginError").toObject();

loginError.show()
loginSuccess.hide()

// Destruct Single Swift Alert instances.
const [error, success] = swiftAlerts("loginSuccess", "loginError").toArray();

error.show()
success.hide()

alerts.show('loginError')
</script>
```
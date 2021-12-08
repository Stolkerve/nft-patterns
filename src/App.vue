<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer"></v-navigation-drawer>
    <v-app-bar app>
      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import getConfig from "./config"
import {Vue, Component} from "vue-property-decorator"

const nearConfig = getConfig(process.env.NODE_ENV || "development")
console.log(
  `networkId:${nearConfig.networkId} CONTRACT_NAME:${nearConfig.contractName}`
)
window.networkId = nearConfig.networkId

@Component
class App extends Vue {
  created() {
    document.title = template;
  }

  drawer = null;
  isSignedIn() {
    return window.walletConnection.isSignedIn()
  }
}

export default App;
</script>


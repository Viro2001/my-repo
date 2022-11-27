import { createApp } from "vue";
import App from "./App.vue";
import { defineComponent } from 'vue';
import { MyButton } from "@my-repo/my-button"
import { productCard } from "@my-repo/my-card"

export default defineComponent({
    components: { MyButton, productCard },
});

import "./assets/main.css";

createApp(App).mount("#app");

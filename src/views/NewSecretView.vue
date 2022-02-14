<script setup lang="ts">
import { ref } from "vue";
import { SecretApi } from "@/services/api";
import type { SecretPostDTO, SecretResponseDTO } from "@/interfaces/secret";

let newSecret = ref({
  secret: "",
  expireAfterViews: 10,
  expireAfter: 0,
});

let createdSecret = ref<SecretResponseDTO | null>(null);
let error = ref("");

async function createNewSecret(secretPostDTO: SecretPostDTO) {
  try {
    createdSecret.value = await SecretApi.createSecret(secretPostDTO);
    error.value = "";
  } catch (err) {
    error.value = err.response.data.message;
    createdSecret.value = null;
  }
}
</script>

<template>
  <div class="create">
    <div class="form-layout">
      <h2>Set up a new secret</h2>

      <label for="secret">This text that will be saved as a secret</label>
      <input type="text" id="secret" v-model="newSecret.secret" />

      <label for="expireAfterViews"
        >The secret won't be available after the given number of views</label
      >
      <input
        type="text"
        id="expireAfterViews"
        v-model="newSecret.expireAfterViews"
      />

      <label for="expireAfter"
        >The secret won't be available after the given time. The value is
        provided in minutes. 0 means never expires</label
      >
      <input type="text" id="expireAfter" v-model="newSecret.expireAfter" />
      <button
        @click="
          createNewSecret({
            secret: newSecret.secret,
            expireAfterViews: newSecret.expireAfterViews,
            expireAfter: newSecret.expireAfter,
          })
        "
      >
        Submit
      </button>

      <div class="success-text" v-if="createdSecret?.hash">
        <h3>Your secret hash is</h3>
        <p>{{ createdSecret.hash }}</p>
      </div>

      <h1 class="error-text" v-if="error.length">{{ error }}</h1>
    </div>
  </div>
</template>

<style scoped>
.form-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-text {
  color: red;
}

.success-text {
  color: green;
  text-align: center;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

@media (min-width: 1024px) {
  .create {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

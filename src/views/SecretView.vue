<script setup lang="ts">
import { ref } from "vue";
import { SecretApi } from "@/services/api";

let secretResponseDTO = ref({
  hash: "",
  secret: "",
  createdAt: "",
  expiresAt: "",
  remainingViews: 0,
});
let hash = ref("");
let error = ref("");

async function getSecretByHash(hash: string) {
  try {
    secretResponseDTO.value = await SecretApi.getSecret(hash);
    error.value = "";
  } catch (err) {
    error.value = err.response.data.message;
    secretResponseDTO.value = {
      hash: "",
      secret: "",
      createdAt: "",
      expiresAt: "",
      remainingViews: 0,
    };
  }
}
</script>

<template>
  <div class="create">
    <div class="form-layout">
      <h2>Please enter your hash</h2>

      <label for="secret">This text that will be saved as a secret</label>
      <input type="text" id="secret" v-model="hash" />

      <button @click="getSecretByHash(hash)">Submit</button>

      <div class="success-text" v-if="secretResponseDTO.hash">
        <h3>Your secret is</h3>
        <p>hash: {{ secretResponseDTO.hash }}</p>
        <p>secret: {{ secretResponseDTO.secret }}</p>
        <p>createdAt: {{ secretResponseDTO.createdAt }}</p>
        <p>expiresAt: {{ secretResponseDTO.expiresAt }}</p>
        <p>remainingViews: {{ secretResponseDTO.remainingViews }}</p>
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

<script setup lang="ts"></script>

<template>
  <div class="greetings">
    <h3>
      The original task was to create a
      <a target="_blank" href="https://gitlab.com/balazs.tar/secret-server-task"
        >Secret Server Application</a
      >
    </h3>
  </div>
</template>

<style scoped>
h3 {
  font-size: 1.2rem;
}

.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h3 {
    text-align: left;
  }
}
</style>

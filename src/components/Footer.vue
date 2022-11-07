<script lang="ts">
export default {
  name: 'Footer',
  data: () => ({
    currYear: new Date().getFullYear(),
  }),
} as Record<string, any>;
</script>

<template>
  <div class="footer-container">
    <footer>
      <div class="copyright">&copy; {{ currYear }} Rebecca Song</div>
      <div class="version">v2.0.0</div>
    </footer>
  </div>
</template>

<style scoped>
.footer-container {
  position: absolute;
  bottom: 0;
  width: 100%;
}

footer {
  display: flex;
  justify-content: space-between;
  color: #5a6672;
  padding: 0.3rem 0.5rem;
}

.copyright,
.version {
  font-size: 0.7rem;
}
</style>

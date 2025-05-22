<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
}

.app-header {
  padding: 2rem 0;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.app-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.app-subtitle {
  font-size: 1.2rem;
  opacity: 0.7;
  margin-top: 0.5rem;
}

.app-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.welcome-section {
  text-align: center;
  margin-bottom: 3rem;
}

.welcome-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.welcome-section p {
  font-size: 1.2rem;
  opacity: 0.7;
  margin-bottom: 2rem;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.start-button,
.about-button {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.start-button {
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  color: #fff;
  font-weight: 600;
}

.start-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(255, 126, 95, 0.3);
}

.about-button {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.about-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.level-section {
  margin-top: 2rem;
}

.level-section h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.level-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.level-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.level-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.level-completed {
  border-color: #4CAF50;
}

.level-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  margin: 0 auto 1rem;
}

.level-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.level-status {
  font-size: 0.9rem;
  opacity: 0.7;
}

.app-footer {
  padding: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.5;
  background-color: rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .app-title {
    font-size: 2.5rem;
  }

  .welcome-section h2 {
    font-size: 2rem;
  }

  .level-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>

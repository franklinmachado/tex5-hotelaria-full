<template>
  <section class="reservaHero">
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }}</h3>
    <a href="#" class="btn">Reserve agora</a>
  </section>
</template>

<script>
export default {
  name: 'HeroComponent',
  data() {
    return {
      title: 'Conforto e praticidade para você',
      subtitle: '\"Aconchego, conforto, simpatia e alto astral\"'
    }
  }
}
</script>

<style scoped>
.reservaHero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  color: #415a77;
  background-image: url(../assets/images/banner2.jpeg);
}
.reservaHero h1 {
  font-size: 3.2rem;
  margin-bottom: 15px;
  color: #e0e1dd;
}
.reservaHero h3 {
  font-size: 2rem;
  margin-bottom: 50px;
  color: #fff;
}
.reservaHero .btn {
  background-color: #fff;
  border-radius: 4px;
  color: #0c1926;
  padding: 20px 50px;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
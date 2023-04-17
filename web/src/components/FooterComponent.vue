<template>
  <footer id="contato">
    <ul>
      <li>
        <a href=""><i class="fab fa-facebook"></i></a>
      </li>
      <li>
        <a href=""><i class="fab fa-twitter"></i></a>
      </li>
      <li>
        <a href=""><i class="fab fa-instagram"></i></a>
      </li>
    </ul>
    <p>Todos os direitos reservados - The Experience Hotel 2023</p>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  background-color: #0c1926;
  padding: 3% 0;
  align-items: center;
}

footer ul {
  display: flex;
  margin: 30px 0;
}

footer ul li {
  margin-right: 20px;
}

footer ul li:last-child {
  margin-right: 0;
}

footer ul li a {
  color: #fff;
  font-size: 2rem;
}

footer p {
  font-size: 0.7rem;
  color: #fff;
  text-align: center;
}
</style>
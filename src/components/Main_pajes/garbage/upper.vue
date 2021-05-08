<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
          <img :src="img" alt="ITMO logo" class="i" style="width: 20%; margin-left: 10px"   >
      </div>
    </div>
  </header>
</template>

<script>
import img from '/src/assets/itmo.png'
export default {
  name: "upper",
  data(){
    return{
      img,
    }
  }
}
</script>


<style>

a{
  cursor: pointer;
}

svg {
  cursor: pointer;
}

h1,h2,h3 {
  margin: 0 0 0 50px;
}

.header__logo {
  margin: 0 0 0 40px;
}
.header{
  height: 30px;
}
</style>

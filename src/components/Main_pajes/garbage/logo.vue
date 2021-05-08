<template>
	<header>
        <img id="logo_svg" @click="$router.push('/')" src="src/assets/itmo.png">
  </header>
</template>

<script>

export default {
  name: 'logo',
}

</script>

<style>

  #logo_svg {
    margin-left: 2%;
    margin-top: 2%;
  }

</style>


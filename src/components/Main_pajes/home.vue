<template>
  <div>
    <post_component v-for="el in posts" :key="el.title"
                    :post_title=el.title :post_text=el.text :post_members=el.members
    :post_type=el.type></post_component>
  </div>
</template>

<script>
export default {
  name: "Home",
  components:{
    post_component: () => import('/src/components/Main_pajes/post.vue'),
  },
  data(){
    return{
      posts: [

      ]
    }
  }
}
</script>
<template>
  <div>
    <header>
      <upper_component></upper_component>
    </header>

    <head_component></head_component>
    <post_component v-for="el in posts" :key="el.title"
                    :post_title=el.title :post_text=el.text :post_members=el.members
    :post_type=el.type></post_component>

    <div id="footer">
      <under_line_component/>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  components:{
    upper_component: ()=> import('/src/components/Main_pajes/garbage/upper.vue'),
    post_component: () => import('/src/components/Main_pajes/post.vue'),
    head_component: () => import('/src/components/Main_pajes/garbage/sending.vue'),
    under_line_component: () => import('/src/components/Main_pajes/garbage/downer.vue'),
  },
  data(){
    return{
      posts: [
        {
          title: "Ищу людей к команду",
          text: "Проект для хакатона",
          members: 3,
          type: "Programming",
        },
        {
          title: "Ищу людей к команду",
          text: "Проект для хакатона",
          members: 3,
          type: "Programming",
        },
        {
          title: "Ищу людей к команду",
          text: "Проект для хакатона",
          members: 3,
          type: "Programming",
        },
      ]
    }
  }
}
</script>

<style>
#footer {
   /* Фиксированное положение */
  left: 0; bottom: 0; /* Левый нижний угол */
  width: 100%; /* Ширина слоя */
  margin-top: 350px;
}
@media only all and (min-width: 1256px) {
  #wrap {
    width: 1245px;
    font-size: 16px;
  }

}

@media only all and (min-width: 882px) and (max-width: 1255px) {
  #wrap {
    width: 643px;
    font-size: 12px;
  }
}

@media only all and (max-width: 881px) {
  #wrap {
    width: 320px;
    font-size: 8px;
  }
}
</style>
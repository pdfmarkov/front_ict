<template>
    <div class="form">
        <div class="head">
            <h1>{{post_title}}</h1>
        </div>

        <div class="body">
            {{post_text}}
        </div>

        <div class="information">
            <a>members:  {{post_members}}/4 </a>
            <a>type: {{post_type}} </a>
        </div>

    </div>
</template>

<script>
  export default {
      name: "post",
      props:{
        post_title: String,
        post_text: String,
        post_members: Number,
        post_type: String,
      }
  }
</script>


<style scoped>
.form{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -300px;
    margin-bottom: 30px;
    width:800px ;
    max-height: 600px;

    background-color: white;
    border-radius: 10px;
    position: relative;
    box-shadow: 2px 2px 1px 1px rgb(5, 13, 17);

}
.head{
    margin-left: 10px;
    font-family: Roboto;
    font-size: 20px;
    color: #545457;
}
.body{
    margin-left: 10px;
    font-family: Roboto;
    font-size: 15px;
    color: #545457;
}
    .information{

        margin-left: 10px;
        text-align: right;
        padding-right: 15px;
        padding-bottom: 25px;
        /*margin-left: 300px;*/
        font-weight: bold;
        font-family: Roboto;
        padding-bottom: 20px;
        font-size: 20px;
        font-style: inherit;
        color: rgb(25, 132, 189);

    }
</style>

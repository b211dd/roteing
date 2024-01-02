<template>
    <h1>Eng:: Osama Samer</h1>
    <h1>{{ userid }}</h1>
</template>

<script>
export default{
  data(){
    return{
        userid:this.$route.params.userid
    }
  },
  methods:{
    checkID(){
        this.userid = this.$route.params.userid
    }
  },
  watch:{
    $route : 'chechID'
  }
}
</script>


<style >

</style>
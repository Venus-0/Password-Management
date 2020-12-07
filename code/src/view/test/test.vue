<template>
  <div id="test">
    <p>输入框为{{ msg }}</p>
    <input type="text" v-model="msg" />
    
    
  </div>
</template>

<script >
export default {
    name:'test',
    data(){
        return {
            msg:"test",
            
        }
    },
    methods:{
       
    }
}
</script>
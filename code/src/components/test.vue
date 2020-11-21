<template>
    <div id="test">
        <p>输入框为{{ msg }}</p>
        <input type="text" v-model='msg'>
        <button id="encryp" @click='enc'> 加密</button>
        <button id="decrypt" @click="unEnc"> 解密</button>
    </div>
</template>

<script>
export default {
    name:'test',
    data(){
        return {
            msg:"test"
        }
    },
    mounted:function(){
        
    },
    methods:{
    
    }
}
</script>
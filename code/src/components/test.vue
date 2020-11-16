<template>
    <div id="test">
        <p>输入框为{{ msg }}</p>
        <input type="text" v-model='msg'>
        <button @click='enc'> click</button>
    </div>
</template>

<script>
import {RSAencrypt} from '../../static/js/encryption.js'
export default {
    name:'test',
    data(){
        return {
            msg:"test"
        }
    },
    methods:{
        enc:function(){
            
        }
    }
}
</script>
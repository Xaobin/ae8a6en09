<!-- = = = = = = = 
__   ___   _  ___ 
\ \ / | | | |/ _ \
 \ V /| |_| |  __/
  \_/  \__,_|\___|            
 =  =  =  =  =  =  -->
<script>
import { aStore } from '../store/store1'
import btn from './btn.vue'
export default {
      components: { btn },
      setup() {
	            const storex = useStore();      
		        return { storex };
	        },
      data() {
        return {
            openNums:false,
            openGroup:false
        },
      props:['amount','colls']  
      },
      computed:{
        
      },
      methods:{
         openNumsColls(){
            
         }
      },
      mounted(){
        
      }
    }
</script>

<template>
 <span v-for="itt in amount">
  <btn nameID="itt" />
 </span>
</template>


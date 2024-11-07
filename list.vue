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
	            const storex = aStore();      
		        return { storex };
	        },
      
       props:['amount','colls','zero'],  
       mounted(){
        console.log('Component list');
        console.log('Amount:'+this.amount+' type of:'+(typeof this.amount));
        console.log('Colls:'+this.colls+' type of:'+(typeof this.colls));
        console.log('Zero:'+this.zero+' type of:'+(typeof this.zero));
      }  
    }
</script>

<template>
 <span v-for="itt,khey in (+amount)" :key="khey">
  <span v-if="((khey % (+colls))==0)"><br></span>
      <span v-if="( (zero==true) && (itt==0) )">
          <btn :nameID="itt" />
      </span>
      <span v-if="(itt>0)">
          <btn :nameID="itt" />
      </span>
 </span>
</template>


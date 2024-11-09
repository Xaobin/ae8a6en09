<!-- = = = = = = = 
__   ___   _  ___ 
\ \ / | | | |/ _ \
 \ V /| |_| |  __/
  \_/  \__,_|\___|            
 =  =  =  =  =  =  -->
<script>
import { aStore } from '../store/store1'

export default {
      
      setup() {
	            const storex = aStore();      
		        return { storex };
	        },
      
       //props:['amount','colls','zero'],  
       computed:{
        groupList(){

            let len=0;
            let gg=[]
            len=this.storex.general.length;
            if (len>0){
                gg=this.storex.general;
            }


        }
        
       },
       mounted(){
      
      }  
    }
</script>

<template>
<div>

 </div>
</template>


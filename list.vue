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
       computed:{
         amountCP(){
           // let beginX=-1;
            let arr=[];
            let amountII=this.amount;
           
           // if (this.zero==true){
           //     amountII--;
           // }
            for (let i = 0; i < amountII; i++) {
               if (this.zero==false){ arr[i]=i+1; }
				 else{
					 arr[i]=i;
				 }
            }
            
            return arr;
         }
       },
       mounted(){
        console.log('Component list');
        console.log('Amount:'+this.amount+' type of:'+(typeof this.amount));
        console.log('Colls:'+this.colls+' type of:'+(typeof this.colls));
        console.log('Zero:'+this.zero+' type of:'+(typeof this.zero));
        console.log(this.amountCP);
      }  
    }
</script>

<template>
<div>
 <span v-for="itt,khey in amountCP" :key="khey">
    <span v-if="(( (itt % (+colls))==0) &&(khey>0) )"><br></span>
          <btn :nameID="itt" /> 
</span>
 </div>
</template>


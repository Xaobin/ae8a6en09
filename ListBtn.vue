<!-- = = = = = = = 
__   ___   _  ___ 
\ \ / | | | |/ _ \
 \ V /| |_| |  __/
  \_/  \__,_|\___|            
 =  =  =  =  =  =  -->
<script>
import { aStore } from '../store/store1'
import Btn from './Btn.vue'
export default {
      components: { Btn },
      setup() {
	            const storex = aStore();      
		        return { storex };
	        },
         data(){ return {} },
       props:['amount','colls','zero','nums','toselect','selcolor'],  
       computed:{
         amountCP(){
         
            let arr=[];
            let amountII=this.amount;
        
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
       // console.log('Component list');
        //console.log('Amount:'+this.amount+' type of:'+(typeof this.amount));
      //  console.log('Colls:'+this.colls+' type of:'+(typeof this.colls));
      //  console.log('Zero:'+this.zero+' type of:'+(typeof this.zero));
      //  console.log(this.amountCP);
      }  
    }
</script>

<template>
<div>

 <span v-for="itt,khey in amountCP" :key="khey">
    <span v-if="(( (khey % (+colls))==0) &&(khey>0) )"><br></span>
          <Btn :nameID="itt" :nums="nums" :toselect="toselect" :selcolor="selcolor" /> 
</span>

 </div>
</template>


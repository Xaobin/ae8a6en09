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
         data(){ return { numsII:[] } },
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
         },
         txtCalcMaxWidth(){
            
            let z=+this.colls;
            let w=10;
          
            for(let i=0; i<=z; i++){
                
                if (((i % 3)==0)&&(z>3)){ w+=1; } 
                if (((i % 5)==0)&&(z>1)){ w+=1; }
               // if (((i % 5)==0)&&(z>1)&&(i<=10)){ w+=1; }
                //if (((i % 5)==0)&&(z>1)&&(i<=5)){ w+=1; }
                if (((i % 7)==0)&&(z>7)){ w+=1; }
               // if (((i % 9)==0)&&(z>9)){ w+=1; }
              //  if ( (i>17)&&((i % 2)!=0)&&((i % 3)!=0)&&((i % 4)!=0) ){ w+=1; }
            }
           //4 deu 30%
            let x=(4*z)+w;
            let y=Math.floor(x); 
            //if (y==27){ y=26; }
            return "max-width:"+y+"%;"
            
         }
        
            
       },
       
       mounted(){
        

      }  
    }
</script>

<template>
<div class="stillb" :style="txtCalcMaxWidth"> 

 <span v-for="itt,khey in amountCP" :key="khey">
    <span v-if="(( (khey % (+colls))==0) &&(khey>0) )"></span>
          <Btn :nameID="itt" :nums="nums" :toselect="toselect" :selcolor="selcolor" /> 
</span>

 </div>
</template>
<style scoped>
.stillb{
    border-radius: 6px;
    background-color: aliceblue;
    border: 2px dashed gray;
    margin:auto;
     padding: 1em;
    /*max-width:55%; */
}
.stillc{
    white-space: pre-line;
}
</style>

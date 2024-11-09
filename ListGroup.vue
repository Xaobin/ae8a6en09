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
            data(){

            },
      
       //props:['amount','colls','zero'],  
       computed:{
        groupList(){
            let neogg=[];
            let len=0;
            let gg=[]
            len=this.storex.general.length;
            if (len>0){
                gg=this.storex.general;
            }
        gg.forEach(jobj => {
        Object.entries(jobj).forEach(([khey, vall]) => {

        });

        });

        }
        
       },
       mounted(){
      
      }  
    }
</script>

<template>
<div>
<br>
<br>
<br>

 <small>
<mark v-if="storex.general.length>0">Groups:</mark> <br> 
  <span v-for="itt,khey in storex.getGeneral()" :key="khey">
      Level: {{itt.level}}<br>
      Group number: {{itt.name}}<br>
      Group:<span class="badge bg-primary">{{itt.vals}}</span><br>
      ___________
        <br> 
  </span>

</small>


</div>
</template>


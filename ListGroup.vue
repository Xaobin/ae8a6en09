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

 <small>


<mark v-if="storex.general.length>0">Groups:</mark> <br> 
    <table class="table">
    <tbody>
    <tr v-for="itt,khey in storex.getGeneral()" :key="khey">
      <td>Level:{{itt.level}}|Group:{{itt.name}}<br>
      <span class="badge bg-primary">{{itt.vals}}</span>
      <br><button class="badge bg-warning text-dark" @click="storex.del1General(itt)">Del</button>
      </td>
     </tr> 
    </tbody>
    </table>
</small>


</div>
</template>


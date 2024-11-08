<!-- = = = = = = = 
import MyComponent from './MyComponent.vue'

export default {
  components: {
    MyComponent
  }
}

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
      data() {
        return {
        // btnName:'Button',
            realClass:'',
            defaultClass:'btn btn-secondary',
            selectedClass:'btn btn-primary'
        }
      },
      props:['nameID','nameGroup'],  
      computed:{
        nameValueCP(){
            if ( +this.nameID<10 ){
                return "0"+this.nameID;
            }
            else return this.nameID;
        }
      },
      methods:{
         changeButton(){
            this.realClass=this.selectedClass;
           this.storex.setNums(this.storex.getNameGroup(), this.storex.getLevel,this.nameID);
         }
      },
      mounted(){
        this.realClass=this.defaultClass;
       
      }
    }
</script>

<template>
  <button :class="realClass" :name="nameID" @click="changeButton()">{{nameValueCP}}</button>
</template>


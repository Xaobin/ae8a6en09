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
	            const storex = useStore();      
		        return { storex };
	        },
      data() {
        return {
       // btnName:'Button',
        defaultClass='btn btn-secondary',
        selectedClass='btn btn-primary'
        },
        props:['nameIDPS','classPS','levelPS','nameGroupPS']
      },
      computed:{
        nameValueCP(){
            if ( Number(this.nameIDPS<10) ){
                this.nameIDPS="0"+this.nameIDPS
            }
        }
      },
      methods:{
         changeButton(thid.nameIDPS){

         }
      }
    }
</script>

<template>
  <button :class="classPS" :name="nameIDPS" :level="levelPS" :nameGroup="nameGroupPS">{{nameValueCP}}</button>
</template>


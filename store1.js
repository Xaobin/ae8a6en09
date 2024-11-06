import { defineStore } from 'pinia'
import { useStorage } from "@vueuse/core";

export const aStore = defineStore({
    id: 'mstore',
    state: () => ({
        num: useStorage('nnt', { }),
        nums: useStorage('nng',{name:'',vals:[],level:0}),
        status: useStorage('nns',{status:'zero',msg:'nothing'})
    }),
    actions: {
        setNum(response) {
            this.num = response
        },
        clearNum() {
            this.num = null
        },
        setNumsVals(response){
            this.nums.vals=response
        },
        setNumsName(response){
            this.nums.name=response
        },
        setNumsLevel(response){
            this.nums.level=response
        },
        clearNums() {
            this.nums.name = '',
            this.nums.level=0,
            this.nums.vals=[]
        },
        //setStatus(response){ this.transact.status=response},
        //setMsg(response){ this.transact.msg=response},
        
    },
    persist: true
});

/*
Utilização no vue, opt api
Antes do export default
import { useStore } from '../store/store1'

No início do script, nível de data, dentro export default
setup() {
	            const storex = useStore();      
		        return { storex };
	        },

 Em métodos:
                this.storex.transact.status=stt;
                this.storex.setMsg(...); 
                this.storex.setStatus(...);     
                this.storex.setItem(...);
                console.log("Status:"+this.storex.transact.status);
                console.log("Message:"+this.storex.transact.msg);       
 Creio 
 Que seja possível utilzar a variável storex dentro do template
 {{storex.algo}}                            
*/
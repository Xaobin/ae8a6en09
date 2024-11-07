import { defineStore } from 'pinia'
import { useStorage } from "@vueuse/core"; 
///npm install @vueuse/core
export const aStore = defineStore({
    id: 'mstore',
    state: () => ({
        num: useStorage('nut', { }),
        nums: useStorage('nug',{name:'',level:0,vals:[]}),
        config: useStorage('cfg',{realLevel:0,realGroup:''})
    }),
    actions: {
        setNums(nn,ll,vv) {
            this.nums.name=nn;
            this.nums.level=ll;
            this.nums.vals=vv;
        },
        setConfig(rl,rg){
            this.config.realLevel=rl;
            this.config.realGroup=rg;
        },
        clearConfig(){
            this.config.realLevel=0;
            this.config.realGroup='';
        },
        clearNums() {
            this.nums.name = '',
            this.nums.level=0,
            this.nums.vals=[]
        },
        getNameGroup(){
            return this.config.realLevel;
        },
        getLevel(){
            return this.config.realGroup;
        }
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

import { defineStore } from 'pinia'
import { useStorage } from "@vueuse/core"; 
///npm install @vueuse/core
export const aStore = defineStore({
    id: 'mstore',
    state: () => ({
        tmpNums: useStorage('tmp', []),
        groupNums: useStorage('nums',{name:0,level:0,vals:[]}),
        config: useStorage('cfg',{realLevel:1,realGroup:1}),
        general: useStorage('gen',{})
    }),
    actions: {
        addTmpNum(num){
            if (this.tmpNums.includes(num)==false){
                let aa=this.tmpNums.length;
                //aa++;
                this.tmpNums[aa]=num;
            } 
            else{ const index = this.tmpNums.indexOf(num);
                //console.log("Index:"+index);
            if (index > -1) {   this.tmpNums.splice(index, 1); } 
             }
        },
        getTmpNums(){
            return this.tmpNums;
        },
        clearTmpNums(){
            this.tmpNums=[];
        },
        setGroup(rg){
            this.config.realGroup=rg;
        },
        getGroup(){
            return this.config.realGroup;
        },
        getLevel(){
            return this.config.realLevel;
        },
        setLevel(lv){
            this.config.realLevel=lv;
        },
        incrementLevel(){
            let ll=this.config.level;
            ll++;
            this.config.level=ll;
        },
        incrementGroup(){
            let gg=this.config.group;
            gg++;
            this.config.group=gg;
        },
        clearConfig(){
            this.config.realLevel=0;
            this.config.realGroup='';
        },    
        closeGroup(){
            this.addGeneral(this.groupNums);
            this.clearTmpNums();
            this.incrementGroup();
            this.groupNums.name=this.getGroup();
            this.groupNums.level=this.getLevel();
            this.groupNums.vals=this.getTmpNums();
        },
        addGeneral(itt){
            this.general[this.getGroup]=itt;
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
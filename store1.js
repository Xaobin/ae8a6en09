import { defineStore } from 'pinia'
import { useStorage } from "@vueuse/core"; 
///npm install @vueuse/core
export const aStore = defineStore({
    id: 'mstore',
    state: () => ({
        tmpNums: useStorage('tmp', []),
        groupNums: useStorage('nums',{name:0,level:0,vals:[]}),
        config: useStorage('cfg',{realLevel:1,realGroup:1}),
        general: useStorage('gen',[]),
        limit: useStorage('lim',0),
        notes: useStorage('not',''),
        slate: useStorage('sla',[])
    }),
    actions: {
        setSlate(sll){
            this.slate=sll;
        },
        addSlate(sll){
            this.slate.push(sll);
        },
        getSlate(){
            return this.slate;
        },
        getSlateLength(){
            return this.slate.length;
        },
        addNotes(nx){
            this.notes=nx;
        },
        getNotes(){
            return this.notes;
        },
        addTmpNum(num){
            
            if (this.tmpNums.includes(num)==false){
                let aa=this.tmpNums.length;
                //aa++;
                this.tmpNums[aa]=num;
                this.incLimit();
            } 
            else{ const index = this.tmpNums.indexOf(num);
                //console.log("Index:"+index);
            if (index > -1) {   this.tmpNums.splice(index, 1); } 
                this.decLimit();
             }
        },
        incLimit(){
            this.limit++;
        },
        decLimit(){
            this.limit--;
        },
        clearLimit(){
            this.limit=0;
        },
        getLimit(){
            return this.limit;
        },
        getTmpLength(){
            return this.tmpNums.length;
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
            let ll=this.config.realLevel;
            ll++;
            this.config.realLevel=ll;
        },
        incrementGroup(){
            let gg=this.config.realGroup;
            gg++;
            this.config.realGroup=gg;
        },
        clearConfig(){
            this.config.realLevel=1;
            this.config.realGroup=1;
        },    
        closeGroup(){
            this.groupNums.name=this.getGroup();
            this.groupNums.level=this.getLevel();
            this.groupNums.vals=this.getTmpNums();

            this.addGeneral(this.getGroupNums());

            this.clearTmpNums();
            this.incrementGroup();
        },
        getGeneral(){
            return this.general;
        },
        getGroupNums(){
            return this.groupNums;
        },
        addGeneral(itt){
           //console.log("Real Group:"+this.getGroup());
           let gg=[];
           gg=this.general;
            gg.push(itt);
            this.general=gg;
        },
        clearGeneral(){
            this.general=[];
        },
        del1General(num){
            const index = this.general.indexOf(num);
                //console.log("Index:"+index);
            if (index > -1) {   this.general.splice(index, 1); } 
             
        },
      
       
       
        
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
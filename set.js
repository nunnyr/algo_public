class CustomSet {
    constructor() {
        this.hash = {}
    }

    add(val) {
        if(!this.hash){
            this.hash[val]=1
        }else{
            !this.hash[val] ? this.hash[val]=1 : null
        }
    }

    exists(val) {
        if(!this.hash) return false
        return this.hash[val] ? true : false
    }

    remove(val) {
        if(!this.hash) return 
        if(this.hash[val]){
            delete this.hash[val]
        }
    }
}



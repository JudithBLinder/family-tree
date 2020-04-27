class FamilyTree {
  constructor (Name) {
    if(!Name || typeof(Name) !== 'string'){
      throw '';
    }
    this.value = Name;
    this.children = [];
  }
  insert(Name){
    let newFamily = new FamilyTree(Name)
    this.children.push(newFamily);
  }
  familySize(){
    let familySize = this.children.length + 1;
    return familySize;
  }
  findMember(Name){
    for(let i=0; i<this.children.length; i++){
      if(this.children[i].value === Name){
        return this.children[i];
      }else{
        this.findMember(this.children[i].value);
      }
    }
    return undefined;
  }
  log(){
    // debugger;
    let counter = 1;
    let dashStr = `--`;
    let returnedArray = [];

    const FamilyTree = (objIn, counter)=>{
      returnedArray.push(dashStr.repeat(counter) + ` ${objIn.value}`);
      for(let i=0; i<objIn.children.length; i++){
        FamilyTree(objIn.children[i], counter + 1);
      }
    };

    FamilyTree(this, counter);
    
    return returnedArray.join(`\n`);
  }
}

module.exports = FamilyTree;
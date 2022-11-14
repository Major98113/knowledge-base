
class BasicPerson {
    greeting(){
        console.log('Hi, it is basic');
    }
}

class AdvancedPerson extends BasicPerson {
    greeting(){
      console.log('Hi, it is advanced');
    }
}
  
  const my1 = new AdvancedPerson();
  
  console.log( AdvancedPerson.prototype );//AdvancedPerson {}
  console.log( my1.prototype );//undefined
  console.log( my1.__proto__ );//AdvancedPerson {}
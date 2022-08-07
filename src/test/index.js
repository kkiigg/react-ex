// class Subject {
//     constructor(name){
//         this.name=name
//         this.status=''
//         this.observers =[]
//     }
//     setState(val){
//         this.status=val
//         this.observers.forEach(obs=>{
//             obs.do(this)
//         })
//     }
//     subscribe(obj){
//         this.observers.push(obj)
//     }

// }
// class Observer {
//     constructor(name){
//         this.name=name
//     }
//     do(sub){
//         console.log(this.name+' said :'+sub.name+' is '+sub.status)
//     }
// }
// const subject = new Subject('小明')

// const obsA = new Observer('王二虎')
// const obsB = new Observer('李小亮')
// subject.subscribe(obsA)
// subject.subscribe(obsB)

// subject.setState('excited')
// subject.setState('so sad')

const Publisher = {
  subscribes: [],
  on(obj) {
    this.subscribes.push(obj);
  },
  emit(msg) {
    this.subscribes.forEach((obj) => {
      obj.update(this, msg);
    });
  },
};

class Subscribe {
  constructor(name) {
    this.name = name;
  }
  update(pub) {
    console.log(`${this.name}收到！'${pub.msg}'`);
  }
}

let subA = new Subscribe("王二虎");
let subB = new Subscribe("李小亮");

Publisher.on(subA);
Publisher.on(subB);

Publisher.emit("过来开黑！");

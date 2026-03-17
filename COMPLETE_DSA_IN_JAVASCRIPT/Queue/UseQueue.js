import { Queue } from "./Queue.js";

const queueInstance = new Queue()
queueInstance.enqueu(20)

const item1 = queueInstance.dequeue()


const peekitens = queueInstance.peek()
console.log(peekitens);



const empty = queueInstance.isEmpty()
console.log(empty);

const item = queueInstance.dequeue()


const empty2 = queueInstance.isEmpty()
console.log(empty2);
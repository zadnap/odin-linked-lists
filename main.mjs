import { LinkedList } from "./linkedList.mjs";

const linkedList = new LinkedList();

linkedList.append("dog");
linkedList.append("cat");
linkedList.append("parrot");
linkedList.append("hamster");
linkedList.append("snake");
linkedList.append("turtle");

console.log(linkedList.toString());

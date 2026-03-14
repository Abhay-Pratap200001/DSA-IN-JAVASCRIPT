import { Stack } from "./Stack.js";
import PromptSync from "prompt-sync";

const stack = new Stack();
stack.push(11)
stack.push(20)
stack.push(21)
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
stack.pop()
stack.pop()
stack.pop()
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());

/* <<--------------------------------------------------------------------------------------------------------->> */

// Building program using of stack

const stack2 = new Stack();
const prompt = PromptSync();

const exit = false;
while (!exit) {
  const userChoice = prompt(`Please select one of the below choises
    1. Press 1 to add a new domain
    2. Press 2 to see the current domain
    3. Press 3 to go back
    4. Press 4 exit
    `);

  const userChoiceumber = parseInt(userChoice);
  console.log(userChoiceumber);

  switch (userChoiceumber) {
    case 1:
      const domainNamae = prompt("Please provide the new domain: ");
      stack2.push(domainNamae);
      console.log(domainNamae + " is now open");
      break;

    case 2:
      const Currentdomain = stack2.peek();
      console.log(Currentdomain + " is now open");
      break;

    case 3:
      stack2.pop();
      console.log("Went back to pervious domain", stack2.peek());
      break;

    case 4:
      exit = true;
  }
}

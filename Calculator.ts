import inquirer from "inquirer";
const promptUser = async () => {

const answer = await inquirer.prompt([
        {
          name: "Firstnumber",
          type: "number",
          message: "Enter first number : ",
        },
        {
          name: "Secondnumber",
          type: "number",
          message: "Enter second number :",
        },
        {
          name: "operator",
          type: "list",
          message: "Select the operator",
          choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
      ]);



  const operations = (number1: number, number2: number, operator: string) => {
    switch (operator) {
      case "Addition":
        return number1 + number2;

      case "Subtraction":
        return number1 - number2;

      case "Multiplication":
        return number1 * number2;

      case "Division":
        if (number2 === 0) {
          return "Cannot divide by zero";
      }

     } } ;



    const result = operations(
      answer.Firstnumber,
      answer.Secondnumber,
      answer.operator
    );
    console.log(` Result = ${result}`);
;
};

promptUser();

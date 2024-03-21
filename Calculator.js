import inquirer from "inquirer";
const promptUser = async () => {
    const answer = await inquirer.prompt([
        {
            name: "Firstname",
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
    const operations = (number1, number2, operator) => {
        switch (operator) {
            case "Addition":
                return number1 + number2;
            case "Subtraction":
                return number1 - number2;
            case "Multiplication":
                return number1 * number2;
            case "Division":
                if (number2 === 0) {
                    console.log("Invalid number");
                }
                return number1 / number2;
        }
    };
    const result = operations(answer.Firstname, answer.Secondnumber, answer.operator);
    console.log(` Result = ${result}`);
    ;
};
promptUser();

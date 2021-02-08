//input # of new students wanted, counter = # of students
const inquirer = require("inquirer")
//for loop {
//if counter > 0 {
//connect to slack channel (fsf-requests)
//listen for new posts
//when new post seen, click nested link and message that user "me"
//counter-- }
//else return}

function main() {

    inquirer.prompt({
        type: "input",
        name: "number",
        message: "How many students do you need?",
        validate: function (input) {
            //if user inputs a number return true
            if (isNaN(input)){
                return false
            } else return true
            //else return false
        }
    }).then( data => {
        counter = data.number;

        while (number > 0) {
          //listen for new posts
          //when new post seen, click nested link and message that admin "me"
        }
    })





}

main()
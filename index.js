// Willi
// 4 September 2022
// Latihan MVC (Model View Controller)

// Process Argv: Bisa mengambil input dari terminal.
// Command: show, add, delete, update

const command = process.argv[2];
const params = process.argv.slice(3);
const TodoController = require('./controller/TodoController');

switch(command){
    case 'show':
        // console.log("Command show");
        TodoController.show();
        break;
    case 'add':
        // console.log("Command add");
        TodoController.add(params);
        break;
    case 'delete':
        // console.log("Command delete");
        TodoController.delete(params);
        break;
    case 'update':
        // console.log("Command update");
        TodoController.update(params);
        break;
    default:
        // console.log("Masukkan perintah yang benar.");
        TodoController.message("Masukkan perintah yang benar.");
        break;
}
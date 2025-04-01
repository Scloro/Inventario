import app from "./app.js";
const main = () =>{
    app.listen(app.get("port"));
    console.log(`The Company's server web is running on port ${app.get('port')}`);
}

main();
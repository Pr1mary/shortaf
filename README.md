# shortaf
Shortaf is a link shortener web made using nodejs and mongodb.

## Setup
Follow this step to setup the project:
1. Make sure nodejs and mongodb is installed. (you can install mongodb on another computer).
2. Clone this repository using git.
3. Change directory to project directory.
    ``` $ cd ../shortaf ```
4. Execute npm install to make sure all dependencies are installed.
    ``` $ npm install ```
5. Open .env file to change the domain and port  if needed. (change DB_URI inside .env file from ```localhost``` to your own mongodb URI if you installed it on another computer)
6. To run the server, execute:
    ```$ npm start```
const express = require('express')
const app = express();
const bodyP = require('body-parser')
const compiler = require('compilex')
const path = require("path")

const options = { stats: true }
compiler.init(options)

app.use(bodyP.json());
// app.use("/codemirror-5.65.15", express.static(path.join(__dirname, "codemirror-5.65.15")))
app.use("/codemirror-5.65.15", express.static("C:/Users/Admin/OneDrive/Documents/Sachin's Files/JavaMiniProject/Online Complier/codemirror-5.65.15"))


app.get('/', (req, res) => {
    compiler.flush(() => {
        console.log("Deleted");
    });
    // res.sendFile(path.join(__dirname, "index.html"));
    res.sendFile("C:/Users/Admin/OneDrive/Documents/Sachin's Files/JavaMiniProject/Online Complier/index.html");
    
});


app.post('/compile', (req, res) => {

    let code = req.body.code
    let input = req.body.input
    let lang = req.body.lang

    try {
        if (lang == "Cpp") {
            if (!input) {
                //if windows  
                var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
                compiler.compileCPP(envData, code, function (data) {
                    if (data.output) {
                        res.send(data)
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
            else {
                //if windows  
                var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
                compiler.compileCPPWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data)
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
        }
        else if (lang == "Java") {
            if (!input) {
                //if windows  
                var envData = { OS: "windows" };
                compiler.compileJava(envData, code, function (data) {
                    if (data.output) {
                        res.send(data)
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
            else {
                //if windows  
                var envData = { OS: "windows" };
                compiler.compileJavaWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data)
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
        }
        else if (lang == "Python") {
            if (!input) {
                //if windows  
                var envData = { OS: "windows" };
                compiler.compilePython(envData, code, function (data) {
                    if (data.output) {
                        res.send(data)
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
            else {
                //if windows  
                var envData = { OS: "windows" };
                compiler.compilePythonWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data)
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
        }
    }
    catch (err) {
        console.log("Error", err);
        res.status(500).send({ output: "error" });
    }


})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
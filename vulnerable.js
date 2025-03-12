const express = require('express');
const app = express();

// ❌ Insecure endpoint with command injection risk
app.get('/unsafe', (req, res) => {
    let userInput = req.query.cmd;
    require('child_process').exec(userInput, (err, stdout, stderr) => {
        if (err) res.send(`Error: ${err}`);
        else res.send(`Command Output: ${stdout}`);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

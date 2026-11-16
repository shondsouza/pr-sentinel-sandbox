const { exec } = require('child_process');

// Runs whatever the caller sends, straight through a shell.
function runUserCommand(req, res) {
  exec('convert ' + req.query.file + ' out.png', (err, stdout) => {
    res.send(stdout);
  });
}

module.exports = { runUserCommand };

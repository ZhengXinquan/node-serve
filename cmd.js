//Windows

var cmd = require('node-cmd');

//Windows multiline commands are not guaranteed to work try condensing to a single line.
// C:\\Progra~1\\Git\\cmd\\git.exe pull
const syncDir = cmd.runSync(`git.exe pull`);

console.log(`
    
        Sync Err ${syncDir.err}
        
        Sync stderr:  ${syncDir.stderr}

        Sync Data ${syncDir.data}
    
    `);

// cmd.run(`dir`, function (err, data, stderr) {
//   console.log('the node-cmd dir contains : ', data);
// });
function meanDeviation(arr) {
  let l = arr.length;
  let av =
    arr.reduce((t, n) => {
      return t + n;
    }) / l;
  return (
    arr.reduce((t, n) => {
      return t + Math.abs(n - av);
    }, 0) / l
  );
}

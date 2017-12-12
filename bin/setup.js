/**
 * INITIAL PROJECT SETUP Script
 */

 console.log('[PROJECT SETUP]');
 const util = require('util');
 const exec = util.promisify(require('child_process').exec);


function run(command){
  return exec(command)
}


// (err, stdout, stderr) => {
//   if (err) {
//     // node couldn't execute the command
//     return;
//   }

//   // the *entire* stdout and stderr (buffered)
  
  
//   });
run('pwd').then(stdout => {
  console.log('stdout:', stdout);
  return run('cd backend');
}).then(stdout =>{
  return run('ls -la')
}).then(stdout =>{
  console.log('stdout:', stdout);
})
.catch(stderr => {
  console.log('stderr:', stderr);
});
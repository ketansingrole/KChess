<template>
  <div class="flex w-screen h-screen items-center justify-center">
    <h2>this is play with computer page</h2>
  </div>
</template>
<script>
try {
  // const fs = require("fs");
  // const { spawn } = require("child_process");
  // stockfish = spawn("/resources/extraResources/stockfish_13_win_x64_bmi2.exe");
  // const spawn = require("child_process").spawn,
  //   stockfish = spawn(
  //     "/resources/extraResources/stockfish_13_win_x64_bmi2.exe"
  //   );

  // stockfish.stdout.on("data", (data) => {
  //   console.log(`data: ${data}`);
  // });

  // stockfish.stdin.write("uci");

  // stockfish.stderr.on("data", (data) => {
  //   console.error(`stderr: ${data}`);
  // });

  console.log(process.cwd());
  // fs.readdir(process.cwd() + "/resources/extraResources", (err, files) => {
  //   files.forEach((file) => {
  //     console.log(file);
  //   });
  // });

  const { performance } = require("perf_hooks");

  //console.log('performance', performance.now());

  //  Use this in electron:serve mode for linux
  const spawn = require("child_process").spawn,
    fish = spawn(
      process.cwd() + "/public/stockfish/stockfish_13_linux_x64_bmi2"
    );

  //  Use this in electron:build mode for linux
  // const spawn = require("child_process").spawn,
  //   fish = spawn(
  //     process.cwd() + "/resources/extraResources/stockfish_13_linux_x64_bmi2"
  //   );

  //  Use this in electron:serve mode for windows
  // const spawn = require("child_process").spawn,
  //   fish = spawn(
  //     process.cwd() + "/public/stockfish/stockfish_13_win_x64_bmi2.exe"
  //   );

  //  Use this in electron:build mode for windows
  // const spawn = require("child_process").spawn,
  //   fish = spawn(
  //     process.cwd() + "/resources/extraResources/stockfish_13_win_x64_bmi2.exe"
  //   );

  // let dataString = "";
  fish.stdout.on("data", function (data) {
    // dataString += data.toString();
    //sendMessage({message: 'python', body: 'received data from python'});
    let toSend = "";
    for (let i = 0; i < data.length; i++) {
      toSend += String.fromCharCode(data[i]);
    }
    console.log(toSend);
    if (toSend.indexOf("Nodes") !== -1) {
      console.log(performance.now() - now);
      //fish.kill('SIGINT');
    }
    //let ind=toSend.indexOf('{');
    // if (ind!==-1) {toSend=toSend.slice(ind)}
    // toSend = toSend.replace(/\r?\n|\r/g, '');
    // sendMessage({message: 'python', body: {fromPy: toSend}});
  });
  fish.stdout.on("end", function () {
    console.log("end");
    //sendMessage({message: 'python', body: dataString});
  });

  let now = performance.now();

  //fish.stdin.write('position fen r2qk2r/1p1bb1pp/p2pQp2/2p2N2/5P2/1P1PP1P1/PBP4P/R3K3 w Qkq -'+'\r\n');
  //fish.stdin.write('setoption name hash value 1024'+'\r\n');
  //fish.stdin.write('go perft 6'+'\r\n');
  //fish.stdin.write('uci'+'\r\n');
  fish.stdin.write("setoption name threads value 1" + "\r\n");
  fish.stdin.write(
    "position fen rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1" +
      "\r\n"
  );
  fish.stdin.write("go movetime 2000" + "\r\n");
  //fish.stdin.write('go perft 6'+'\r\n');
} catch (err) {
  console.log(err);
}
export default {};
</script>
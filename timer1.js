// node timer1.js 10 3 5 15 9
// This will make it beep at:

// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds

// beep not working
process.stdout.write('\x07');

const args = process.argv.slice(2);
let max = 0;

args.forEach(
  el => {
    const num = Number(el);
    if (num > max) {
      max = num;
    }
  }
);
args.push(max + 1);

args.forEach(
  el => {
    setTimeout(() => {
      el === max + 1 ?
        process.stdout.write('ALARM!!!\n') :
        process.stdout.write(el + '\tseconds\n');
    }, Number(el) * 1000);
  });


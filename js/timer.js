// class CountdownTimer {
//     constructor({selector, targetDate}) {
//         this.targetDate = targetDate;
//         this.secs = document.querySelector(`${selector} span[data-value="secs"]`);
//     };

//     start(){
//         const timerid = setInterval(() => {
//             const differenceTime = this.targetDate;
//             if (differenceTime > 0) {
//                 this.secs.textContent = differenceTime - 1
//             } else {
//                 this.secs.textContent = "00";
//                 clearInterval(timerid)
//             }
            
//         }, 1000);
            
//     };
// };

// const newTimer1 = new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: 30,
// });
// const newTimer2 = new CountdownTimer({
//     selector: '#timer-2',
//     targetDate: new Date('aug 19, 2021'),
// });
// newTimer1.start()
// newTimer2.start()
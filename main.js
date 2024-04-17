//task 1
// async function iterateWithAsyncAwait(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//   }
// }

// function wait(ms) {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       resolve();
//     }, ms)
//   );
// }
// async function iterateWithAsyncAwait(array) {
//   for (let a of array) {
//     console.log(a);
//     await wait(1000);
//   }
// }

// iterateWithAsyncAwait([1, 2, 3, 4]);

//task 2
// async function awaitCall() {
//   let data = await fetch("https://api.github.com/users/marwalamouri");
//   console.log(await data.json());
// }
// awaitCall();

//task 3
//1
// async function awaitCall() {
//   try {
//     let data = await fetch("https://api.github.com/users/marwalamouri");
//     console.log(await data.json());
//   } catch (error) {
//     console.log(`error is: ${error}`);
//   }
// }
// awaitCall();

//2
// function function1() {
//   console.log("message from function1");
// }
// function function2() {
//   console.log("message from function2");
// }
// function function3() {
//   console.log("message from function3");
// }
// async function chainedAsyncFunctions() {
//   setTimeout(async () => {
//     await function1();
//   }, 1000);
//   setTimeout(async () => {
//     await function2();
//   }, 2000);

//   setTimeout(async () => {
//     await function3();
//   }, 3000);
// }

// chainedAsyncFunctions();

// async function delay(duration) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, duration);
//   });
// }

// async function chained() {
//   await delay(1000);
//   function1();
//   await delay(1000);
//   function2();
//   await delay(1000);
//   function3();
// }
// chained();

//task4
// async function concurrentRequests() {
//   let firstApi = await fetch("https://api.github.com/users/marwalamouri");
//   let secondApi = await fetch("https://api.github.com/users/BoubakerSaif");
//   let firstObj = await firstApi.json();
//   let secondObj = await secondApi.json();
//   console.log(await Promise.all([firstObj, secondObj]));
// }
// concurrentRequests();

// task5
async function concurrent() {
  let urls = [
    "https://api.github.com/users/marwalamouri",
    "https://api.github.com/users/BoubakerSaif",
  ];
  let promises = urls.map((url) => {
    return fetch(url).then((response) => response.json());
  });
  let data = await Promise.all(promises);
  console.log(data);
}
concurrent();

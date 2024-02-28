export const Data = async() =>{
  const response =  await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
     })
     return await response.json();
}

// export const Data = async() =>{
//  const response=  fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "GET",
//   })
//   return await response.json();
// }
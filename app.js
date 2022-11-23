const endDate = "24 nov 2022 10:30 PM"
document.getElementById("date").innerText = endDate;


function clock() {
  const end= new Date(endDate) 
  const now = new Date() 
  const inputs = document.querySelectorAll("inputs")
//   console.log(end,now);
const diff = (end - now)/1000;
  inputs[0].value = Math.floor(diff/3600/24)
// console.log(diff)

}
clock();
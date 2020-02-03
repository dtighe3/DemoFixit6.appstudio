let name = "Bob"
let names = ["Bob","Mary","Sue"]

btnShowMsg.onclick=function(){
  console.log(`My best friend is ${names[0]}`)
  lblMsg.textContent = `Another friend is ${names[2]}.`
    alert(`The second friend is named ${names[1]}.`)
}

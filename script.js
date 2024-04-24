let leftcurrencybutton = document.querySelectorAll('.leftcurrency button');
let rightcurrencybutton = document.querySelectorAll('.rightcurrency  button');
let firstpartinput = document.querySelector('.firstpart input');
let secondpartpartinput= document.querySelector('.secondpart input');
let allButton = document.querySelectorAll('button')
let leftWorkspace=document.querySelector('.leftworkspace')
let rightWorkspace=document.querySelector('.rightworkspace')
let result = (option1,option2)=> {
let changecurrency1 = document.querySelector('.leftcurrency  .changecurrency')
let changecurrency2 = document.querySelector('.rightcurrency .changecurrency')
let firstvalue;
let secondvalue;
fetch('https://v6.exchangerate-api.com/v6/6fc87da6cc6f97464611538f/latest/USD')
.then((response)=>response.json())
.then(data=>{
firstvalue=data.conversion_rates[changecurrency1.textContent]
secondvalue=data.conversion_rates[changecurrency2.textContent]
if(option1===1){
secondpartpartinput.value= Math.round(((option2 * secondvalue) / firstvalue)* 1000) / 1000
}else{
leftWorkspace.textContent=`1${changecurrency1.textContent} = ${Math.round(((option2 * secondvalue) / firstvalue) * 1000) / 1000} ${changecurrency2.textContent} `
rightWorkspace.textContent=`1${changecurrency2.textContent} = ${Math.round(((option2 * firstvalue) / secondvalue) * 1000) / 1000} ${changecurrency1.textContent} `
    }
})}
firstpartinput.value = "5000";
result(1, 5000);
leftcurrencybutton.forEach((e) => {
e.addEventListener('click', ()=> {
        const changecurrency11 = document.querySelector('.leftcurrency  .changecurrency')
        const changecurrency12 = document.querySelector('.rightcurrency .changecurrency')
        changecurrency11.classList.remove('changecurrency')
        e.classList.add('changecurrency')
        result(2,1)
    })
});
rightcurrencybutton.forEach((e) => {
    e.addEventListener('click', ()=> {
        const changecurrency12 = document.querySelector('.rightcurrency .changecurrency')
        changecurrency12.classList.remove('changecurrency')
        e.classList.add('changecurrency')
        result(2,1)
    })
});
firstpartinput.addEventListener('change', () => {   
    result(1,Number(firstpartinput.value));
})
allButton.forEach((e) => {
    e.addEventListener('click', () => {
        result(1,Number(firstpartinput.value));
    })
})

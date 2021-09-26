const api_url = 'https://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&appid=5f2a58263f6d5cdce4426bbfa9cf423f';
const label = document.getElementById("label");
const btn = document.getElementById("btn");
const displayInfo = document.getElementById("displayInfo");

const balance_url ="https://stacks-node-api.testnet.stacks.co/extended/v1/address/SP31DA6FTSJX2WGTZ69SFY11BH51NZMB0ZW97B5P0.get-info/stx";


async function getBalance(){
    const response = await fetch(balance_url);
    const accountInfo = await response.json();
    
    act.addEventListener("click",function(){
        displayInfo.innerHTML = accountInfo.balance;
   });
    
}
getBalance().catch((error) => {
    console.error('Error:',error);
});


async function predictWeather(){
    const response = await fetch(api_url);
    const data = await response.json();

    btn.addEventListener("click", function(){
    label.innerHTML =  data.main.temp;
});

}
predictWeather().catch((error) => {
    console.error('Error:',error);
});




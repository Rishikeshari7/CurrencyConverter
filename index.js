// console.log(countryList);
const dropMenu=document.querySelectorAll(".dropdown select");
// const optionSelect=document.querySelectorAll("option");
const fromCurr=document.querySelector(".from");
const toCurr=document.querySelector(".to");
for(let code in countryList){
    dropMenu.forEach((ele)=>{
        let option=document.createElement("option");
        option.value=code;
        option.id=countryList[code];
        // console.log(option.id);
        option.textContent=code;
        ele.appendChild(option);
        // ele.addEventListener("change",(evt)=>{
        //     console.log(evt.target.value);
        // })
    });
    
    // const optionSelect=document.querySelectorAll("option");
    // optionSelect.addEventListener("click",(ele)=>{
    //     console.log(ele);
    // })
}
dropMenu.forEach((ele)=>{
    ele.addEventListener("change",(evt)=>{
        let choseOption=evt.target;
        // console.log(evt.target.value,countryList[evt.target.value] );
        // let flag=countryList[choseOption];
        // console.log(choseOption)
        updateFlag(evt.target);
        // console.log("from ->",fromCurr.value);
        // console.log("to ->",toCurr.value);
        currencyConverter(fromCurr.value,toCurr.value);
    });
});
const updateFlag=(choseOption)=>{
    let optionValue=choseOption.value;
    let flag=countryList[optionValue];
    // console.log(optionValue);
    let img=choseOption.parentElement.querySelector("img");
    let newSrc = `https://flagsapi.com/${flag}/flat/64.png`;
    img.src=newSrc;
}

// let amount=inputValue.value;
const url =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
    async function currencyConverter(from,to){
        let response = await fetch(`${url}/${from.toLowerCase()}/${to.toLowerCase()}.json`);
        // console.log(response);
        let data=await response.json();
        let rate=data[to.toLowerCase()];
        
        
    //    let finalExchange=amount*rate;
       
            let button=document.querySelector("button");
            button.addEventListener("click",(evt)=>{
            evt.preventDefault();
            const amount=document.querySelector("input").value;
            const finalExchange=amount*rate;
            console.log(rate, amount);
            let msgShow=document.querySelector(".msg");
            msgShow.innerHTML=`${amount} <i>${from}</i>=${finalExchange.toFixed(2)} <i>${to}</i>`;
            console.log("button touch");
            console.log(from)
            });
    };
    window.addEventListener("load", () => {
        currencyConverter(fromCurr.value,toCurr.value);
      });

    



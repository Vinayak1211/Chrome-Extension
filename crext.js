const box=document.getElementById("button")
let myleads = []
const inputel=document.getElementById("input")
const uli=document.getElementById("ulel")
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myleads") )
if (leadsFromLocalStorage) {
    myleads = leadsFromLocalStorage
    renderleads()
}
// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]
const sav=document.getElementById("save")
sav.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myleads))
        renderleads()
    })
    
})
const dele=document.getElementById("del")
dele.addEventListener("dblclick",function(){
    localStorage.clear()
    myleads=[]
    renderleads()
})
box.addEventListener("click",function(){
    console.log("Button clicked")
    myleads.push(inputel.value)
    localStorage.setItem("myleads",JSON.stringify(myleads))
    renderleads()
    inputel.value=""
    console.log(myleads)
})
function renderleads(){
let listitems=""
for(let i=0;i<myleads.length;i++){
    listitems += `
    <li>
        <a target='_blank' href='${myleads[i]}'>
            ${myleads[i]}
        </a>
    </li>
`
}

uli.innerHTML=listitems
}
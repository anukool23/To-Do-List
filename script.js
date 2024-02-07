let form = document.querySelector("#todoForm")
let tbody = document.querySelector("#tbody")
let data=[];

form.addEventListener('submit', function(event){
    htmlData(event)
})

function htmlData(event){
    event.preventDefault()
    let todo = event.target[0].value
    let prio = event.target[1].value
        let obj={
            id : generateRandon(),
            todoName : todo,
            priority : prio,
            status : false
        }


        data.push(obj)

        showToDOData(data)

    
}
function generateRandon(){
    let flag=(Math.floor((Math.random())*100)).toString()
    console.log(`Generated ID is ${flag}`)
    return flag;
}

console.log(`The data in to do array are ${data}`)


function showToDOData(data){
    tbody.innerHTML= "";

    data.forEach(function (ele, i){
        let tr=document.createElement('tr')

        let td1=document.createElement('td')
        td1.innerHTML=i+1

        let td2=document.createElement('td')
        td2.innerHTML=ele.todoName

        let td3=document.createElement('td')
        td3.innerHTML=ele.priority


        tr.append(td1 , td2 , td3 )
       tbody.append(tr)
    })
}
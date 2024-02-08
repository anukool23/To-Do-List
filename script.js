let form = document.querySelector("#todoForm")   //storing form element
let tbody = document.querySelector("#tbody")    //storing table body element
let data=[];


//Adding event listener to collect the form data on the click of submit
form.addEventListener('submit', function(event){
    htmlData(event)
})

// Function to read form data and store it in array
function htmlData(event){
    event.preventDefault()
    let todo = event.target[0].value  //For storing todo from form
    let prio = event.target[1].value    //for storing priority from the form
        let obj={
            id : generateRandon(),
            todoName : todo,
            priority : prio,
            status : false
        }
        data.push(obj)

        showToDOData(data)
}

//Function to  generate random number between 1 to 99 to store it in ID 
function generateRandon(){
    let flag=(Math.floor((Math.random())*100)).toString()
    console.log(`Generated ID is ${flag}`)
    return flag;
}

//Function to display the to do in table
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

        let td4=document.createElement('td')
        let statusBtn = document.createElement("button")
        statusBtn.innerHTML = ele.status ? "Task Completed" : "Task Incomplete"
        statusBtn.style.backgroundColor = ele.status ? "green" : "red";
        statusBtn.addEventListener('click', function(){
            ele.status ? ele.status = false : ele.status = true
            statusBtn.innerHTML = ele.status ? "Task Completed" : "Task Incomplete"
            statusBtn.style.backgroundColor = ele.status ? "green" : "red";
        })
        td4.append(statusBtn)

        let td5=document.createElement('td')
        let delBtn = document.createElement("button")
        delBtn.innerHTML="Delete"
        delBtn.addEventListener('click', function(){
            
        })
        td5.append(delBtn)


        tr.append(td1 , td2 , td3, td4, td5 )
       tbody.append(tr)
    })
}
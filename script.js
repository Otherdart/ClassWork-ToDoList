const TaskInput = document.querySelector('#taskInput');
const Priority = document.querySelector('#prioritysel');
const listCon = document.querySelector('.listCon');
const DisplayContaine = document.querySelector('.displayContainer');
const HighPriority = document.querySelector('.High');
const MediumPriority = document.querySelector('.Medium');
const LowPriority = document.querySelector('.Low');
const btn = document.querySelector('#btn');
const delbtn = document.querySelector('#delbtn')



btn.addEventListener('click', addtask);



function addtask(){

    if(TaskInput.value === ''){
        console.log(TaskInput);
        alert("Please enter something on the box!")
    }
    else{
        getOption();
        function getOption() {

            output = Number(Priority.value);
            
            if (output == 1){

                let newtask = document.createElement('div');
                newtask.className = `task${output}`;
                newtask.innerText = TaskInput.value;
                HighPriority.appendChild(newtask);
                newtask.addEventListener('click', () => {

                    const targetDiv = document.querySelector('#done');
                    targetDiv.appendChild(newtask);
                    console.log(targetDiv);

                    

                });

                // targetDiv.addEventListener('click',()=>{
                //     const targetDiv = document.querySelector('#done');
                //     let ts1 = targetDiv.querySelector('.task1')
                //     ts1.appendChild(HighPriority);

                // })
                // const Task1 = document.querySelector('.task1');
                // const btn = document.createElement("button");
                // btn.innerHTML = "X";
                // btn.className = "TaskDel";
                // Task1.appendChild(btn);
                // console.log(HighPriority);

            }

            else if (output == 2){

                let newtask = document.createElement('div');
                newtask.className = `task${output}`;
                newtask.innerText = TaskInput.value;
                MediumPriority.appendChild(newtask);
               
                newtask.addEventListener('click', () => {

                    const targetDiv = document.querySelector('#done');
                    targetDiv.appendChild(newtask);
                    

                });

            } else if (output == 3){

                let newtask = document.createElement('div');
                newtask.className = `task${output}`;
                newtask.innerText = TaskInput.value;
                LowPriority.appendChild(newtask);
                
                newtask.addEventListener('click', () => {

                    const targetDiv = document.querySelector('#done');
                    targetDiv.appendChild(newtask);
                    

                });
                

            }
            
           
                
        }
        

        }

}

// returndata();

// function returndata(){


//     newtask.addEventListener('click', () => {

//         const targetDiv = document.querySelector('#done');
//         targetDiv.appendChild(newtask);
        

//     });
    


// }


deldata();


function deldata(){

    delbtn.addEventListener('click', function() {

        const removeButton = document.getElementById('delbtn');
    
        removeButton.addEventListener('click', function() {
            const div = document.getElementById('done');
            div.replaceChildren();
            
    }
)
})

}





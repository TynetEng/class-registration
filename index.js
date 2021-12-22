let details = [];
        i = 0
            
        if(localStorage.getItem('register')){
            let b = localStorage.getItem('register')
            console.log(JSON.parse(b));
            details = JSON.parse(b);
            classDetails();
        }
        
        
        function classDetails(){
            table.innerHTML = ''
            table.innerHTML = `<th>S/N</th><th>Surname</th><th>First Name</th><th>Sex</th><th>Age</th><th>Remove Details</th>`
            for(let i=0; i<details.length; i++){
                
                table.innerHTML += `
                 <td>${i+1}</td>
                 <td>${details[i].name}</td>
                 <td>${details[i].fName}</td>
                 <td>${details[i].sex}</td>
                 <td>${details[i].age}</td>
                 <td><button onclick= del(${i})>DELETE</button></td>
                `
            }
            
        }
        
        function add(){
            let inpt1 = document.getElementById('inp1').value;
            let inpt2 = document.getElementById('inp2').value;
            let inpt3 = document.getElementById('inp3').value;
            let inpt4 = document.getElementById('inp4').value;
            
            let obj = {name: inpt1,fName:inpt2, sex:inpt3,age:inpt4}
            

            details.push(obj)
            console.log(details);
                loop()
            
            localStorage.setItem('register', JSON.stringify(details))
            let b = localStorage.getItem('register');
            console.log(JSON.parse(b));
        }
        function loop() {
            table.innerHTML += `
                 <td>${i+1}</td>
                 <td>${details[i].name}</td>
                 <td>${details[i].fName}</td>
                 <td>${details[i].sex}</td>
                 <td>${details[i].age}</td>
                 <td><button>DELETE</button></td>`
            i++; 
        }

        function del(params){
            details.splice(params,1)
            console.log(details);

            // if(localStorage.removeItem('register')){
            //     let c = localStorage.removeItem('register')
            //     console.log(JSON.parse(c));
            //     details = JSON.parse(c)

            // }
            classDetails()

            
        }
        
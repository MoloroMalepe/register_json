const myObj = {name:'moloro',
                age:25,
                married:false,
                city:'johannesburg',

                //getter method
                get years(){
                    return this.age;
                },

                //setter method
                set secname(secname){
                   this.name  = secname;
                }
            };//javascrip object
//document.getFieldById('moloro').innerHTML = myObj.age;
            console.log(myObj.years);

            //setting name to stephanie
            myObj.secname = 'stephanie';
            console.log(myObj.name);




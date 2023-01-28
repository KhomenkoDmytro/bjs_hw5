let firstName=prompt('What`s your name?', '');
let lastName=prompt('What`s your surname?', '');
let newUser=createNewUser(firstName, lastName);

console.log(newUser.getLogin());

function createNewUser(firstName, lastName){
    let newUser={
        firstName,
        lastName,
        getLogin: function(){
            return (this.firstName.charAt(0)+this.lastName).toLowerCase();
        },
        set setFirstName(value){
            this.firstName=value;
        },
        set setLastName(value){
            this.lastName=value;
        }
    };
    return newUser;
}
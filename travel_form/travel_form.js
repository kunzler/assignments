var userForm = document.userForm
userForm.addEventListener("submit", function(e){
    event.preventDefault()
    var firstName = userForm.firstName.value
    var lastName = userForm.lastName.value
    var age = userForm.age.value
    var gender = userForm.gender.value
    var destination = userForm.destination.value
    var dietary = userForm.dietary
    var checkedDiet = []

    for (i = 0; i < dietary.length; i++ ){
        if(dietary[i].checked){
        checkedDiet.push(dietary[i].value )   }
    }
    // console.log(`diet object: ${dietary.length} `)
    alert(`
        Name: ${firstName} ${lastName}
        Age: ${age}
        Gemder: ${gender}
        Destination: ${destination}
        Food Notes: ${checkedDiet}

        `)
} )
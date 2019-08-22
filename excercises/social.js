var canvasser = {
    name: "Tallan",
    age: 33,
    neighborhoodsWalked: [
        {
            neighborhood: "Washington",
            doorsKnocked: 55,
        
        },
        {
            neighborhood: "Martin Luther King",
            doorsKnocked: 55
        },
    ],
    script: function () {
        console.log("Have you heard the good word of Vermin Supreme?");
    },

    walkingBuddies: [
        {
            name: "Tony",
            age: 27,
            neighborhoodsWalked: [
                {
                    neighborhood: "Washington",
                    doorsKnocked: 55
                },            ]
        },
        {
            name: "Totimny",
            age: 27,
            neighborhoodsWalked: [
                {
                    neighborhood: "Neujork",
                    doorsKnocked: 66
                }, 
                {
                    neighborhood: "Bible Thumberville",
                    doorsKnocked: 7
                },           
            ]

        },
        {
            name: "Notianni",
            age: 27,
            neighborhoodsWalked: [
                {
                    neighborhood: "Snartville",
                    doorsKnocked: 20
                },            
            ]  
        },
    ]
}
canvasser.complaints = 2
canvasser.hoursWorked = 10

canvasser.neighborhoodsWalked.push({
    neighborhood: "Springville",
    doorsKnocked: 9
}, {
    neighborhood: "Riversideshire",
    doorsKnocked: 55
}  
)

canvasser.script()
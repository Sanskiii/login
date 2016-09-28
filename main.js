var objPeople = [
  {
    username: "joshua",
    password: "p@ssw0rd"
  },
  {
    username: "josh",
    password: "p@ssw0rd"
  },
   {
    username: "roxy",
    password: "p@ssw0rd"
  },
   {
    username: "josh",
    password: "p@ssw0rd"
  },
   {
    username: "camille",
    password: "p@ssw0rd"
  },
   {
    username: "abby",
    password: "p@ssw0rd"
  },
   {
    username: "debra",
    password: "p@ssw0rd"
  },
   {
    username: "debby",
    password: "p@ssw0rd"
  },
   {
    username: "chris",
    password: "p@ssw0rd"
  },
   {
    username: "manny",
    password: "p@ssw0rd"
  },
   {
    username: "vladimir",
    password: "p@ssw0rd"
  },
   {
    username: "john",
    password: "p@ssw0rd"
  },
   {
    username: "johnathan",
    password: "p@ssw0rd"
  },
   {
    username: "justin",
    password: "p@ssw0rd"
  }
]

function getInfo() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  // console.log("Your username is " + username + " and your password is " + password)
  for (var i = 0; i < objPeople.length; i++) {
    if (username == objPeople[i].username && password == objPeople[i].password) {
      console.log("You are logged in!")
    } else {
      console.log("YOU FAILED!")
    }
  }
}
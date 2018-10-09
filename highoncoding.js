
let container1 = document.createElement("div")
container1.setAttribute("class","container1")
container1.setAttribute("id", "container1")
document.getElementById("container").append(container1)

let h1 = document.createElement("h1")
let h1Text = document.createTextNode("HighOnCoding")
h1.className = "highOnCoding"
h1.appendChild(h1Text)
document.getElementById("container1").appendChild(h1)

let p1 = document.createElement("div")
let p1Text = document.createTextNode("Home")
p1.className = "Home"
p1.appendChild(p1Text)
document.getElementById("container1").appendChild(p1)

let p2 = document.createElement("div")
let p2Text = document.createTextNode("Categories")
p2.className = "Categories"
p2.appendChild(p2Text)
document.getElementById("container1").appendChild(p2)

let container2 = document.createElement("div")
container2.setAttribute("class","container2")
container2.setAttribute("id", "container2")
document.getElementById("container").append(container2)

let h2 = document.createElement("h1")
let h2Text = document.createTextNode("Curse of the Current Reviews")
h2.className = "curse"
h2.appendChild(h2Text)
document.getElementById("container2").appendChild(h2)

let cursePara = document.createElement("div")
let  paraCont = document.createTextNode("When you want to buy any appication from the Apple iTunes store you have more chouces than you can handle. Most of the users scroll past the application description completely avoiding it like on ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.")
cursePara.className = "cursePara"
cursePara.appendChild(paraCont)
document.getElementById("container2").appendChild(cursePara)

let container3 = document.createElement("div")
container3.setAttribute("id", "container3")
container3.setAttribute("class", "container3")
document.getElementById("container").append(container3)

let h3 = document.createElement("h1")
let h3Text = document.createTextNode("Hello WatchKit")
h3.className = "helloWatchkit"
h3.appendChild(h3Text)
document.getElementById("container3").appendChild(h3)

let watchkitPara = document.createElement("div")
let watchCont = document.createTextNode("Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.")
watchkitPara.className = "watchkitPara"
watchkitPara.appendChild(watchCont)
document.getElementById("container3").append(watchkitPara)

let likesBar = document.createElement("div")
let barCont = document.createTextNode("12 comments             124 likes")
likesBar.className="likesBar"
likesBar.appendChild(barCont)
document.getElementById("container3").append(likesBar)


let container4 = document.createElement("div")
container4.setAttribute("id", "container4")
container4.setAttribute("class", "container4")
document.getElementById("container").append(container4)

let h4 = document.createElement("h1")
let h4Text = document.createTextNode("Introduction to Swift")
h4.className = "helloWatchkit"
h4.appendChild(h4Text)
document.getElementById("container4").appendChild(h4)

let introPara = document.createElement("div")
let introCont = document.createTextNode("Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.")
introPara.className = "watchkitPara"
introPara.appendChild(introCont)
document.getElementById("container4").append(introPara)

let likesBar2 = document.createElement("div")
let barCont2 = document.createTextNode("15 comments             45 likes")
likesBar2.className="likesBar"
likesBar2.appendChild(barCont2)
document.getElementById("container4").append(likesBar2)

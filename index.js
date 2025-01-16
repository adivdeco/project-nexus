const container =document.querySelector(".container");
const quotes    = document.querySelector(".quotes > h5")



const randomQuotes = [
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "What you get by achieving your goals is not as important as what you become by achieving them. – Zig Ziglar",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Opportunities don't happen. You create them. – Chris Grosser",
    "The secret of getting ahead is getting started. – Mark Twain",
    "Setting goals is the first step in turning the invisible into the visible. – Tony Robbins",
    "I never dreamed about success. I worked for it. – Estée Lauder",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Aim for the moon. If you miss, you may hit a star. – W. Clement Stone",
    "Great things are not done by impulse, but by a series of small things brought together. – Vincent van Gogh",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. – William James",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Discipline is the bridge between goals and accomplishment. – Jim Rohn",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Dream big and dare to fail. – Norman Vaughan"
  ];
  
// const imgArray = ["1","2","3","4","5","6"]
const imgArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"]





// Preload images
// imgArray.forEach(img => {
//     const imgElement = new Image();
//     imgElement.src = `img/${img}`;
// });



// setInterval(() => {
//     const num = Math.floor(Math.random()* randomQuotes.length)
//      quotes.style.opacity = 0;

//         setTimeout(() => {
//             quotes.style.opacity = 1;
//             quotes.innerHTML=randomQuotes[num]
//             console.log(num);
            

//         }, 300);

//       const num2 = Math.floor(Math.random()*imgArray.length)
//       container.style.opacity = 0;
//         setTimeout(() => {
//             container.style.opacity = 1;
//             container.style.backgroundImage = `url(img/${imgArray[num2]})`
//            console.log(num2);
           
//         }, 300);
// }, 5000)



// login page after passward applied....

const loginContainer = document.querySelector(".login-container");
const loginBtn       = document.querySelector(".login-btn");
const loginform      = document.querySelector("#login-form")
const page1          = document.querySelector(".page1")
const pg1            = document.querySelector("#pg1")
const bottomrow      = document.querySelector(".bottom-row")
const navbar         = document.querySelector(".navbar")
const pg2            = document.querySelector("#pg2")
pg2Footer            = document.querySelector(".pg2-footer")



const backend = (event) => {
  const email = loginform.querySelector('input[name="email"]').value;
  const password = loginform.querySelector('input[name="password"]').value;

  if (email === "sadiv120@gmail.com" && password === "1234") {
    pg1.style.display = "none";
    console.log("Login successful:", email, password);
    loginContainer.style.display="none";
    container.style.display="none";
    bottomrow.style.display="none";
    loginBtn.style.display="none";
    navbar.style.height   ="6.3%";
    navbar.style.position  = "relative"
    navbar.style.aligItem = "center"
    pg2.removeAttribute("id");
    pg2Footer.style.display = "block";

    
  } else {
    console.log("Invalid credentials");
    alert("Invalid email or password. Please try again.");
  }
};
// Attach the event listener to the form
loginform.addEventListener("submit", backend);



//draft page logic = for opneaing....
const draftFile = document.querySelector(".draft-files > ul > li:first-child");
const drftpg    = document.querySelector("#drftpg");
const backbtn = document.querySelector(".backbtn");

function draftpagelogic(draftFile,drftpg,backbtn){

const draftthing = (event)=>{
  drftpg.removeAttribute("id");
};
draftFile.addEventListener("click",draftthing)


// back button ❌
backbtn.addEventListener("click",()=>{
  drftpg.setAttribute("id","drftpg");
})
}

draftpagelogic(draftFile,drftpg,backbtn)




//  login page logic. for opeaning or cloasing..

function loginpage (loginBtn,loginContainer){

loginBtn.addEventListener("click",(event)=>{

  loginContainer.style.display = "block";
  event.stopPropagation(); // Prevent event from propagating to body
})

document.body.addEventListener("click",()=>{
  // loginContainer.style.display = "none";
  if (!loginContainer.contains(event.target)) {
    loginContainer.style.display = "none";
    
  }
})

// Prevent hiding when clicking inside the login container
loginContainer.addEventListener("click", (event) => {
  event.stopPropagation();

});

}
loginpage(loginBtn,loginContainer);



// filter button opning and closing logic
const filter = document.querySelector(".filter");
const filterContainer = document.querySelector(".filter-container");

function filterlogic(filter,filterContainer){
 
filter.addEventListener("click",(event)=>{
  filterContainer.style.display = "block";
  event.stopPropagation();

})

document.body.addEventListener("click",()=>{
  // loginContainer.style.display = "none";
  if (!filterContainer.contains(event.target)) {
    filterContainer.style.display = "none";
    
  }
})  
}
filterlogic(filter,filterContainer)



// menu bar come from left 

const sideMenu = document.querySelector(".side-menubar")
const menuIcon = document.querySelector("#menu-icon")
const closeContainer = document.querySelector(".close-container") 

function menulogic(sideMenu,menuIcon,closeContainer){

menuIcon.addEventListener("click",()=>{
  sideMenu.style.left="0%";
  sideMenu.style.opacity = "1"
  
})

closeContainer.addEventListener("click",()=>{
   sideMenu.style.left="-33%"
   sideMenu.style.opacity = "0"
})
}
menulogic(sideMenu,menuIcon,closeContainer)






// backend data taker from form input field..
// or put in draft file
const inpheadlines = document.querySelector('.headline>input');
const inputdata = document.querySelector('.blog-data-input>textarea');
const adddataIndraft = document.querySelector('.draft-btn');

adddataIndraft.addEventListener("click", () => {
  // Create the draft box container
if (inpheadlines.value === "" || inputdata.value === "") {
  alert("bkl data to daal lee 😡 .");
  return;
}
else{  const draftBox = document.createElement("div");
  draftBox.className = "draft-box";

  // Create the heading
  const heading = document.createElement("h3");
  heading.textContent = inpheadlines.value;

  // Create the paragraph
  const paragraph = document.createElement("p");
  paragraph.textContent = inputdata.value;
    
  // Append heading and paragraph to the draft box
  draftBox.appendChild(heading);
  draftBox.appendChild(paragraph);

  // Append the draft box to the draft=page
  const draftPage = document.querySelector(".draft-page");
  draftPage.insertBefore(draftBox, draftPage.firstChild);

   // Clear the input fields
 inpheadlines.value = '';
 inputdata.value = '';
}

});


// help to add data/blogs in blogs of page 1 /recent blogs

const adddataINrecent = document.querySelector('.recent-btn');

adddataINrecent.addEventListener("click", () => {

  if (inpheadlines.value === "" || inputdata.value === "") {
    alert("bkl data to daal lee 😡 .");
    return;
  }

  else{
    const blogsOfPg1 = document.querySelector(".blogs-of-pg1");
    // recent blog......
      const blogsCard = document.createElement('div');
    blogsCard.className = 'blogs-card';
    
    const blogsImg = document.createElement('div');
    blogsImg.className = 'blogs-img';
    
    const blogsData = document.createElement('div');
    blogsData.className = 'blogs-data';
    
    // const blogDate = document.createElement('div')
    // blogDate.className = "date";
    // blogDate.innerHTML = date1;
    
    const heading = document.createElement('h1');
    heading.textContent = inpheadlines.value;
    
    const paragraph = document.createElement('p');
    paragraph.textContent = inputdata.value;
    
    // blogsData.appendChild(blogDate);
    blogsData.appendChild(heading);
    blogsData.appendChild(paragraph);
    blogsCard.appendChild(blogsImg);
    blogsCard.appendChild(blogsData);
    blogsOfPg1.insertBefore(blogsCard, blogsOfPg1.firstChild);

  //   // Clear the input fields
    inpheadlines.value = '';
    inputdata.value = '';
  }    

})


//add data in top headline / sliders 

const slidersBox = document.createElement('div');
slidersBox.className = 'sliders-box';
const adddataInheadline = document.querySelector('.headline-btn');

adddataInheadline.addEventListener("click", () => {
  if (inpheadlines.value === "" || inputdata.value === "") {
    alert("bkl data to daal lee 😡 .");
    return;
  }
  else{
      const slidersCard = document.createElement('div');
      slidersCard.className = 'sliders-card';

      const sliderImg = document.createElement('div');
      sliderImg.className = 'slider-img';

      const sliderTxt = document.createElement('div');
      sliderTxt.className = 'slider-txt';
      sliderTxt.textContent = inpheadlines.value;

      slidersCard.appendChild(sliderImg);
      slidersCard.appendChild(sliderTxt);
      
      const slidersBox= document.querySelector(".sliders-box")
      slidersBox.insertBefore(slidersCard, slidersBox.firstChild);

      // Clear the input fields
      inpheadlines.value = '';
      inputdata.value = '';
  }

})




 const backbtn2= document.querySelector("#backbtn");

backbtn2.addEventListener("click",()=>{
  pg2.setAttribute("id","pg2");
  pg2Footer.style.display = "none";
  loginContainer.style.display="block";
  container.style.display="flex";
  bottomrow.style.display="block";
  loginBtn.style.display="block";
  navbar.style.height   ="12.7%";
  navbar.style.position  = "fixed";
  page1.style.display = "block";
  
  
})

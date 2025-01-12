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


// top headline , sliders 
const slidersBox = document.createElement('div');
slidersBox.className = 'sliders-box';

for (let i = 0; i <7; i++) {
  
const slidersCard = document.createElement('div');
slidersCard.className = 'sliders-card';

const sliderImg = document.createElement('div');
sliderImg.className = 'slider-img';

const sliderTxt = document.createElement('div');
sliderTxt.className = 'slider-txt';
sliderTxt.textContent = 'Lorem ipsum dolor sit.';

slidersCard.appendChild(sliderImg);
slidersCard.appendChild(sliderTxt);
slidersBox.appendChild(slidersCard)
// const slidersBox= document.querySelector(".sliders-box")
// slidersBox.appendChild(slidersCard);
const headline_box =document.querySelector(".headline-box")
headline_box.appendChild(slidersBox);
}

// recent blog which is in row..

// or timing function in blogs

const date =new Date()
const date1=(date.toLocaleDateString());
console.log(date1);

const blogsOfPg1 = document.querySelector(".blogs-of-pg1");
// recent blog......

for (let i = 0; i < 3; i++) {

  const blogsCard = document.createElement('div');
blogsCard.className = 'blogs-card';

const blogsImg = document.createElement('div');
blogsImg.className = 'blogs-img';

const blogsData = document.createElement('div');
blogsData.className = 'blogs-data';

const blogDate = document.createElement('div')
blogDate.className = "date";
blogDate.innerHTML = date1;

const heading = document.createElement('h1');
heading.textContent = 'heading';

const paragraph = document.createElement('p');
paragraph.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium suscipit veritatis id fugit dolore, vel praesentium voluptatem obcaecati aperiam, provident natus consectetur mollitia perspiciatis. Autem sapiente facere odio aliquid tempore.
Praesentium expedita at asperiores error unde excepturi distinctio. Officiis, consequuntur nobis voluptatum laboriosam sapiente dolor, ea placeat vitae unde quod ipsam officia obcaecati, repellendus quas consequatur? Corrupti ipsam minima expedita.
Maxime, eveniet dolores fuga rerum veniam culpa eum nesciunt unde natus nulla repellat temporibus facere quod eos commodi a neque id libero accusantium ab at. Aut nihil in architecto maxime?
Optio similique quo ab in vel aspernatur iste maxime sed alias tempore omnis modi, ipsam adipisci a blanditiis nihil fuga, sapiente tenetur sequi amet? Suscipit impedit asperiores nulla minus esse!
Placeat, deleniti molestias dolores vitae officia ullam deserunt voluptatum possimus provident reiciendis consectetur quo accusantium nostrum, tempore quos perferendis enim porro totam, veniam dicta non maxime! Fugiat, veniam consectetur. Iusto!
Voluptatibus omnis rem adipisci labore quibusdam dolore consectetur quidem neque fuga corrupti, ipsa rerum mollitia, dolorum sequi a laborum expedita, quaerat accusantium vero consequuntur quisquam molestias quasi in provident? Cum.
Facilis vitae hic repellat, provident unde qui, velit corrupti eveniet iure quia et nesciunt, veniam maxime itaque. Labore ullam error delectus, voluptate natus animi deleniti saepe veniam in aliquid. Natus?
Quia quas earum et ipsum unde numquam ex veniam facilis minus suscipit. Iusto nemo voluptatum minima adipisci ducimus dolorum odio numquam perferendis, rem animi ipsa architecto quam totam eligendi asperiores!
Temporibus placeat quae voluptate? Amet fugiat commodi aperiam nihil doloremque aut maxime modi! Earum odit rem officiis facilis doloribus deserunt repellendus, voluptatibus reiciendis cumque incidunt blanditiis ut, magni, inventore dolores?
Provident iusto asperiores odit illum incidunt commodi, similique debitis placeat delectus, dolorem modi hic sint earum. Corporis commodi debitis, magnam non totam reprehenderit eius. Ex fugiat excepturi fugit minus quo!
Beatae, sit delectus inventore voluptates architecto quia, doloribus quisquam minus vitae eos saepe hic accusantium laudantium dolore necessitatibus itaque commodi quidem a. Placeat sunt quod enim. Esse pariatur atque id!
Exercitationem quo similique tenetur dolores voluptatibus, ullam architecto corrupti et amet, officiis molestias perferendis id, quia enim autem quam doloribus atque animi dolor. Autem, repellendus aliquid et cum dolore quaerat!
Quisquam a, reprehenderit aut dolorum ab temporibus nemo explicabo iste sunt sed non corporis expedita assumenda illum libero. Ipsa rem iste minima vel eligendi, ducimus totam commodi fuga ad molestiae!
Quidem, voluptas ullam! Inventore at ex sint dolores, necessitatibus rem. Sit quidem modi sapiente! Culpa, totam dolore suscipit fugiat, at neque necessitatibus voluptatem beatae omnis mollitia, nesciunt dolorem eum facere.
Excepturi magnam dolor quis consectetur possimus dignissimos cumque rerum quas debitis aperiam? Impedit repellendus nemo mollitia! Earum aut aliquid, beatae minus saepe quae magni odit vel modi? Quia, fugit beatae.
Quaerat minima sint neque incidunt rem aperiam non molestias praesentium deserunt, minus quibusdam sequi quia? Veritatis doloribus maiores quam ullam corporis deleniti magnam itaque, totam beatae odit dolorem eligendi. Dolorum.
Laboriosam facere dolores earum asperiores ut a, aliquid blanditiis, quos modi, quisquam quis accusantium error iusto! Unde libero quasi voluptatum iusto rem quaerat dolor magni, quo nostrum neque quam qui.
In, aspernatur? Aliquam nihil sunt minima laborum iure illo nesciunt, enim molestias dolore ipsa tempora, mollitia aut voluptates dolores similique non obcaecati quasi saepe vero reprehenderit laboriosam provident. Enim, unde?
Iste, veniam nobis explicabo adipisci deleniti optio nulla laboriosam alias totam ab ut molestiae, mollitia incidunt earum tempora quasi. Neque saepe nobis deleniti asperiores porro, placeat quas quidem dolorum. Eligendi.
Impedit eveniet quasi veniam ut numquam quos voluptatum eius? Enim veniam cupiditate impedit repudiandae distinctio odio quaerat cum explicabo assumenda autem similique tempora consequatur necessitatibus eveniet ipsum dolorum, libero soluta.`;

blogsData.appendChild(blogDate);
blogsData.appendChild(heading);
blogsData.appendChild(paragraph);
blogsCard.appendChild(blogsImg);
blogsCard.appendChild(blogsData);
blogsOfPg1.appendChild(blogsCard);
  
}

// login page....

const loginContainer = document.querySelector(".login-container");
const loginBtn       = document.querySelector(".login-btn");
const loginform      = document.querySelector("#login-form")
const page1          = document.querySelector(".page1")
const bottomrow      = document.querySelector(".bottom-row")
const navbar         = document.querySelector(".navbar")
const backend = (event) => {
 
  const email = loginform.querySelector('input[name="email"]').value;
  const password = loginform.querySelector('input[name="password"]').value;

  if (email === "sadiv120@gmail.com" && password === "1234") {
    page1.style.display = "none"; 
    console.log("Login successful:", email, password);
    loginContainer.style.display="none";
    container.style.display="none";
    bottomrow.style.display="none";
    loginBtn.style.display="none";
    navbar.style.height   ="6.3%";
    navbar.style.position  = "relative"
    navbar.style.aligItem = "center"

    
  } else {
    console.log("Invalid credentials");
    alert("Invalid email or password. Please try again.");
  }
};

// Attach the event listener to the form
loginform.addEventListener("submit", backend);


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





// filter button
const filter = document.querySelector(".filter");
const filterContainer = document.querySelector(".filter-container");
 
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

// menu bar come from left  

const sideMenu = document.querySelector(".side-menubar")
const menuIcon = document.querySelector("#menu-icon")
const closeContainer = document.querySelector(".close-container")
menuIcon.addEventListener("click",()=>{
  sideMenu.style.left="0%";
  sideMenu.style.opacity = "1"
  
})

closeContainer.addEventListener("click",()=>{
   sideMenu.style.left="-33%"
   sideMenu.style.opacity = "0"
})

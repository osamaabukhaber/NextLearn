let instructors = [];
function loadInstructors() {
    const data = localStorage.getItem("teacher");
    //ternary operator 
    instructors = data ? JSON.parse(data) : [];
}

function saveInstructors() {
    localStorage.setItem("teacher", JSON.stringify(instructors));
}
const currentInstructor =JSON.parse(localStorage.getItem("loggedTeacher"));
function updateLoggedInstructor(updatedInstructor) {
    loadInstructors();
    const index = instructors.findIndex(ins => ins.email === updatedInstructor.email);

    if (index !== -1) {
        instructors[index] = updatedInstructor;
        saveInstructors();
    } else {
        throw "Instructor not found for update.";
    }
}
//################### Local Storage end ########################

/* two mehthod to make transiation ############*/
function setTransionMultiElem(elem)
{
    for(let i = 0; i < elem.length; i++) {
        // Set initial styles
        updateStyleAtrributes(elem[i], "background-size", "200% 100%");
        updateStyleAtrributes(elem[i], "background-position", "100% 0");
        updateStyleAtrributes(elem[i], "transition", "background-position 2s linear .5s");
        // Hover in
        elem[i].addEventListener("mouseover", function (eve) {
            eve.preventDefault()
            updateStyleAtrributes(elem[i], "background-image", "linear-gradient(to right, rgb(199, 212, 229) 100px, rgba(222, 61, 225, 0.97))");
            updateStyleAtrributes(elem[i], "background-position", "0 0");
            updateStyleAtrributes(elem[i], "color", "rgb(0, 0, 0)");
        });
    
        // Hover out
        elem[i].addEventListener("mouseout", function () {
            updateStyleAtrributes(elem[i], "background-image", "none");
            updateStyleAtrributes(elem[i], "background-position", "100% 0");
        });
    }
}

function setTransionForOneElem(elem)
{
    updateStyleAtrributes(elem, "background-size", "200% 100%");
    updateStyleAtrributes(elem, "background-position", "100% 0");
    updateStyleAtrributes(elem, "transition", "background-position 2s linear .5s");
    // Hover in
    elem.addEventListener("mouseover", function () {
    updateStyleAtrributes(elem, "background-image", "linear-gradient(to right, rgb(199, 212, 229) 100px, rgba(222, 61, 225, 0.97))");
    updateStyleAtrributes(elem, "border-radius", "4px");

    updateStyleAtrributes(elem, "background-position", "0 0");
    updateStyleAtrributes(elem, "color", "rgb(0, 0, 0)");
    });

    // Hover out
    elem.addEventListener("mouseout", function () {
    updateStyleAtrributes(elem, "background-image", "none");
    updateStyleAtrributes(elem, "border-radius", "4px");
    updateStyleAtrributes(elem, "background-position", "100% 0");
    });
}

function setAnimationFormButton(ele)
{
    ele.onmouseover =function()
    {
        updateStyleAtrributes(ele,"background-color","rgb(23, 8, 242);");
    }
    ele.onmouseout =function()
    {
        updateStyleAtrributes(ele,"background-color","rgb(105, 44, 180);");
    }
}
/* ######################## Creat element method ###############*/
function creatElement_(ele) {
    return document.createElement(ele);
}
/* ######################### creat textnode method ################ */
function createTextNode_(text) {
    return document.createTextNode(text);
}
/* ################## Set Elment Attribute method ##################### */
function setElementAttribute(ele, obj) {
    for (let key in obj) {
        ele.setAttribute(key, obj[key])
    }
}
//update style
function updateStyleAtrributes(elem, attribute, styleOfAttribute) {
    let currentStyle = elem.getAttribute("style") || "";
    // Add or update one style (e.g., change attribute)
    let myVar = `${attribute}:[^;]*;`;
    let regex = new RegExp(myVar); // same as /test/
    currentStyle = currentStyle.replace(regex, ''); // remove if exists
    currentStyle += `${attribute}:${styleOfAttribute};`;
    // Set the new style attribute
    elem.setAttribute("style", currentStyle);
}
/* ################  main design sections ################## */
var breakSpace = document.createElement("br");
var body = document.body;
var instructorPrfileHeader = creatElement_("nav");
body.appendChild(instructorPrfileHeader);
var instrcutorPageAsideBar = creatElement_("aside");
body.appendChild(instrcutorPageAsideBar);

//######################## instructor header section #########
let dropDownListConainer = creatElement_("div")
let dropDownListConainerElm1 = creatElement_("div")
let dropDownListConainerElm2 = creatElement_("div")
let dropDownListConainerElm3 = creatElement_("div")
dropDownListConainer.appendChild(dropDownListConainerElm1)
dropDownListConainer.appendChild(dropDownListConainerElm2)
dropDownListConainer.appendChild(dropDownListConainerElm3)
let dropDownListConainerElmsStyle = {
    "style":
        `
        background-color:rgb(78, 74, 74) ;
        padding : .3em ;
        border-radius:4px;
    `
}
setElementAttribute(dropDownListConainer,
    {
        "style":
            `
         display : grid ;
         row-gap :2px;
         cursor:pointer;
         grid-template-columns:2.5em;
         grid-auto-flow :row ;
         grid-auto-row :2.5em;
         box-sizing : border-box ;
        `
    })
setElementAttribute(dropDownListConainerElm1, dropDownListConainerElmsStyle);
setElementAttribute(dropDownListConainerElm2, dropDownListConainerElmsStyle);
setElementAttribute(dropDownListConainerElm3, dropDownListConainerElmsStyle);
let instructorHeaderContainer1 = creatElement_("div");
let instructorHeaderStudentContainer = creatElement_("div");
let instructorHeaderImgContainer = creatElement_("div");

let instructorHeaderStudentContainerAnckorLink = creatElement_("a");
let instructorHeaderImgContainerAnchorLink = creatElement_("a");

let instructorHeaderStudentContainerText = creatElement_("span");
let instructorHeaderImg = creatElement_("img");

let instructorHeaderStudentContainerAnckorLinkText = createTextNode_("My profile");


//Home About 
let instructorHeaderHomeContainer = creatElement_("div");
let instructorHeaderAboutContainer = creatElement_("div");

let instructorHeaderHomeContainerAnckorLink = creatElement_("a");
let instructorHeaderAboutContainerAnchorLink = creatElement_("a");

let instructorHeaderHomeContainerText = creatElement_("span");
let instructorHeaderAboutContainerText = creatElement_("span");

let instructorHeaderHomeContainerAnckorLinkText = createTextNode_("Home");
let instructorHeaderAboutContainerLinkText = createTextNode_("About");

instructorHeaderHomeContainer.appendChild(instructorHeaderHomeContainerAnckorLink);
instructorHeaderHomeContainerAnckorLink.appendChild(instructorHeaderHomeContainerText);
instructorHeaderHomeContainerText.appendChild(instructorHeaderHomeContainerAnckorLinkText);

instructorHeaderAboutContainer.appendChild(instructorHeaderAboutContainerAnchorLink);
instructorHeaderAboutContainerAnchorLink.appendChild(instructorHeaderAboutContainerText);
instructorHeaderAboutContainerText.appendChild(instructorHeaderAboutContainerLinkText)

//append section 
instructorPrfileHeader.appendChild(dropDownListConainer)
instructorPrfileHeader.appendChild(instructorHeaderHomeContainer)
instructorPrfileHeader.appendChild(instructorHeaderAboutContainer)

instructorPrfileHeader.appendChild(instructorHeaderContainer1);
instructorPrfileHeader.appendChild(instructorHeaderStudentContainer);
instructorPrfileHeader.appendChild(instructorHeaderImgContainer);

//append student and img elems
instructorHeaderStudentContainer.appendChild(instructorHeaderStudentContainerAnckorLink);
instructorHeaderImgContainer.appendChild(instructorHeaderImgContainerAnchorLink);

instructorHeaderStudentContainerText.appendChild(instructorHeaderStudentContainerAnckorLinkText);
instructorHeaderStudentContainerAnckorLink.appendChild(instructorHeaderStudentContainerText);
instructorHeaderImgContainerAnchorLink.appendChild(instructorHeaderImg);

//style student link
setElementAttribute(instructorPrfileHeader,
    {
        "style":
            `
        align-items :center;
        background-image: linear-gradient(rgba(189, 114, 198, 0.98),rgba(129, 183, 203, 0));
        border-radius : 5px;
        box-sizing :border-box;
        display :flex;
        justify-content:center;
        height :72px;
        margin :0px ;
        padding :0px 24px;
        position: fixed;
        width:100vw;
        top :0px;
        left :0px;
        z-index: 1010;
        `
    }
)
setElementAttribute(instructorHeaderContainer1,
    {
        "style":
            `
        box-sizing :border-box;
        display :block;
        flex-basis :0%;
        flex-grow :1;
        flex-shrink :1;
        margin:0px;
        padding:30px;
        `
    }
)

//style Student
setElementAttribute(instructorHeaderStudentContainer,
    {
        "style":
            `
        box-sizing :border-box;
        display :block;
        padding:0px;
        margin:0px;
        position :relative;
        `
    }
)

setElementAttribute(instructorHeaderStudentContainerAnckorLink,
    {
        "style":
            `
        align-items :center;
        background-color :rgba(0, 0, 0, 0);
        border :0px none white ;
        border-radius:4px;
        box-sizing :border-box;
        color  :rgb(48, 49, 65);
        cursor :pointer;
        display :flex;
        font-family : -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size :1em;
        font-weight :700;
        height :40px;
        justify-content :center;
        letter-spacing :normal;
        line-height :16.8px;
        margin :1em 0px ;
        max-width :100%;
        min-width :0px;
        padding :0px 2vw;
        position :relative;
        text-decoration-line :none;
        text-decoration-style :solid;
        text-decoration-thickness :auto;
        text-size-adjust :100%;
        text-wrap-mode: nowrap;
        user-select :none;
        vertical-align :bottom;
        white-space-collapse :collapse;
        width :auto;
        `,
        "href": "../pages/InstructorProfilePicrure.html",
        "target": "_self"
    })
setElementAttribute(instructorHeaderStudentContainerText,
    {
        "style":
            `
        box-sizing :border-box;
        cursor :pointer;
        display :block;
        background-color :rgba(0, 0, 0, 0);
        border :0px none white ;
        box-sizing :border-box;
        color  :rgb(48, 49, 65);
        cursor :pointer;
        display :flex;
        justify-content :center;
        letter-spacing :normal;
        line-height :16.8px;
        white-space-collapse : collapse;
        `
    }
)

//style Home
setElementAttribute(instructorHeaderHomeContainer,
    {
        "style":
            `
        box-sizing :border-box;
        display :block;
        padding:0px;
        margin:0px;
        `
    }
)
setElementAttribute(instructorHeaderHomeContainerAnckorLink,
    {
        "style":
            `
        align-items :center;
        background-color :rgba(0, 0, 0, 0);
        border :0px none white ;
        border-radius:4px;
        box-sizing :border-box;
        color  :rgb(48, 49, 65);
        cursor :pointer;
        display :flex;
        height :40px;
        justify-content :center;
        letter-spacing :normal;
        line-height :16.8px;
        margin :1em 0px ;
        max-width :100%;
        min-width :0px;
        padding :0px 2vw;
        position :relative;
        text-decoration-line :none;
        text-decoration-style :solid;
        text-decoration-thickness :auto;
        text-size-adjust :100%;
        text-wrap-mode: nowrap;
        user-select :none;
        vertical-align :bottom;
        white-space-collapse :collapse;
        width :auto;
        `,
        "href": "../pages/InstructorProfilePicrure.html",
        "target": "_self"
    })
setElementAttribute(instructorHeaderHomeContainerText,
    {
        "style":
            `
        box-sizing :border-box;
        cursor :pointer;
        display :block;
         align-items :center;
        background-color :rgba(0, 0, 0, 0);
        border :0px none white ;
        box-sizing :border-box;
        color  :rgb(48, 49, 65);
        cursor :pointer;
        display :flex;
         font-family : -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size :1em;
        font-weight :700;
        height :40px;
        justify-content :center;
        letter-spacing :normal;
        line-height :16.8px;
        position :relative;
        white-space-collapse : collapse;
        `
    }
)

//style About
setElementAttribute(instructorHeaderAboutContainer,
    {
        "style":
            `
        box-sizing :border-box;
        display :block;
        padding:0px;
        margin:0px;
        position :relative;
        `
    }
)

setElementAttribute(instructorHeaderAboutContainerAnchorLink,
    {
        "style":
            `
        align-items :center;
        background-color :rgba(0, 0, 0, 0);
        border :0px none white ;
        border-radius:4px;
        box-sizing :border-box;
        color  :rgb(48, 49, 65);
        cursor :pointer;
        display :flex;
        font-family : -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size :14px;
        font-weight :700;
        height :40px;
        justify-content :center;
        letter-spacing :normal;
        line-height :16.8px;
        margin :1em 0px ;
        max-width :100%;
        min-width :0px;
        padding :0px 0px;
        position :relative;
        text-decoration-line :none;
        text-decoration-style :solid;
        text-decoration-thickness :auto;
        text-size-adjust :100%;
        text-wrap-mode: nowrap;
        user-select :none;
        vertical-align :bottom;
        white-space-collapse :collapse;
        width :auto;
        `,
        "href": "../pages/InstructorProfilePicrure.html",
        "target": "_self"
    })
setElementAttribute(instructorHeaderAboutContainerText,
    {
        "style":
            `
        box-sizing :border-box;
        cursor :pointer;
        display :block;
         align-items :center;
        background-color :rgba(0, 0, 0, 0);
        border :0px none white ;
        box-sizing :border-box;
        color  :rgb(48, 49, 65);
        cursor :pointer;
        display :flex;
        font-family : -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size :14px;
        font-weight :700;
        height :40px;
        justify-content :center;
        letter-spacing :normal;
        line-height :16.8px;
        position :relative;
        white-space-collapse : collapse;
        `
    }
)
//style image link
setElementAttribute(instructorHeaderImgContainer, {
    "style":
        `
    display :block;
    `
})
setElementAttribute(instructorHeaderImgContainerAnchorLink,
    {
        "style":
            `
        align-items: center;
        background-color: rgba(0, 0, 0, 0);
        border-radius :4px;
        box-sizing :border-box;
        cursor :pointer;
        display :flex;
        justify-content: center;
        margin :12px 0px ;
        max-width  :100%;
        min-width :0px;
        padding :6px 12px;
        vertical-align: bottom;
        `,
        "href": "../pages/InstructorProfilePicrure.html",
        "alt": "edit"
    })
setElementAttribute(instructorHeaderImg,
    {
        "style":
            `
            align-items :center;
            background-clip :border-box;
            background-color :rgba(0, 0, 0, 0);
            background-origin :padding-box;
            border-radius :1000px;
            box-sizing: border-box;
            cursor :pointer;
            display :flex;
            height : 32px;
            justify-content :center ;
            max-width :32px;
            object-fit :cover;
            padding :0px;
            vertical-align :middle;
            width :32px;
        `,
        "src": currentInstructor.instructorImage ? currentInstructor.instructorImage : "../assets/images/instructor profile images/img1.png",
        "alt": "personal image",
    }
)
//################## Events ######################
let Eventcounter = 0;
dropDownListConainer.onclick = function () {
    Eventcounter++;
    if (Eventcounter == 1) {
        updateStyleAtrributes(instrcutorPageAsideBar, "left", "2px");
    }
    else {
        Eventcounter = 0;
        updateStyleAtrributes(instrcutorPageAsideBar, "left", "-330px");
    }
}

instructorHeaderStudentContainerAnckorLink.onmouseover = function () {
    updateStyleAtrributes(instructorHeaderStudentContainerAnckorLink, " background-color", "rgba(144, 109, 225, 0.5)")
    updateStyleAtrributes(instructorHeaderStudentContainerText, "color", "rgb(255, 255, 255)")
}
instructorHeaderStudentContainerAnckorLink.onmouseout = function () {
    updateStyleAtrributes(instructorHeaderStudentContainerAnckorLink, " background-color", "rgba(0, 0, 0, 0)")
    updateStyleAtrributes(instructorHeaderStudentContainerText, "color", "rgb(48, 49, 65);");
}
instructorHeaderImgContainerAnchorLink.onmouseover = function () {
    updateStyleAtrributes(instructorHeaderImgContainerAnchorLink, " background-color", "rgba(144, 109, 225, 0.5)")
}
instructorHeaderImgContainerAnchorLink.onmouseout = function () {
    updateStyleAtrributes(instructorHeaderImgContainerAnchorLink, " background-color", "rgba(0, 0, 0, 0)")
}
//################### Instructor Aside Bar #######################
let instrcutorPageAsideBarContainer = creatElement_("section");
let instrcutorPageAsideBarList = creatElement_("ul");
let instrcutorPageAsideBarListItems = [];
let instrcutorPageAsideBarAnchorLinks = [];
let instrcutorPageAsideBarAnchorLinksText = [];
let instrcutorPageAsideBarAnchorLinksTextNode = ["Creat Exam", "Creat Session", "Creat Course" ,"Show Exam", "Show Session", "Show Courses", "log out"];

instrcutorPageAsideBar.appendChild(instrcutorPageAsideBarContainer);
instrcutorPageAsideBarContainer.appendChild(instrcutorPageAsideBarList);

for (let i = 0; i < instrcutorPageAsideBarAnchorLinksTextNode.length; i++) {
    instrcutorPageAsideBarListItems[i] = creatElement_("li");
    instrcutorPageAsideBarAnchorLinks[i] = creatElement_("a");
    instrcutorPageAsideBarAnchorLinksText[i] = createTextNode_(instrcutorPageAsideBarAnchorLinksTextNode[i]);

    instrcutorPageAsideBarListItems[i].appendChild(instrcutorPageAsideBarAnchorLinks[i]);
    instrcutorPageAsideBarAnchorLinks[i].appendChild(instrcutorPageAsideBarAnchorLinksText[i]);
    instrcutorPageAsideBarList.appendChild(instrcutorPageAsideBarListItems[i]);
}
instrcutorPageAsideBarAnchorLinks[6].onclick =function(eve)
{
    eve.preventDefault();
    updateLoggedInstructor(currentInstructor);
    location.replace("../pages/registration.html");
}
setElementAttribute(instrcutorPageAsideBar,
    {
        "style":
            `
            position:fixed ;
            left :-330px;
            top:12vh;
            transition: 0.3s ;
        `
    })
setElementAttribute(instrcutorPageAsideBarContainer,
    {
        "style":
            `
        background-image: linear-gradient(rgba(63, 129, 156, 0.98),rgba(129, 183, 203, 0));
        // background-color:blueviolet;
        border-radius:0px 4px 4px 0px ;
        width: 17vw;
        padding:0px .2em;
        
        `
    }
)
setElementAttribute(instrcutorPageAsideBarList,
    {
        "style":
            `
        box-sizing: border-box;
        padding :10px 0px;
        list-style-type: none;
        `
    }
)
let instrcutorPageAsideBarListItemsStyle = {
    "style":
        `
        box-sizing: border-box;
        border-radius:20px;
        margin:3vh 0px 0px 0px;
        background-color:rgba(255, 255, 255, 0.8);
        padding: 2vh 4px;
        width:100%;
    `
}
let instrcutorPageAsideBarAnchorLinksStyle = {
    "style":
        `
    color  :rgb(48, 49, 65);
    cursor :pointer;
    font-family : -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size :2.3vh;
    font-weight :800;
    // height :10vh;
    letter-spacing :normal;
    line-height :16.8px;
    text-decoration-line :none;
    text-decoration-style :solid;
    text-decoration-thickness :auto;
    text-size-adjust :100%;
    text-wrap-mode: nowrap;
    user-select :none;
    vertical-align :bottom;
    white-space-collapse :collapse;
    text-decoration: none;
    `,
    "href": "../pages/createExam.html"
}
let pagesLinks=["../pages/createExam.html","../pages/createSession.html","../pages/creatingCourse.html","../pages/viewExam.html","../pages/viewSession.html","../pages/viewCourses.html"]
for(let i=0 ; i<instrcutorPageAsideBarListItems.length ;i++)
{
    setElementAttribute(instrcutorPageAsideBarListItems[i],instrcutorPageAsideBarListItemsStyle);
    setElementAttribute(instrcutorPageAsideBarAnchorLinks[i],instrcutorPageAsideBarAnchorLinksStyle);
    setElementAttribute(instrcutorPageAsideBarAnchorLinks[i],{"href":pagesLinks[i]})
}
for (let i = 0; i < instrcutorPageAsideBarListItems.length; i++) {
    if(i < 6)
    {
        setElementAttribute(instrcutorPageAsideBarListItems[i], instrcutorPageAsideBarListItemsStyle);
        setElementAttribute(instrcutorPageAsideBarAnchorLinks[i], instrcutorPageAsideBarAnchorLinksStyle);
        setElementAttribute(instrcutorPageAsideBarAnchorLinks[i], { "href": pagesLinks[i] })
    }
    else
    {
        setElementAttribute(instrcutorPageAsideBarListItems[i], instrcutorPageAsideBarListItemsStyle);
        setElementAttribute(instrcutorPageAsideBarAnchorLinks[i], instrcutorPageAsideBarAnchorLinksStyle);
    }
    instrcutorPageAsideBarListItems[i].onmouseover=function()
    {
        updateStyleAtrributes(instrcutorPageAsideBarListItems[i] , "background-image","linear-gradient(rgb(85, 132, 214),rgb(155, 20, 189))");
        updateStyleAtrributes(instrcutorPageAsideBarAnchorLinks[i] ,"color","rgb(253, 253, 253)")
    }
    instrcutorPageAsideBarListItems[i].onmouseout=function()
    {
        updateStyleAtrributes(instrcutorPageAsideBarListItems[i] , "background-image","none");
        updateStyleAtrributes(instrcutorPageAsideBarAnchorLinks[i] ,"color","rgb(48, 49, 65);");

    }
}   

//##################### Instructor Aside Bar end ###############

//#################### update exam functions ###############
let loggedTeacher = JSON.parse(localStorage.getItem("loggedTeacher")) || {
    name: "",
    email: "",
    InstructorExams: []
};

// Get the index of the exam to update from localStorage
let examIndex = localStorage.getItem("currentExamIndex");

if (examIndex !== null) {
    examIndex = parseInt(examIndex); // Convert the string index to an integer
    const exam = loggedTeacher.InstructorExams[examIndex]; // Access the exam from InstructorExams array
    
    if (exam) {
        console.log('Exam data retrieved:', exam); // Debugging line
        // If exam exists, populate the form
        document.getElementById("examTitle").value = exam.title;

        // Now load the questions into the form
        loadQuestions(exam.questions);
    } else {
        alert("Exam not found.");
    }
} else {
    alert("No exam selected for update.");
}

// Function to load questions
function loadQuestions(questions) {
    const questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = ""; // Clear existing questions

    console.log('Loading questions:', questions); // Debugging line

    questions.forEach((q, i) => {
        const div = document.createElement("div");
        div.classList.add("question");
        div.innerHTML = `
            <h3>Question ${i + 1}</h3>
            <input type="text" value="${q.question}" id="q${i}">
            <br>
            <label>A: <input type="text" value="${q.options.A}" id="q${i}A"></label>
            <label>B: <input type="text" value="${q.options.B}" id="q${i}B"></label>
            <br>
            <label>C: <input type="text" value="${q.options.C}" id="q${i}C"></label>
            <label>D: <input type="text" value="${q.options.D}" id="q${i}D"></label>
            <br>
            <label>Correct Answer:
                <select id="q${i}Correct">
                    <option value="A" ${q.correct === "A" ? "selected" : ""}>A</option>
                    <option value="B" ${q.correct === "B" ? "selected" : ""}>B</option>
                    <option value="C" ${q.correct === "C" ? "selected" : ""}>C</option>
                    <option value="D" ${q.correct === "D" ? "selected" : ""}>D</option>
                </select>
            </label>
        `;
        questionContainer.appendChild(div);
    });
}

// Save the updated exam data back to localStorage
function saveExam() {
    let exam = loggedTeacher.InstructorExams[examIndex];
    exam.title = document.getElementById("examTitle").value;

    // Update the questions
    exam.questions.forEach((q, i) => {
        q.question = document.getElementById(`q${i}`).value;
        q.options.A = document.getElementById(`q${i}A`).value;
        q.options.B = document.getElementById(`q${i}B`).value;
        q.options.C = document.getElementById(`q${i}C`).value;
        q.options.D = document.getElementById(`q${i}D`).value;
        q.correct = document.getElementById(`q${i}Correct`).value;
    });

    // Save back to loggedTeacher and localStorage
    localStorage.setItem("loggedTeacher", JSON.stringify(loggedTeacher));

    alert("Exam updated successfully!");
    window.location.href = "../js/updateExam.js"; // Redirect back to exam list
}

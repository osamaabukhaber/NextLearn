
//################### Local Storage Start ########################
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

/*############### mehthod to make transiation ############*/
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

//######################## instructor nav section #########
//##### Dropdown list section ############
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
        "href": "../HTML/profilePicrure.html",
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
        "href": "../HTML/profilePicrure.html",
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
        "href": "../HTML/profilePicrure.html",
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
        "href": "../HTML/profile.html",
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
        "src": currentInstructor.instructorImage ? currentInstructor.instructorImage : "../../imagee/img1.png",
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
    location.replace("../../login/registration.html");
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
    "href": "../../InstructorActivity/creatExam/main.html"
}

let pagesLinks = ["../../InstructorActivity/creatExam/main.html", "../../InstructorActivity/creatSession/main.html", "../../InstructorActivity/creatCourse/main.html", "../../InstructorActivity/showExam/main.html", "../../InstructorActivity/showSession/main.html", "../../InstructorActivity/showCourse/main.html"]
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
//creat body elements
let fullViewPortContainer = creatElement_("div");
let LayoutContainer = creatElement_("div");
let layoutSectionsContainer = creatElement_("div")//grid

let headerSection = creatElement_("div");
let profileSection = creatElement_("div");
let learningSection = creatElement_("div");
let layoutSections = [headerSection, profileSection, learningSection];
//append 
body.appendChild(fullViewPortContainer);
fullViewPortContainer.appendChild(LayoutContainer);
LayoutContainer.appendChild(layoutSectionsContainer);

let headerText;
let headerTextNode = [];
if (currentInstructor.InstructorPersonalData) {
    let fullName = currentInstructor.InstructorPersonalData.firstName + " " + currentInstructor.InstructorPersonalData.lastName;
    let headLine = currentInstructor.InstructorPersonalData.headLine;
    headerText = ["Instructor", fullName, headLine];
}
else {
    headerText = ["Instructor", currentInstructor.fullName,""];
}
let headerSectionElems = [];
for (let i = 0; i < 3; i++) {
    headerSectionElems[i] = creatElement_("h1");
    headerTextNode[i] = createTextNode_(headerText[i]);
    headerSectionElems[i].appendChild(headerTextNode[i]);
    headerSection.appendChild(headerSectionElems[i]);
    layoutSectionsContainer.appendChild(layoutSections[i]);
}
//style elems

setElementAttribute(fullViewPortContainer,
    {
        "style":
            `
        box-sizing :border-box;
        display :block;
        padding:5vh;
        `
    })

setElementAttribute(LayoutContainer,
    {
        "style":
            `
        box-sizing: border-box;
        display :block;
        margin :0px;
        overflow-x :clip;
        padding :0px;
        `
    }
)
setElementAttribute(layoutSectionsContainer,
    {
        "style":
            `
        box-sizing: border-box;
        // background-color: white;
        border :0px none red ;
        display: grid;
        background-image: linear-gradient(rgba(252, 252, 252, 0.98) 20vh  ,rgb(255,255,255)20vh);
        grid-template-columns: minmax(30em , 50em) minmax(12em , 20em);
        grid-auto-flow: row;
        grid-template-rows: 20vh 80vh;
        column-gap: 64px;
        justify-content: space-evenly;
        grid-template-areas: "sec1 sec2" "sec3 sec2";
        padding-bottom :16px;
        padding-left : 5vw;
        padding-right :5vw;
        padding-top :0px;
        `
    }
)
setElementAttribute(headerSection,
    {
        "style":
            `
        // background-image: linear-gradient(blue,rgb(255,255,255));
        background-color:rgba(1,1,1,0);
        box-sizing :border-box;
        display :block;
        max-width: 1000px;
        min-width: 500px;
        grid-area: sec1;
        padding :24px 0px 0px 0px  ;
        position: relative;
        top :0px;
        z-index : 0;
        `
    }
)
setElementAttribute(headerSectionElems[0],
    {
        "style":
            `
        color : rgb(48, 49, 65);
        box-sizing: border-box;
        display :block;
        font-family :-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size :1em;
        font-weight :80em;
        letter-spacing :normal;
        line-height :16.8px;
        margin-block :0px;
        margin-inline :0px;
        margin :0px;
        max-width :600px;
        padding:0px;
        text-transform :uppercase;
        `
    })
setElementAttribute(headerSectionElems[1],
    {
        "style":
            `
            color : rgb(48, 49, 65);
            box-sizing: border-box;
            display :block;
            font-family :-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
             font-size :1.5em;
            font-weight :50em;
            letter-spacing :normal;
            line-height :32.9102px;
            margin-block :0px;
            margin-inline :0px;
            margin :0px;
            max-width :987.307px;
            padding:16px 0px 0px 0px ;
            text-transform :uppercase;
            `
    })
setElementAttribute(headerSectionElems[2],
    {
        "style":
            `
        color : rgb(48, 49, 65);
        box-sizing: border-box;
        display :block;
        font-family :-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size :1.5em;
        font-weight :50em;
        letter-spacing :normal;
        line-height :32.9102px;
        margin-block :0px;
        margin-inline :0px;
        margin :0px;
        max-width :987.307px;
        padding:8px 0px 0px 0px ;
        `
    }
)

//profile section 
setElementAttribute(profileSection,
    {
        "style":
            `
        grid-area: sec2;
        box-sizing :border-box;
        display :block;
        margin :0px;
        padding :32px 0px 0px 0px ;
        z-index :-3,
        `
    }
)

//learning section 
setElementAttribute(learningSection,
    {
        "style":
            `
            //  background-color :rgb(255, 255, 255);
            background-color:rgba(1,1,1,0);
            // background-image: linear-gradient(rgb(244, 239, 239),rgb(255,255,255));
            grid-area: sec3;
            box-sizing :border-box;
            display :block;
            margin :0px;
            padding :48px 0px 32px 0px  ;
        `
    }
)

//############### profile section 
var profileSectionLayout = creatElement_("div");
var profileSectionBorder = creatElement_("div");
var profileSectionContainer = creatElement_("div") //flex

var profileSectionImageContainer = creatElement_("div");
var profileSectionImage = creatElement_("img");

var profileSectionContactInfoContainer = creatElement_("div");
var profileSectionEditProfileLink = creatElement_("a");
var profileSectionEditProfileIcon = creatElement_("img");
var profileSectionEditProfileText = creatElement_("span");
var profileSectionEditProfileTextNode = createTextNode_("Edit profile");

//social Media Icon section
let profileSectionSocialMediaLayout = creatElement_("section");
let profileSectionSocialMediaContainer = creatElement_("div");

let profileSectionSocialMediaElemsContainer = []
let profileSectionSocialMediaElems = []
let profileSectionSocialMediaElemsIcon = []
let profileSectionSocialMediaElemsIconImaLocation = ["../../imagee/port.jpg", "../../imagee/fac.jpg", "../../imagee/ins.jfif", "../../imagee/lin.png",
    "../../imagee/tik.png", "../../imagee/x.jfif", "../../imagee/yout.png"
]
profileSectionSocialMediaLayout.appendChild(profileSectionSocialMediaContainer)
let keyCounter = 0;
if (currentInstructor.InstructorPersonalData) {
    for (let key in currentInstructor.InstructorPersonalData) {
        keyCounter++;
        if (keyCounter > 5) {
            console.log(currentInstructor.InstructorPersonalData[key])
            let i = keyCounter - 6;
            if (currentInstructor.InstructorPersonalData[key]) {
                profileSectionSocialMediaElemsContainer[i] = creatElement_("div");
                profileSectionSocialMediaElems[i] = creatElement_("a");
                profileSectionSocialMediaElemsIcon[i] = creatElement_("img")

                profileSectionSocialMediaElems[i].appendChild(profileSectionSocialMediaElemsIcon[i]);
                profileSectionSocialMediaElemsContainer[i].appendChild(profileSectionSocialMediaElems[i])
                profileSectionSocialMediaContainer.appendChild(profileSectionSocialMediaElemsContainer[i])

                setElementAttribute(profileSectionSocialMediaElemsContainer[i],
                    {
                        "style":
                            `
                            box-sizing :border-box;
                            display :block;
                            margin :0px 0px;
                            padding:0px;
                            `
                    }
                )
                if (key === "linkedin") {
                    setElementAttribute(profileSectionSocialMediaElems[i], {
                        "style":
                            `
                            border-radius :4px;
                            box-sizing : border-box;
                            display:block;
                            cursor :pointer;
                            margin :0px;
                            max-width :90%;
                            min-width :60px;
                            padding :0px 0px ;
                            `,
                        "href": currentInstructor.InstructorPersonalData[key],
                        "target": "_blank",
                    })
                }
                else {
                    setElementAttribute(profileSectionSocialMediaElems[i], {
                        "style":
                            `
                            border-radius :4px;
                            box-sizing : border-box;
                            display:block;
                            cursor :pointer;
                            margin :0px;
                            max-width :90%;
                            min-width :60px;
                            padding :0px 0px ;
                            `,
                        "href": `https://www.${key}.com/${currentInstructor.InstructorPersonalData[key]}`,
                        "target": "_blank"
                    })
                }

                setElementAttribute(profileSectionSocialMediaElemsIcon[i],
                    {
                        "style":
                            `
                            box-sizing :border-box;
                            cursor :pointer;
                            display :block;
                            margin :0px;
                            padding :3px;
                            width:90%;
                            height:80%;
                            `,
                        "src": profileSectionSocialMediaElemsIconImaLocation[i]
                    }
                )
                //############### events #####################
                profileSectionSocialMediaElemsIcon[i].onmouseover = function () {
                    updateStyleAtrributes(profileSectionSocialMediaElemsIcon[i], "background-image", "linear-gradient(rgb(85, 132, 214),rgb(85, 132, 214))");
                }
                profileSectionSocialMediaElemsIcon[i].onmouseout = function () {
                    updateStyleAtrributes(profileSectionSocialMediaElemsIcon[i], "background-image", "none");
                }
            }
        }
    }
}
else { }
setElementAttribute(profileSectionSocialMediaLayout,
    {
        "style":
            `
        box-sizing :border-box;
        display :block;
        margin :0px 0px;
        width :100%;
        `
    })
setElementAttribute(profileSectionSocialMediaContainer,
    {
        "style":
            `
        box-sizing :border-box;
        display :grid;
        column-gap: 0px;
        row-gap: 0px;
        grid-template-columns:3em 3em 3em 3em;
        grid-auto-flow:row;
        grid-auto-rows:3em;
        padding:0px .5em ;
        align-content: center;
        `
    }
)

//style

//append
profileSection.appendChild(profileSectionLayout);
profileSectionLayout.appendChild(profileSectionBorder);
profileSectionBorder.appendChild(profileSectionContainer);

profileSectionContainer.appendChild(profileSectionImageContainer);
profileSectionContainer.appendChild(profileSectionContactInfoContainer);
profileSectionContainer.appendChild(profileSectionSocialMediaLayout);

profileSectionImageContainer.appendChild(profileSectionImage);
//link 
profileSectionContactInfoContainer.appendChild(profileSectionEditProfileLink);
profileSectionEditProfileLink.appendChild(profileSectionEditProfileIcon);
profileSectionEditProfileLink.appendChild(profileSectionEditProfileText);
profileSectionEditProfileText.appendChild(profileSectionEditProfileTextNode);

//style image section
setElementAttribute(profileSectionLayout,
    {
        "style":
            `
            background-color :rgb(255, 255, 255);
            border-radius: 16px;
            box-shadow :0px 2px 4px 0px rgba(239, 232, 240, 0.95) ;
            box-sizing :border-box ;
            display :block ;
            max-height:auto;
            min-height : 280px;
            margin :10px;
            padding :0px;
            max-width :100% ;
            min-width : 70%;
            `
    }
)
setElementAttribute(profileSectionBorder,
    {
        "style":
            `
        box-sizing :border-box ;
        display : block ;
        height :100%;
        margin :0px;
        padding :24px;
        max-width :100%;
        min-width :50%;
        `
    }
)
setElementAttribute(profileSectionContainer,
    {
        "style":
            `
            box-sizing :border-box;
            display :flex ;
            flex-direction : column ;
            justify-content:center;
            margin :0px;
            padding :0px;
            row-gap :16px;
            column-gap :16px ;
            max-width : 100%;
            min-width : 50% ;
        `
    }
)

setElementAttribute(profileSectionImageContainer,
    {
        "style":
            `
            align-items: center;
            box-sizing :border-box;
            display : flex ;
            height :152px;
            justify-content :center ;
            margin :0px;
            padding :0px;
            width :100%;
        `
    })

setElementAttribute(profileSectionImage,
    {
        "style":
            `
         aspect-ratio :auto 64 / 64;
        border:0.8px solid rgb(209, 210, 224);
        border-radius :10px/100px;
        box-sizing: border-box;
        display :flex;
        height :152px;
        margin :0px;
        max-width :100%;
        object-fit :cover;
        overflow-clip-margin :content-box;
        padding :0px;
        vertical-align : middle ;
        width :152px;
        `,
        "src": currentInstructor.instructorImage ? currentInstructor.instructorImage : "../../imagee/img1.png",
        "alt": "instructor Photo "

    })
//style button
setElementAttribute(profileSectionContactInfoContainer,
    {
        "style":
            `
        box-sizing :border-box;
        column-gap :16px;
        display :flex;
        flex-direction :column;
        height :48px;
        margin :0px;
        padding:0px;
        row-gap :16px ;
        width :100% ;
        `
    }
)
setElementAttribute(profileSectionEditProfileLink,
    {
        "style":
            `
        align-items :center;
        background-color :rgba(0, 0, 0, 0);
        border-radius :4px;
        border :.8px solid rgb(109, 40, 210);
        box-sizing : border-box;
        cursor :pointer;
        display :flex;
        height :48px;
        justify-content : center;
        margin :0px;
        max-width :100%;
        min-width :80px;
        padding :0px 12px ;
        position :relative;
        text-decoration-color: rgb(109, 40, 210);
        text-decoration-line :none;
        text-decoration-style :solid;
        text-decoration-thickness :auto;
        text-wrap-mode :nowrap;
        vertical-align :bottom;
        white-space-collapse :collapse;
        `,
        "href": "../HTML/profile.html"
    }
)
setElementAttribute(profileSectionEditProfileIcon,
    {
        "style":
            `
        box-sizing :border-box;
        cursor :pointer;
        display :block;
        flex-shrink : 0;
        height :20px;
        margin :0px;
        overflow-clip-margin : content-box;
        padding :0px;
        user-select :none;
        white-space-collapse: collapse;
        width :20px;
        `,
        "src": "../../imagee/ico3.png",
        "alt": "icon "
    }
)
setElementAttribute(profileSectionEditProfileText,
    {
        "style":
            `
        box-sizing: border-box;
        color :rgb(109, 40, 210);
        cursor :pointer;
        display :block;
        font-family :-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size :16px;
        font-weight :700;
        height :19.2px;
        letter-spacing :normal;
        line-height :19.2px;
        margin:0px 0px 0px 6px;
        overflow-x :hidden;
        overflow-y :hidden;
        padding :0px;
        text-overflow :ellipsis;
        text-wrap-mode :nowrap;
        white-space-collapse :collapse;
        max-width :7em;
        min-width:4em ;
        `
    }
)

//################### evevnts #########################
profileSectionEditProfileLink.onmouseover = function () {
    updateStyleAtrributes(profileSectionEditProfileLink, "background-image", "linear-gradient(rgb(85, 132, 214),rgb(198, 68, 210))");
    updateStyleAtrributes(profileSectionEditProfileText, "color", " rgb(252, 251, 252)")

}
profileSectionEditProfileLink.onmouseout = function () {
    updateStyleAtrributes(profileSectionEditProfileLink, "background-image", "none");
    updateStyleAtrributes(profileSectionEditProfileText, "color", " rgb(109, 40, 210);")

}
//Biography
let learningSectionBiographySection = creatElement_("section");
let learningSectionBiographyContainer = creatElement_("div");
let learningSectionBiographyHeaderContainer = creatElement_("div");
let learningSectionBiographyHeader = creatElement_("h2");
let learningSectionBiographyHeaderTextNode = createTextNode_("About")
let learningSectionBiographyContentSection = creatElement_("section");
let learningSectionBiographyContetentContainer = creatElement_("span");
if (currentInstructor.InstructorPersonalData) {
    let learningSectionBiographyTextNode = createTextNode_(currentInstructor.InstructorPersonalData.bioGraphy)
    if (currentInstructor.InstructorPersonalData.bioGraphy != " " && currentInstructor.InstructorPersonalData.bioGraphy != "") {
        learningSection.appendChild(learningSectionBiographySection);
        learningSectionBiographySection.appendChild(learningSectionBiographyContainer);
        learningSectionBiographyContainer.appendChild(learningSectionBiographyHeaderContainer);
        learningSectionBiographyHeaderContainer.appendChild(learningSectionBiographyHeader);
        learningSectionBiographyHeader.appendChild(learningSectionBiographyHeaderTextNode);

        learningSectionBiographyContainer.appendChild(learningSectionBiographyContentSection);
        learningSectionBiographyContentSection.appendChild(learningSectionBiographyContetentContainer);
        learningSectionBiographyContetentContainer.appendChild(learningSectionBiographyTextNode);

        setElementAttribute(learningSectionBiographySection,
            {
                "style":
                    `
                box-sizing: border-box;
                display :block;
                margin :0px;
                padding:0px;
                width :100%;
                `
            })
        setElementAttribute(learningSectionBiographyContainer,
            {
                "style":
                    `
            box-sizing :border-box;
            margin :0px;
            padding :0px;
            width :100%;
            `
            }
        )
        setElementAttribute(learningSectionBiographyHeaderContainer,
            {
                "style":
                    `
            box-sizing :border-box;
            margin :0px;
            padding :2em 2em 0px 0em;
            width :100%;
            `
            }
        )
        setElementAttribute(learningSectionBiographyHeader,
            {
                "style":
                    `
            box-sizing :border-box;
            color :rgb(48, 49, 65);
            display :block;
            font-family : -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size :23.36px;
            font-weight :700;
            height :28.025px;
            letter-spacing :normal;
            line-height :28.032px;
            margin-block:0px;
            margin-inline:0px;
            margin:0px;
            max-width :840.96px;
            padding:0px 5px;
            text-size-adjust :100%;
            width :100%;
            `
            }
        )
        setElementAttribute(learningSectionBiographyContentSection,
            {
                "style":
                    `
            box-sizing :border-box;
            margin :0px;
            padding :0px 1em 2em 3em ;
            width :100%;
            `
            }
        )
        setElementAttribute(learningSectionBiographyContetentContainer,
            {
                "style":
                    `
            box-sizing: border-box;
            display :inline;
            font-family : "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size :18px;
            font-weight :450;
            height :auto;
            line-height :22.4px;
            margin :0px;
            padding:0px;
            text-size-adjust: 100%;
            text-wrap-mode :wrap;
            white-space-collapse :collapse;
            width :auto;
            `
            })
    }
}
else
{}
//######################## Section learning #############################
//learning learningSection
let learningSectionLayout = creatElement_("div");
let learningSectionContainer = creatElement_("div");

let learningSectionHeader = creatElement_("h1");
let learningSectionHeaderTextNode = createTextNode_("My Courses");
learningSectionHeader.appendChild(learningSectionHeaderTextNode);

let learningSectioContentContainer = creatElement_("div");//grid

//learn section
learningSection.appendChild(learningSectionLayout);
learningSectionLayout.appendChild(learningSectionContainer);
learningSectionContainer.appendChild(learningSectionHeader);
learningSectionContainer.appendChild(learningSectioContentContainer);
setElementAttribute(learningSectionLayout,
    {
        "style":
            `
        box-sizing: border-box;
        column-gap :32px;
        display :flex;
        flex-direction :column;
        margin :0px;
        padding:0px;
        row-gap :32px;
        width :100%;
        `
    })
setElementAttribute(learningSectionContainer,
    {
        "style":
            `
    box-sizing :border-box;
    display :flex;
    flex-direction :column;
    margin :0px;
    padding :0px;
    width :100%;
    `
    }
)
setElementAttribute(learningSectionHeader,
    {
        "style":
            `
    box-sizing :border-box;
    color :rgb(48, 49, 65);
    display :block;
    font-family : -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size :23.36px;
    font-weight :700;
    height :28.025px;
    letter-spacing :normal;
    line-height :28.032px;
    margin-block:0px;
    margin-inline:0px;
    margin:0px;
    max-width :840.96px;
    padding:0px 5px;
    text-size-adjust :100%;
    width :100%;
    `
    }
)
//style elems
setElementAttribute(learningSectioContentContainer,
    {
        "style":
            `           
        box-sizing :border-box;
        column-gap :16px;
        display :grid;
        grid-template-columns :30% 30% 30%;
        grid-auto-flow :row ;
        grid-auto-rows :50vh;
        line-height: 22.4px;
        margin:16px 0px 0px 0px ;
        padding:0px;
        row-gap :16px;
        width 100%;
    `
    }
)
if (currentInstructor.InstructorCourses) {
    let InstructorCourses = currentInstructor.InstructorCourses;
    console.log(InstructorCourses);
    for (let obj of InstructorCourses) {
        let learningSectionElems = creatElement_("section");
        let learningSectionElemsLayout = creatElement_("div");
        let learningSectionElemsImageConatiner = creatElement_("div");
        let learningSectionElemsImage = creatElement_("img");
        //link of course
        let learningSectionCourseContainer = creatElement_("div");
        let learningSectionLinkContainer = creatElement_("div");
        let learningSectionLinkHeader = creatElement_("h3");
        let learningSectionLink = creatElement_("a");
        let learningSectionLinkTextContainer = creatElement_("div");
        let learningSectionLinkTextNode = createTextNode_("Go to Course")

        let learningSectionDescriptionLayout = creatElement_("div");
        let learningSectionDescriptionTextContainer = creatElement_("span");
        let learningSectionDescriptionTextNode = createTextNode_(obj.description);
        //grid elems 
        learningSectioContentContainer.appendChild(learningSectionElems);
        learningSectionElems.appendChild(learningSectionElemsLayout);

        learningSectionElemsLayout.appendChild(learningSectionElemsImageConatiner);
        learningSectionElemsImageConatiner.appendChild(learningSectionElemsImage);

        learningSectionElemsLayout.appendChild(learningSectionCourseContainer);

        learningSectionCourseContainer.appendChild(learningSectionLinkContainer);
        learningSectionLinkContainer.appendChild(learningSectionLinkHeader);
        learningSectionLinkHeader.appendChild(learningSectionLink);
        learningSectionLink.appendChild(learningSectionLinkTextContainer);
        learningSectionLinkTextContainer.appendChild(learningSectionLinkTextNode);
        //text
        learningSectionCourseContainer.appendChild(learningSectionDescriptionLayout);
        learningSectionDescriptionLayout.appendChild(learningSectionDescriptionTextContainer);
        learningSectionDescriptionTextContainer.appendChild(learningSectionDescriptionTextNode);

        setElementAttribute(learningSectionElems,
            {
                "style":
                    `
            background-color :rgb(255, 255, 255);
            //background-image: linear-gradient(blue,rgb(255,255,255));
            border-radius :16px;
            border:.8px solid rgb(233, 234, 242);
            box-sizing :border-box;
            display : flex;
            flex-direction :column;
            align-items:center;
            height :100%;
            margin:0px;
            padding:0px;
            width :100%;
            box-shadow :2px 4px 5px rgb(217, 223, 230);;
            `
            }
        )

        setElementAttribute(learningSectionElemsLayout,
            {
                "style":
                    `
            box-sizing :border-box;
            column-gap :16px;
            display :flex;
            flex-basis :auto;
            flex-direction :column;
            flex-grow :1;
            flex-shrink :0;
            height :100%;
            margin :0px;
            padding :16px;
            row-gap :16px
            width 100%;
            `
            }
        )

        setElementAttribute(learningSectionElemsImageConatiner,
            {
                'style':
                    `
            box-sizing: border-box;
            display :block;
            height :auto ;
            margin :0px;
            padding:1vw 1vw;
            width : 100%;
            `
            }
        )

        setElementAttribute(learningSectionElemsImage,
            {
                "style":
                    `
            aspect-ratio: 1.77778 / 1;
            border-radius :8px;
            box-sizing :border-box;
            contain :size;
            display :block;
            height :120px;
            margin:0px;
            max-width :111px;
            min-width :100px;
            object-fit :cover;
            overflow-clip-margin :content-box;
            // overflow-x :clip;
            // overflow-y :clip;
            padding :0px;
            `,
                "src": "../../imagee/iti.jpg",
                "alt": "js course"
            }
        )

        setElementAttribute(learningSectionCourseContainer,
            {
                "style":
                    `
            box-sizing: border-box;
            column-gap :4px;
            display :flex;
            flex-direction :column;
            height :100%;
            margin:0px;
            padding :0px;
            row-gap :4px;
            width :100%;
            `
            }
        )
        setElementAttribute(learningSectionLinkContainer,
            {
                "style":
                    `
            box-sizing: border-box;
            display: block;
            height:64px;
            margin :0px;
            padding :10px 0px;
            width :100%;
            `
            }
        )
        setElementAttribute(learningSectionLinkHeader,
            {
                "style":
                    `
                    box-sizing :border-box;
                    display :block;
                    height :64.275px;
                    margin-block:0px;
                    margin-inline:0px;
                    margin:0px
                    max-width :642.853px;
                    padding:0px;
                    text-size-adjust: 100%;
                    width :auto ;
            `
            }
        )
        setElementAttribute(learningSectionLink,
            {
                "style":
                    `
                box-sizing :border-box;
                cursor :pointer;
                display :block;
                height :64.275px;
                margin:0px;
                padding :0px;
                text-decoration-color: rgb(216, 217, 232);
                text-decoration-line :none;
                text-decoration-style :solid;
                text-decoration-thickness :auto;
                width : auto;
                `,
                "href": obj.link,
            }
        )
        setElementAttribute(learningSectionLinkTextContainer,
            {
                "style":
                    `
            box-sizing :border-box;
            color :rgb(48, 49, 65);
            cursor :pointer;
            display :block;
            font-family :apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size :17.857px;
            font-weight :700;
            height :64.275px;
            letter-spacing :normal;
            // line-height :21 ;
            margin :0px;
            overflow-x :hidden;
            overflow-y :hidden;
            padding:0px;
            text-overflow :ellipsis;
            text-size-adjust :100%;
            text-wrap-mode: wrap;
            white-space-collapse :collapse;
            width :auto;
            `
            }
        )

        setElementAttribute(learningSectionDescriptionLayout,
            {
                "style":
                    `
            box-sizing :border-box;
            display :block;
            height :44.8px;
            margin :0px;
            padding :0px;
            width :100%;
            `
            })

        setElementAttribute(learningSectionDescriptionTextContainer,
            {
                "style":
                    `
            box-sizing: border-box;
            display :inline;
            font-family : "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size :16px;
            font-weight :400;
            height :auto;
            line-height :22.4px;
            margin :0px;
            padding:0px;
            text-size-adjust: 100%;
            text-wrap-mode :wrap;
            white-space-collapse :collapse;
            width :auto;
            `
            })

        //################ events #########################
        learningSectionElems.onmouseover = function () {
            updateStyleAtrributes(learningSectionElems, "background-image", "linear-gradient(rgb(134, 190, 228),rgb(227, 82, 222))");
            updateStyleAtrributes(learningSectionElems, "border-radius", "9px");

        }
        learningSectionElems.onmouseout = function () {
            updateStyleAtrributes(learningSectionElems, "background-image", "none");
            updateStyleAtrributes(learningSectionElems, "border-radius", "0px");
        }
    }

}

//setting query section
const mediaQuery = window.matchMedia('(min-width: 1150px)');

function handleMediaQueryChange(event) {
    if (event.matches) {
        setElementAttribute(layoutSectionsContainer,
            {
                "style":
                    `
            box-sizing: border-box;
            // background-color: white;
            border :0px none red ;
            display: grid;
            background-image: linear-gradient(rgba(252, 252, 252, 0.98) 20vh  ,rgb(255,255,255)20vh);
            grid-template-columns: minmax(30em , 50em) auto;
            grid-auto-flow: row;
            grid-template-rows: 20vh 80vh;
            column-gap: 64px;
            justify-content: space-evenly;
            grid-template-areas: "sec1 sec2" "sec3 sec2";
            padding-bottom :16px;
            padding-left : 5vw;
            padding-right :5vw;
            padding-top :0px;
            `
            }
        )
        setElementAttribute(profileSectionSocialMediaContainer,
            {
                "style":
                    `
                box-sizing :border-box;
                display :grid;
                column-gap: .5em;
                row-gap: .5em;
                grid-template-columns:4em 4em 4em 4em;
                grid-auto-flow:row;
                grid-auto-rows:4em;
                padding:0px .5em ;
                justify-content: center;
                `
            }
        )
        setElementAttribute(learningSectioContentContainer,
            {
                "style":
                    `           
            box-sizing :border-box;
            column-gap :16px;
            display :grid;
            grid-template-columns :33% 33% auto;
            grid-auto-flow :row ;
            grid-auto-rows :50vh;
            line-height: 22.4px;
            margin:16px 0px 0px 0px ;
            padding:0px;
            row-gap :16px;
            width 100%;
        `
            }
        )
    } else {
        setElementAttribute(layoutSectionsContainer,
            {
                "style":
                    `
                box-sizing: border-box;
                // background-color: white;
                border :0px none red ;
                display: grid;
                background-image: linear-gradient(rgba(252, 252, 252, 0.98) 20vh  ,rgb(255,255,255)20vh);
                grid-template-columns: 100%;
                grid-auto-flow: row;
                grid-template-rows:auto;
                column-gap: 64px;
                justify-content: space-evenly;
                grid-template-areas: "sec1" "sec2" "sec3";
                padding-bottom :16px;
                padding-left : 5vw;
                padding-right :5vw;
                padding-top :0px;
                `
            }
        )
        setElementAttribute(profileSectionSocialMediaContainer,
            {
                "style":
                    `
                box-sizing :border-box;
                display :grid;
                column-gap: .5em;
                row-gap: .5em;
                grid-template-columns:repeat(auto-fit ,5em);
                padding:0px .5em ;
                justify-content: center;
                `
            }
        )
        setElementAttribute(learningSectioContentContainer,
            {
                "style":
                    `           
                    box-sizing :border-box;
                    column-gap :16px;
                    display :grid;
                    grid-template-columns :80%;
                    grid-auto-flow :row ;
                    grid-auto-rows :50vh;
                    line-height: 22.4px;
                    margin:16px 0px 0px 0px ;
                    padding:0px;
                    row-gap :16px;
                    width 100%;
                `
            }
        )
    }
}

// Initial check
handleMediaQueryChange(mediaQuery);

// Listen for changes
mediaQuery.addEventListener('change', handleMediaQueryChange);
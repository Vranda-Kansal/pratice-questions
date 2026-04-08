//==== some are wrong answer so only read questions=====

//tell me what is the use of DOCTYPE in html?
// Yes, I can definitely tell you like what is the use of the Doctype. So the Doctype in the HTML structure is for telling the browser like, okay, this is the HTML file which you have used, and apart from that it will tell the browser like what is the version of HTML we are going to use. So the browser would be ready for the file which is going to be rendered on the page.
//use of alt tag in images?
// The use of alt tag in the images is to basically tell the browser like, okay, if the particular image is not rendered because of the incorrect URL or because of some error, then we can show the message to the user so that he would be able to, like, get to know, like, what is there, like, or you will then alternative text to represent a particular image, like what this image is going to represent. So this is good for a screen reader as well.

// waht are semantic tags?
// In the HTML, we have to create a tag so that it could tell the browser, like, what's the particular tag meaning. So that the browser would be able to understand it perfectly, as well as it should be SEO friendly. Apart from them, it could be good if we use that particular tag so that the browser is able to know, like, this particular section represents that part and this particular section represents that particular part. And it also being useful for the screen readers as well. Apart from them, semantic tag are nothing but the tag which have some kind of meaning, like the header. Header has its own meaning, like it is the header part. The nav has its own meaning. The section has its own meaning. The article has its own meaning. So these are the tag which have their own meaning, or which represent some kind of meaning to the HTML, like what that particular tag represents.
// why we use head tag in html?
//Yeah, so head tag gives us the information which we can give an extra information or alternative information or additional information to the browser about what additional information we want to send to the browser regarding our HTML page. Like, we want to give some kind of metadata and we want to link our CSS file or JavaScript file. Apart from that, we want to give the title. So these kind of information we can give to it. So that the optimization would be done perfectly and browser would be able to know much better.

//defer attribute?
//So the use of the header that will do this that, like my HTML will like fetch from the server, but it shouldn't be executed until my HTML does not pass, like when my HTML is getting passed perfectly or completed, only after that my JavaScript will get executed because sometimes my main thread does not get blocked because of the JavaScript execution.

//difference betweeen div and span?
// So, div is a block-level element, but the span is an inline element. So because of the block-level element, it takes the full width and height, but because of the span and inline element, it only takes the width and height of the content which it has. So we can give the width and height to my block-level element, but we cannot give the width and height to a span element because it is determined by the content it is inside it.

// any other difference other than width and height?
// Yes, actually when we give the margin and the padding to my div element, I think it will push the other element which are below to it onto the side to it. But in case it's an element, I think when I give the margin to it, it does not push the other element, like it would be chadjana, it would be come on above the other element, it does not push the other element.

//full form of css?
//casacading style sheets.

//meaning of cascading here
//I think the meaning of the cascading here is that the style which we... I think some of the styles like we give on light text or the background color which have which we are keep doing. So the to all the children, like we have give that particular property to the parent and all the children below them would inherit them from the parent. Some of the properties. And apart from that, like if... Like I give the style to that particular tag and to somehow in the next, we again give, change the style to that particular tag. Then the styling which is coming in the last would be applied to that particular element because the CSS would be scanning from the top to the bottom. I think this is the meaning of cascading.

//important keyword in css?
//Yeah, actually what happened, based on the specificity we have given to it, it is decided like what one role will be applied on that particular element. But sometimes, it is the instilled we have given the specificity to the element higher, but still it is not getting to be applied to that particular element. But if we want, like, this should be applied no matter what, then we can give the important to it and nothing can stop that particular style to be implemented on that particular tag or element.

//box model in css?
//So box model in CSS is like everything in the CSS behaves like a container, and it is like a box. So like in the rectangular shape, like the four sides. And so everything, every element inside the HTML is behaving like a box. And the padding which we have, I think, it is the content inside it. Now inside the box, we have the content and the padding which we have to, which we want to give to it. And apart from that, to the outside, we can give the border to it and the outline to it as well as the margin to it. So the width has been decided, like, the width has been decided by the addition of the content width as well as the padding, as well as the border, but the margin is not included, I think, in the width. So this is how the box model work. Like inside the box model, there is the content width and the padding is, and outside that, it should be like the margin, like the space between other elements.

//boxsizing: borderbox vs content-box?
//I think by default the box-sizing is content box, and we can change it to the box, border box, because with the border box what would happen, like the padding which we have given to it and the margin which we have given to it, or the border which we have given to it, it's not included in the width, like in the resultant width and height of the particular element. And if we don't give the width and height, if we don't give it, then the margin and the padding would also be included as the resultant width and height of that particular element.

//does margin also included? in calculaitong width and hegight?
//no

//JavaScript is single-threaded from multi-threaded
// . So JavaScript is a single-threaded language. Like, at the whole source code of the JavaScript is executed line by line, like the first line would be executed, then the second line would be executed with the compiler which are used is the just-in compiler, I think. So, a whole part, it would be compiled and as well as the interrupted as well.

// So what are different data types in JavaScript?
// JavaScript mainly have, I think, six or seven types of data types. One is a boolean, number, string, symbol, null, and all the non-primitives will become under the object.

// So could you please tell me like what, why there are two kind of categories like the primitive and the non-primitive in the JavaScript?
// Yeah, so basically what happens to all the primitive data type, what would happen if I assign a particular variable inside or the value of a particular variable inside another variable, then automatically a new memory has been allocated in the in the stack memory of the JavaScript. But in case of the non-primitive, what would happen like only the reference has been copied, not the whole new has been created in the memory, like in the heap memory. Only the reference has been created, not the other one. So they are coming in the non-primitive one and the other one has been created inside the primitive one. Also the primitive one, like you can hold only one value inside the primitive one, but the non-primitive one are the one which are act like a container in which you can hold multiple values inside it.

// let vs var?
// where basically the attached to the global scope and they are also the functional scope, but in case of let they are only the block scope. So what would happen like the JavaScript has been executed a particular code in two phases like the first is the memory education phase and the second is the execution phase. So what would happen in the case of var is like people say like a loosely coupled, but in case of let it is like strictly you cannot access that particular variable until a value has been initialized into it, even though the hosting has been done on both of them, but let is in the temporal zone until the value has been initialized in it and by default the value or a placeholder which is done until the value has been initialized in it is undefined, but you can also change the var variable, but you cannot change the let variable like you have make a particular variable with var. So you can create another variable using var with the same name, but in case of let you cannot create another variable with the same name again. So it is like a more restrict as compared to var.

// what is bom?
//dont know

// ok so can you tell me what is dom?
// So we are so DOM is basically a document object model. What would be happening that whenever the HTML is been parsing by the browser, by the render tree and the CSS DOM, JavaScript create a particular DOM tree of the HTML file. What will be the parent of that particular tag and all the properties that you do like what will be the styling of it, what will be the height, like all the definition has been done. Like the DOM is the single place of truth for the browsers and it is the one which is responsible for what elements would be visible on the screen at the end.

// i am not asking what dom does, tell  me what is dom?
// Actually in the DOM, what happens is it is a case in the HTML parsing, like it is a case, it is coming. The thing which creates the DOM and we want to render it in our browser, so it is a case in the DOM. So that the browser can render the particular page in a word. Can render our page. So what would happen, like first the browser starts parsing. It would then and what would happen, like it will start parsing and then it would create an entry tree of it. And inside the entry tree, there is a whole kind of information, like what is this bot is and what are the children of the particular element, what are the properties related to that particular element, for also CSS has been configured by from the CSS DOM and at the end the DOM has been created. So there is nothing but a map or you can say a tree in which there is a whole kind of information regarding what would be the final display on our screen. So the whole information for the DOM tree has been created after the combination of the render tree and the CSS DOM. So it is the final information which is going to be rendered on our page and all the properties related to it, all the arguments, all the click listener are added and would be attached to our DOM.

// in dom its document object model? so what is document here like what it represent?
// Actually, whatever we write in a word, or whatever we write in a word, is nothing but a document. Like, all the tags are representing something. So it is nothing but a document which you want to show on our page. So what happens like, yeah, so it's a document of an element or the tag which we have. So it is like that. And also the document is like a browser where we play, which the document, this is the browser that has given to us, so that we can manipulate a particular DOM. But the DOM is nothing but it is going to represent each tag, like, it is a tree of all the tags, like, which one is coming after that, which one is coming before that. So it is nothing but a tree of tags. But a document, like, in the world, we have to create a particular document. So it's a combination of all the tags or all the information which we want to display on our particular screen. I think this is what a document is.

//==========OUTPUT BASED QUESTIONS =========

// var x = 20;

// function fun() {
//   console.log("hmm", x);
//   var x = 10;
// }
// fun();

// console.log("5" + 3); //53
// console.log("5" - 3); //2

// console.log(5 == "5"); //true
// console.log(5 === "5"); //false

// console.log(typeof NaN); //null

// console.log(NaN === NaN); //false //why its false bcz nan may be any num come from any string

// console.log(1 < 2 < 3); //true
// console.log(3 > 2 > 1); //false

//create an array and there is h1 in html so when someone click on h1 it should change with name inside the array, like first change with 0 index thne again click change with 1 then again click chnage with 2 index etc

// const arr = ["Radha", "kanah", "mohan", "shayma"];

// const h1tag = document.getElementsByTagName("h1");
// let ind = 0;
// h1tag[0].addEventListener("click", () => {
//   h1tag[0].textContent = arr[ind];
//   ind < arr.length - 1 ? ind++ : (ind = 0);
// });

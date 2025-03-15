//First we Select the Elements of Document(HTML code through you created that page) 
//than we manupulate
//There are multiple way of Selecting the Elements of the HTML document

document.getElementById()//It return Particular Element --><p id="para">text</p>
document.getElementsByClassName() //it return HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]
document.getElementsByTagName() //it return HTML collection

document.querySelector() //Slect first element by class id and tag by using . # 
//ite return particular element
//<li class="list">SuperMan</li> only first Elemnt

document.querySelectorAll()
//it Return NodeList(5) [li.list, li.list, li.list, li.list, li.list]

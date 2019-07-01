/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Coder- Ahirina Rivera 
Start- 6/26/2019
End- 6/28/2019
******************************************/
 

/*** 
 Gobal variables that store the DOM elements **/
 const students = document.querySelectorAll(".student-item"); 
 
 const page = 10; /*** Variable to store the 
  number of items to show on each “page”, 
  which for this project, is 10. */
 
 
 
 
 /*** `showPage` function to hide all of the items ***/
 
  const showPage = (students,page) => {
      let startIndex = (page * 10) - 10;
      let endIndex = (page * 10);
  
  for (let i = 0; i < students.length; i++) {
  if (i >= startIndex && i < endIndex ) {
  students[i].style.display = 'block'; 
  } else {
  students[i].style.display = 'none';
  }
 }
 
 };
  showPage(students,1);
 
 /*** 
  `appendPageLinks function` to generate, append, and add 
  functionality to the pagination buttons.
 ***/
 function getNumberOfPages() {
   return Math.ceil(students.length / page);
 }
 
 const appendPageLinks = (students) => {
   let div = document.createElement('div');
      div.className = 'pagination';
   let page = document.querySelector('.page');
      page.appendChild(div);
   let ul = document.createElement ('ul');
      div.appendChild(ul);
  
 
  for (let i = 1; i <= getNumberOfPages() ; i++) {
      let li = document.createElement('li');
         ul.appendChild(li);
      let a = document.createElement('a');
         a.setAttribute("href", "#");
      if (i==1) {
         a.className = 'active';
      }
      a.textContent = i;
         li.appendChild(a);
 
      a.addEventListener("click", () => {
         let a = document.querySelectorAll('.pagination li a')
         for(let i = 0; i < a.length; i++ ) {
            a[i].className = '';
         }
         event.target.className = "active"
   showPage(students, event.target.textContent );
 
      });
  }
 } 
 
 appendPageLinks(students);
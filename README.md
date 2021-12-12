# Term Project: Ziyang Jin's Portfolio

METCS 601 2021 Fall 2

Ziyang Jin

## Overview

This website is about me, including  (1) A brief introduction about me in the homepage; (2) My education experience in Boston University and Nanjing University of Aeronautics and Astronautics,  as well as my transcripts; (3) My work experience in Hainan Airlines; (4) My photo gallery including graduation memories in China, Las Vegas and California journey; (5) My resume; (6) A form to connect with me.

## Key Feature

### (1) CSS Grid

All pages layout is through CSS Grid. There are 2 grids in the homepage and "Connect with Me" page , a sidebar on the left, including my selfie, links to my LinkedIn and Github , and the main content area on the right. The width ratio of 2 grids are 1:3. When the screen width is less than 768px, the sidebar will move to the top of main content to better fit the mobile phones and tablets. The font size and padding will also be decreased.

### (2) Flexbox

The "Photo Gallery" page layout is through Flexbox. There are 3 columns of photos, Graduation, Las Vegas and California Memories. When the screen width is less than 768px, there will be only 1 column in vertical arrangement to better fit the mobile phones and tablets.

### (3) Photo Modal (DOM Manipulation)

When you click a picture in the "Photo Gallery" page, the modal will pop out with full screen size photo and caption. When you click outside the photo modal, it will get back to the original view.

### (4) Video/PDF Embedded

A Youtube video about our Kungfu Panda Dreamliner and my resume in PDF is embedded in the "Work Experience" and "My Resume" page.

### (5) API and DOM Manipulation

A form validation function is implemented in the "Connect with Me" page, including the first name/last name character and length validation, email validation, phone number and length validation. The error message in displayed through DOM.

The form is posted through Formspree API. An email will be sent to me when somebody successfully submits the form. By logging in the Formspree API back office, I can extract the data in excel to analyze my visitors' contact information, what attracts them most and their messages.

### (6) Vue 

The transcript is displayed through Vue in the "Education Experience" page.  The user can click the button to Show/Hide my undergraduate and postgraduate transcripts. There is also a course search bar. The page will display the filtered course list only the course number or course name include the search term input by the user.  It can also calculate the average GPA of all courses.

### (7) Some ES6 Features

1. Let/Const used in calculateGPA() in the Vue part;
2. Arrow Function used in filteredList() in the Vue part;
3. Class "Course" with attributes course number, course name and course grade used in the Vue part;
4. Iterator used in calculateGPA() in the Vue part;
5. Template String used in dynamic error message in the validateForm() in "Connect with Me".










# Sayingfy
#### The web application allows users to view, delete, and vote on quotes, March 31, 2020 
#### By **Waithera-m**
## Description
The web application allows users to view sample quotes and add their own quotes. Users can also upvote or downvote existing quotes or delete the quotes that have been displayed. 
## Setup/Installation Requirements
To use the application, users need internet access and web browsers, preferably  Chrome, Safari, and Firefox.
## Known Bugs
* The web app does not highlight the quote with the highest number of upvotes.
## Behavior Driven Development (BDD)
|Behavior                |Input                                           |Output                                                      |
|-----------------------|-------------------------------------------|------------------------------------------------------------|
|The landing page loads |Users scroll and click on view quote button|Users see quotes' content, creation date, and number of votes. They also see the vote and delete buttons, users click on the upvote buttton to upvote quotes, the downvote button to downvote quotes, or delete button to delete quotes|
|The landing page loads|Users navigate to the form, which is on the right side of the page|Users fill the form inputs and click on the Add Quote button to add their quotes|
## Technologies Used
* HTML - HTML dictates the structure of webpages. The hypertext language was used to create the form to collect users date. 
* CSS & Bootstrap - CSS determines the appearance of webpages. The styling language was used to add background images and colors and style the site's content.
* [Angular-Cli](https://angular.io/) - version 9.0.5. -  Angular is a TypeScript-based framework. The framework's components were used to refactor code and promote code maintenance. Inbuilt and custom directives, such as ngFor and ngIf, in turn, were used to loop through the quotes array, to determine when users could see quote details, such as date, author, and votes, to validate the form, and to add new quotes. A custom pipe was also used to calculate and display the number of days that had elapsed since each quote was added. 
## Support and contact details
You are free to suggest and improve the code. To make your changes:
* Fork the repo
* Create a new branch
* Create, add, commit, and push your changes to the branch
* Create a pull request
* You can also contact the creator via this email address: njihiamary11@gmail.com
## Demo
You can view changes made to the website by visiting this working live demo: https://waithera-m.github.io/Sayingfy/
### License
*MIT*
MIT License Copyright (c) 2020 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
Copyright (c) 2020 **Waithera-m**

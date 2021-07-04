# _Mr. Roboger's Neighborhood_

#### _Web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with some exceptions. The user can enter a new number and see new results over and over again without refreshing the page._

#### By _**Carlos Urquiza**_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _Git_

## Description

_This web application takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:_

* **Numbers that contain a 1:** All digits are replaced with "Beep!"
* **Numbers that contain a 2:** All digits are replaced with "Boop!"
* **Numbers that contain a 3:** All digits are replaced with "Won't you be my neighbor?"

## Setup/Installation Requirements

* _Clone this repository. To clone using HTTPS, click on the green download button above the list of files and click on the clipboard icon to save the repository URL._
[![Clone button](img/clone_button.png)](#)

* _Open your terminal._
* _Navigate to the directory (such as your Desktop) where you want the cloned directory._
* _Type `git clone` and paste the URL you copied._
* _Press Enter._
* _Navigate to the project folder on your computer and open the `index.html` file to view the webpage._
* _Alternatively, you can view the live webpage via this [GitHub Page](https://webquiza.github.io/epicodus_code_review_3/)._

## Specifications

**Describe: roboTalk();**

```
Test: Numbers that contain a 1: All digits are replaced with "Beep!"
Code: roboTalk(1);
Expected Output: "0, Beep!"
```
```
Test: Numbers that contain a 2: All digits are replaced with "Boop!"
Code: roboTalk(2);
Expected Output: "0, Beep!, Boop!"
```
```
Test: Numbers that contain a 3: All digits are replaced with "Won't you be my neighbor?"
Code: roboTalk(3);
Expected Output: "0, Beep!, Boop!, Won't you be my neighbor?"
```

## Known Bugs

* _If output is already shown then user clicks the submit button without first entering a number, the output solid border remains visible on the front end._

## License

MIT License

Copyright (c) 2021 Carlos Urquiza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact Information

_Feel free to contact me at webquiza@gmail.com with any questions regarding this webpage._
# string_calculator.js
Search...
Umuzi Remote work
1. Syllabus
2. Topics
3. Workshops
4. Projects
Android with Kotlin Projects
Constraint Layout Using Layout Editor
Data Binding Basics
Linear layout using the Layout Editor
User Activity
Androids
Incremental Counter
Information Page
Angular Tutorial
Assertive programming kata
Bootcamp Writing Assignment
Build your first personal website
Capstone project
Gmail Text Scraper
Pair Stairs
Spaced Repitition machine to help you remember what you read
The Quizmaster
build a Chrome Extension that measures time spent in meetings
Consume Github API
DAGs with Airflow
Data-science-specifics
MEDIUM: Cross-validation & Simple Linear Regression
Dashboard Assignment
EASY: Google Data Studio Assignment
HARD: Live Dashboard Assignment
EASY: Plotly Dashboard Assignment
HARD: Webscraping and Live Dashboard Assignment
Data Modelling Challenges
HARD: Network Intrusion
Data Visualisation Projects
MEDIUM: Evolution of Linux Visualisation
MEDIUM: Financial Services Use in Tanzania
MEDIUM: Data Wrangling
MEDIUM: Decision Trees
Introduction to Jupyter Notebooks
MEDIUM: K-Means Clustering Assignment
Logistic regression
MEDIUM: Predict breast cancer
MEDIUM: Predict credit card approvals
MEDIUM: Multivariate Linear Regression
MEDIUM: Natural language processing
MEDIUM: OOP for data science
MEDIUM: Statistical Thinking
Webscraping Assignment
Distributed workloads with ZeroMQ
Email random inspirational quote
Expose a simple REST api for your game
ExpressJS
Game of life: Angular elements
Git Basic Exercises
How to submit your project
Java Projects
Consume own api using curl
File IO + Logging + Errors
Introduction to Spring Boot
Introduction to Spring Boot - part 1
Introduction to Spring Boot - part 2
Introduction to Spring Boot - part 3
Introduction to Spring Boot - part 4
Introduction to Spring Infrastructure
Introduction to Spring Infrastructure part 1
Introduction to Spring Infrastructure part 2
Introduction to Spring Infrastructure part 3
Java Generics
Java collections
Java data structures
SQL Extended
Level 1 programming katas
Linux challenges
Advanced Linux challenges
Beginner Linux challenges
Memory Game: rebuild using a modern web frontend framework
Memory game in vanilla js
Memory game using Angular Material
Nodejs Challenges
1: Node & File IO
2 (alt): Node & mongoDB assignment
3: Express, forms and templates
4: Expose a JSON API
Add a little Ajax
Node & SQL assignment
OOP Excercises
Animals
Animals Part 1. OOP basics
Animals Part 2. Adding Tests
Bank Accounts
Dice
Person
Pre bootcamp challenges
Python projects
Database migrations with SQLAlchemy
Django - exposing a REST api with a real database
Getting to know Python
Python and Kafka
Python and MongoDB
Python and Spark
create a REST api to interact with actual database
expose a simple JSON rest api
RabbitMQ
SQL
Semitone Challenge
1. semitone difference - basic algorithm
1. Make a simple GUI
3. Advanced algorithm
4. A gui that is more...awesome
Add Redux to your semitone game
Test Driven Development
Password Checker
Add logging to password checker
password-checker
MEDIUM: Resturaunt menu system
EASY: factorials
MEDIUM: lots and lots of tdd katas
MEDIUM: recursive search
EASY: simple-calculator part 1
MEDIUM: simple-calculator part 2
string-calculator
HARD: ten-pin bowling scoring system
Validating user input for web
consuming APIs with the requests module
iOS Mobile
Codable, File Manager, URL
Drag and Drop, Multithreading and Delegation
More Swift, Gestures and Animations
Multithreading Layout and Other Functionality - Animated Set
Multithreading Layout and Other Functionality - Graphical Set
Swift and More
5. Katas
6. Department Processes
Code Review Feedback Notes
Contact
Credits
How to Contribute
Online Learning and bootcamp
More
 Github repo
 Credits
  
 Edit this page Umuzi Tech Department > Projects > Test Driven Development > string-calculator
STRING-CALCULATOR
Tags	tdd regular-expressions
Hard Prerequisites	
PROJECTS: simple-calculator part 1
To submit this project follow the link below: TILDE
Set up your environment
Javascript
Please test your code using jasmine.

Your directory structure should look like this.

    >node_modules    <---- make sure this is in your .gitignore
    >spec
        > support
            - jasmine.json
        - string_calculator_spec.js
    >src
        - string_calculator.js
    - package.json
Python
Your project is expected to be completed using pytest. You are expected to follow industry best practices in all things. This means that you need to have a directory structure that is in good shape. Please name your files and folders like this:

├── string_calculator   the package under test
│   └── calculator.py
├── requirements.txt    installation requiremnts
├── setup.py            installation script for the package under test
└── tests               all package tests go in this directory
    └── test_calculator.py
Please take a look at this topic to see an explanation of the required directory structure. TOPICS: Automated Testing in Python

Instructions
Before you commence, first read through TOPICS: Data Validation . Upon completion, read through TOPICS: Regular Expression Resources .

Please note that this project should be done in a TDD manner.

1. Create an add function that can handle up to two integers passed in as a string.
Create a function called add() that takes in a string as a parameter and behaves in the following way:

add("")
// should return 0

add("1")
// should return 1

add("1,1")
// should return 2

Note: The output that the function returns should be an integer and not a string.

2. Modify the add function to handle multiple integers.
add("1,2,3,4")
// should return 10

add("")
// should still return 0

add("1")
// should still return 1

add("1,1")
// should still return 2
As you keep adding more functionality to your code always make sure that the previous functionality you implemented still works flawlessly. Keep this in mind as you continue to modify your code.

3. Modify the add function so that it can handle new lines between integers.
add("1\n2,3" )
// should return 6
4. Modify the add function so that it can handle different delimeters.
Delimiters will be specified in the following manner:

”//[delimiter]\n[numbers…]”, the default delimiter will be in the beginning of the string just before a new line character (”\n”).For example:
add("//;\n1;2")
// should return 3

add("//4\n142")
// should return 3
In the first case, the default delimiter is: “;”.

In the second case, the default delimiter is: “4”.

5. Modify the add function so that it can handle negative integers.
If a negative number is passed into the add function it should throw this exception: "negatives not allowed"

The exception should contain a list of all the negative integers that were passed into the add function.

For example:

add("-1,-2,3,4")
// should throw the following:
    'ERROR: negatives not allowed -1,-2'
6. Modify the add function so that it ignores integers greater than or equal to 1000.
add("//;\n1000;1;2")
// should return 3
7. Modify the add function so that it can support delimiters of any length
As long as the string passed in satisfies this format, “//[delimiter]\n[integers…]“, which was explained above. The add function should be able to handle it. For example:

add("//***\n1***2***3")
// should return 6
8. Modify the add function so that it is able to support different delimiters of any length
As long as the string passed into the add function follows this format, “//[delim1][delim2]\n[integers…]“, the add function should be able to handle it:

For example:

add("//[:D][%]\n1:D2%3")
// should return 6

add("//[***][%%%]\n1***2%%%3")
// should return 6

add("//[(-_-')][%]\n1(-_-')2%3")
// should return 6

add("//[abc][777][:(]\n1abc27773:(1")
// should return 7

9. Modify the add function so that it can handle invalid input.
If the string passed in is invalid, your code should be able to detect this and throw an error.

Hint: A valid string input follows these formats:

- "integer,integer,integer" e.g "1,2" or "1,2,3,4"

- "integer \n integer,integer e.g "1\n2,3"

- "//delimiter \n integer delimiter integer" e.g "//;\n1;2"

- "//[delimiter][delimiter]\n integer delimiter integer" e.g "//[\*][%]\n1\*2%3"
If the string doesn’t abide by any of these formats, it should be considered invalid.

add("//;\n1000;1;2;")
// should throw the following:
    'ERROR: invalid input'

add("   //;\n1000,1;2")
// should throw the following:
    'ERROR: invalid input'

add("1,2,3//;\n1000,1;2")
// should throw the following:
    'ERROR: invalid input'

why is this important?
If you’re wondering to yourself, “Why is this sooo important!?” take a look at TOPICS: Data Validation
RAW CONTENT URL


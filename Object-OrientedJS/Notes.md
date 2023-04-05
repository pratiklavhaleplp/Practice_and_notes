#### Introduction
- HTML for **Contents**, CSS for **Presentation**, JavaScript for **Behaviour**.
    - Javascript is not just used for **web development** it can be used in diffferent environments like on servers, mobiles, desktop applicaitons. Now this environments are known as **host environments** each **host environment** provides special set of API's to interact with the system.

- Webmaster who were creating HTML web applications thought that only content is not enough they needed more user interation with HTML page and also they wanted to save server round trips for basic operations like form validation. 
    - Two options came up **Java Applets** and **LiveScript** which was developed by **Brenden Eich** in 1995, LiveScript then got included in Netscape 2.0 browser under the name of **JavaScript**.
    - **Applets** didn't catch up, but **javascript** did. The ability to use short code snippets embedded into HTML docs which was capable to manupulate static html pages was embraced by webmaster community.
    - Later on competing web browser vendors like Microsoft launched 
    **IE3.0** with JScript which was reversed engenered version of javascript plus some IE specific features, eventually there was an effort to standerdize the various implementations of the language, and this is how ECMAScript was born **European Computer Manufacturers Association (ECMA)** which defined the core parts of javascriptm programming language without browser and web-page specific features.

- Javascript is a term compraises of three important pieces **[ECMAScript, Document Object Model (DOM), Browser Object Model (BOM)]**
    - **ECMAScript** : This part is independent of browser. Defines the core functionalites of javascript.
    - **Document Object Model (DOM)** : This provides a way to work with HTML and XML document. Javascript provides limited access to what is scriptable on the page mainly forms, links, and images Later it was explained to make all the elements scriptable. This let to the creation of DOM standard by **World Wide Web Consortium (W3C)** as language independent which specified ways to manupulate structured HTML documents.
    - **Browser Object Model (BOM)** : This is the set of objects which are only related to the browser environment and were never part of any standards until HTML5. After HTML5 BOMs are getting standardized.

- At present we can use JS in :
    - Build powerful web applications. 
    - Write server side code with Node.js, you can write JS and run it on **Rhino** *JS engine which is written in java*. 
    - Develop mobile applications including iphone, android, tablets using **PhoneGap, Titanium, etc**.
    - Write command line tools and scripts that can automate administrative task on your desktop using **Windows Scripting Host(WSH)**, Webkit's **Javascript** Core *which is available on all Macs*
    - Create cross-operating system desktop applications using mozillas **XULRunner and Electron**. Slack, Atom, Visual Studio code has been written in Electron.
    - **Emscripten** can be used to compile C/C++ code into an asm.js format and you can run this into web-browser.
    - Testing frameworks like PhantomJS has been developed with the help of Javascript.
    - ***Javascrpt was firstly used in web-browsers but now we can say javascript is every where***

- Basic Info related to ES5 and ES6
    - **ES5** release is one of the most important milestone of ECMAScript which was officially accepted in *December 2009* ES5 standard is implemented and supported in all of the browsers and server-side technologies. This release was special because new objects and properties were introduced also strict mode was introduced in this release. Strict mode is a subset of the language that excluded depricated features of the language, you can include this or you can ignore **use strict** is backward compatible older versions before ES5 will ignore this string.
    - **ES6** was officially accepted on *June 17 2015, all the modules and classes are using use strict by default here. Strict mode is enforced by default on all the modules. 
        - Broadly there are two kinds of fondamental changes in ES6 they are.
            - Improved syntax for new features and there were editions to the standard libraries like classes and promisses.
            - New language feature like generators. 
        - ECMAScript 6, ES6, and ECMAScript 2015 are the same, but used interchangeably.

- Browser support for ES6 
    - Most of the browsers are not supporting all the features of ES6 syntax. Still we can use all the features of ES6 with the help of transcompilers. As per current scenario **Bable** is the defacto ES6 trainscompiler.
    - Bable has good command line and **read-eval-print loop(REPL)** built in.
    - Bable REPL allows you to test small snippets of ES6. You can visit bable REPL and try to add some code which is in ES5 syntax and on the right hand pannel you would be able to see the transcompiled code which is in ES6.
    - For using the bable you need to include bable into your build system frameworks.
    - Below commands can be used for using bable into our build system framworks, we are using npm for using bable.
        ```
        mkdir babel_test
        cd babel_test && npm init
        npm install --save-dev babel-cli
        ```
    ``` 
    {
        "name": "babel_test",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
        "test": "echo "Error: no test specified" && exit 1"
        },
        "author": "",
        "license": "ISC",
        "devDependencies": {
        "babel-cli": "^6.10.1"
        }
    }
    ```

- Object Oriented Programming
    - Main Concepts are 
        - **Object** *instance of class*, **method** *capable of manupulating data of instance*, and property Class
        - **Encapsulation** *creating a class*
        - **Aggregation** *object inside a object/ nested object*
        - **Reusability/inheritance** *relation between parent child*
        - **Polymorphism** *one object multiple forms pratik is developer and son*
<br>
<br>
<br>
<br>

#### **Primitive data types, arrays, loops, and conditions**
- **Variables** used for storing concrete data. It is more convinient to use pi instead of 3.141592653589793.
    - For using a variable you have to declare it initialize it and give it a value.
        ``` 
        var test; // declare it. 
        test = 1; // initialize and giving a value.
        ```
    - Varibles are case sensitive.
        ```
        var test = 4;
        var Test = 45;
        //above two variables test and Test are different.
        ```
- **Operators** will take one or two values perform operation on it and return a value. Some of the important operators are.
    - **% (Modulo)** Will give you the reminder of the division operation.
        ```
        const modResult = 10%3; // output is 1
        const modResult = 10%2; // output is 0
        ```
    - **++ (Increment)/ -- (Decrement)** ++ Will increment the value by one and return you a value.         **Before using increment or decrement on a variable you have to initialize it and give it a value**.
        ```
        let incrResult = ++1;// Invalid left-hand side expression in prefix operation.
        let incrResult = 1++;// Invalid left-hand side expression in post operation.

        let incrResult = 0;
        incrResult = incrResult++; // output is 0 because we are assigning value to incrResult and then increment it. This type of increment is called as post increment.

        let incrResult = 0;
        incrResult = ++incrResult; // output is 1 because we are increment a value and then assigning it to incrResult. This type of increment is called as pre increment. 

        Same thing goes with decrement 
        ```
        - **Increment or Decrement can be only performend on the variables if you are using ++1, 1++ you will be getting error, same thing goes with decrement operator.**
            ```
            console.log('testing : ',1++); //Uncaught SyntaxError: Invalid left-hand side expression in postfix operation
            console.log('testing : ',++1); //Uncaught SyntaxError: Invalid left-hand side expression in prefix operation
            ```
    - **Compound operator** are used in cunjunction with assignment operator.
        ```
        var compOperator = 4;
        console.log('add',compOperator +=4);
        console.log('sub',compOperator -=4);
        console.log('div',compOperator /=4);
        console.log('mul',compOperator *=4);
        console.log('mod',compOperator %=4);

        output is:
        add 8
        sub 4
        div 1
        mul 4
        mod 0
        ```
- **Primitive data types** are **Number, String, Boolean, Undefined, Null.**
    - **Number** includes floating point as well as numbers.
        - All the numbers including floating points and integers comes under number type.
        ```
        var test = 4;
        typeof test; // will return you the string as number
        ```
        - **Octal and HexaDecimal**
            - Octal are the numbers starting from 0 in javascript
            ```
            var octal = 0377;
            typeof octal; // number
            console.log(octal); // 255 converted number from octal to integer.
            ```
            - HexaDecimal are the numbers starting from 0x in javascript.
            ```
            var hexa = 0xff;
            typeof hexa; // number
            console.log(hexa); // 255 converted hexa to integer.
            ```
        - **Binary Literals**
            - In ES6 you can use **0b** or **0B** prefix to represent **Binary Literals**
            ```
            console.log(0b111); //7 0b111 binary number has been converted to integer.
            ``` 
        - **Exponent Literals** 
            - You can use 2e3 or 2E3 or 2E+3 for defining 2000.
            ```
            console.log(2e3); // 2000 
            ```
        - **Infinity** is the special value in javascript. It represents the value so big that jvascript will not be able to handle
            - To be presise in javascript **1.7976931348623157e+308** is the largest value javascript would be able to handel and the smallest value is **5e-324**
            ``` 
            typeof Infinity; // number 
            var a = 6/0; // Infinity. 
            ```
            - Addition/ Substraction/ Multiplication/ Division with infinity will result you infinity.
        - **NaN** Not a number. If you try to add/sub/mul/div a number with a charater let's say 'f' you will get NaN. Type if NaN is a number.
            - **Number.isNaN** is a global method which gives result in true or false. If the value is **number** then the result is **false** if value is **not a number** then the output of the method is **true**.
            - **Number.isInteger** will result true if the number is finite else will result false.
            ```
            console.log(Number.isInteger('test')); //false
            console.log(Number.isInteger(Infinity)); //false
            console.log(Number.isInteger(NaN)); //false
            console.log(Number.isInteger(123)); //true
            console.log(Number.isInteger(1.23)); //false
            console.log(1*undefined); // return NaN
            ```
    - **String** consist of any number of characters.
        - If characters are placed between single/ double quotes then the type is called as string.
            ```
            typeof ''// will return you string 
            typepf '1'// will return you string 
            ```
        - String conccatination is easy in javascript, we do it with the help of **+** operator.
            ```
            console.log('p'+'r'+'a'+'t'+'i'+'k');// pratik
            console.log('1'+2);//12
            console.log('1'+'2');//12
            // check last two examples carefully.
            ```
        - If we are using numbers in the string and using it as operand in an arithmatic operation then internally the string is converted to number and will provide the result. Only **addition** operator will work as string concatination because of it's ambiguity.
            ```
            console.log('3'*3);
            console.log('3'/3);
            console.log('3'-3);
            console.log('3'%3);

            //output
            9
            1
            0
            0
            ```
        - If conversion fails you will get NaN.
            ```
            console.log('1x' * 10); //NaN
            little confussion over here you can use any operator except addition (+) for getting NaN you know the reason please check above string concatination point.
            ```
        - **Special string**
            ```
            console.log('pra\ntik\rlav\rhale\tprabh\rudas');

            //output
            pra
            tiklavhale  prabhudas
            \t gives you two spaces
            ```
            ```
            console.log("\u0421\u0442\u043E\u044F\u043D");

            //output
            Стоян
            If you want to us special characters inside the string then you can use \u adding octal number for your specific special character. 0 in the prefix shows that you are using octal values here.
            ```
        - **String template literal**
            ```
            var a = 10, b = 15;
            console.log(`addition of a and b is: ${a+b}`);

            function add(a, b){
                return a+b;
            }
            console.log(`addition of a and b with function is: ${add(a, b)}`);

            //output
            addition of a and b is: 25
            addition of a and b with function is: 25
            ```
        - **Tagged template literal** ES6 has this feature.
            ```
            var firstName = 'James';
            var lastName = 'Bond';
            function transform(strings, ...substitutes){
                console.log(`${strings[0]} ${substitutes[0]} ${substitutes[1]} ${substitutes[2]}`);
            }
            transform`Name is ${lastName} ${firstName} \n ${lastName}`;

            //output
            Name is Bond James Bond

            In the above example you can see we have used \n and there is no difference in the string the reason is we are using the tagged template literal. So we can say with confidence that there is no effect of special strings like \n \r \t \u etc.
            The output is getting generated with the implementation of transform method.
            ```
    - **Boolean** can be either true or false.
        ```
        typeof true // boolean

        same goes with false
        ```
        - **Important note** 
            ```
            typeof 'true' // string
            ```
        - **Logical Operators** works with boolean values. 
            - ! (Logical not) NOT (negation)
            - && (Logical and) AND
            - || (Logical or) OR
            ```
            var test = 3;
            console.log(typeof test);
            console.log(typeof !test);
            console.log(typeof !!test);
            This shows that when you are using logical operator with numbers, string then the typeof that variable gets converted to boolean

            console.log(&&test) //Uncaught SyntaxError: Unexpected token '&&'.
            you can not use &&, || with one variable because they are used with two operands.
            ```
            - Converting different data types to boolean values.
            ```
            console.log(!0);
            console.log('For 0: ',typeof !0, !0, !!0);
            output:
                true
                For 0:  boolean true false

            console.log('');
            console.log('For empty String: ',typeof !'', !'', !!'');
            output:
                   // shows you have printed empty string.
                For empty String:  boolean true false

            console.log(NaN);
            console.log('For NaN: ',typeof !NaN, !NaN, !!NaN);
            output: 
                NaN
                For NaN:  boolean true false

            console.log(null);
            console.log('For null: ', typeof !null, !null, !!null);
            output:
                null
                For null:  boolean true false

            console.log(undefined);
            console.log('For undefined: ', typeof !undefined, !undefined, !!undefined);
            output:
                undefined
                For undefined:  boolean true false

            console.log(false);
            console.log('For false: ', typeof false, false, !!false);
            output: 
                false
                For false:  boolean false false
            ```
            - **And OR Results**
            ```
            true && true // true
            true && false // false
            false && true // false
            false && false // false

            true || true // true
            true || false // true
            false || true // true
            false || false // false 
            ```
            - **Important Note**
                You would be getting whole lots of stuff related to operator precedence and get into confussion, if you want to avoid it then try parenthesis.
            - **Lazy Evaluation**
                If you are using true with || operator then Javascript does not evaluate whole operation it simply gives you true output.
                ```
                true || false || true || false || true;
                - this will always evaluate to true.
                ```
            - **Comparision**
                ```
                1=='1'(T)//both the operands are first converted to same type and then comparision happens.
                1==='1'(F)//JS does not conver types here and direct comparision happens in this case.
                ```
            - **IMPORTANT POINT > NaN** is not equal to anything
                ```
                NaN==NaN // false.
                ```
    - **Undefined** comes when you try to access the variable which does not exist.
        ```
        console.log(test); //error is undefined test is not defined.
        typeof test; //result is undefined 
        ```
    - **Null** comes when you have declared the variable but you have not assigned any value to it.
        ```
        var test = null;
        console.log(test); // null
        typeof test; // null

        - The value null gets assigned by your code only. Implicitly javascript does not assign null to your variables. Javascript assigns undefined implicitly to the variable if variable is not declared.
        ```
        ```
        1*undefined// NaN
        1*null;// returns 0
        !undefined // true
        !!undefined // false
        !null // true
        !!null // false
        !NaN // true
        !!NaN // false
        "value: " + null; // result value: null (+) is always concatination.
        "value: " + undefined; // 'value: undefined'
        ```
    - **Symbols:** You can cerate symbols with the help of Symbol() method.
        ```
        var atom = Symbol();
        var atom = new Symbol();// you will get error as Symbol is not a constructor.

        - Notice S in the Symbol it is capital
        - The most important property of Symbol is that it is unique and immutable(Non Changing values in JS).
        ```
    - **IMPORTANT POINTS IN PRIMITIVE DATA TYPE**
        - There are only five data types in Javascript **Number, String, Boolean, Null, Undefined**
        - Every thing which is not primitive data type are called as **Objects** in Javascript.
        - Value of **null** is only null
        - Valeu of **undefined** is only undefined
        - value of **boolean** is either true or false
        - All values becomes **true** when converted to Boolean with exception given below.
            - ""
            - null
            - undefined
            - 0
            - NaN
            - false
<br>
<br>
<br>

- **Non Primitive Data Type in Javascript is Array** 
    - Array is a list consisting of multiple values and can be defined and accessed by single variable.
    - If you want to store 100 values of similar types(numbers || strings || boolean || objects) then if we can use **Array** raher then declaring 100 varibales.
    ```
    var teting = [10, 20, 30, 40, 50]; defining and assigning five values to testing variable.
    console.log(testing[4]); 50
    While logging console testing[4] we have got 50, but if we try to count 50 is the 5th variable. The reason is, in array the 1st element is which is 10 is at index position 0. 
    
    In array data type the starting of the first element starts from 0 and so on.

    Above example:
        10 - indexed at 0th position. console.log(testing[0]);  // 10
        20 - indexed at 1st position. console.log(testing[1]);  // 20
        30 - indexed at 2nd position. console.log(testing[2]);  // 30
        40 - indexed at 3rd position. console.log(testing[3]);  // 40
        50 - indexed at 4th position. console.log(testing[4]);  // 50
    ```
    - In **Array** data type we are accessing values of array with the help of [index] square braces. 
    - **Adding Element** in Array.
        ```
        var testing = [10, 20, 30];
        testing.push(40); push is the method to add element into the testing array.
        console.log(testing); // [10, 20, 30, 40] 
        40 has been pushed/added to the array named testing. 
        ```
    - **Deleting Element** in Array
        ```
        var testing = [10, 20, 30, 40];
        delete testing[3];
        console.log(testing); // [10, 20, 30, empty]

        After deleting we are getting empty in the 3rd index this shown that with the help of delete we can remove the element but the space is still there in the array.

        console.log(testing.length); 4
            - 4 shows that the length of testing array is 4 
        ```
    - array.**length** is the property through which you would be able to get the length of the array.
        ```
        var testing = [10, 20, 30, 40, 50];
        console.log(testing.length); 4
        ```
    - Array of **Arrays** you can store multiple arrays inside one array.
        ```
        var diet = [[oats, omlet, bread], [apple, bannana, orange], [chiken, eggs, milk], [dates, almonds]];
            - In above diet array we have four arrays
                - [oats, omlet, bread] 
                    -indexed at 0th position
                - [apple, bannana, orange] 
                    -indexed at 1st position
                - [chiken, eggs, milk] 
                    -indexed at 2nd position
                - [dates, almonds] 
                    -indexed at 3rd position
        
        console.log(diet[0]); [oats, omlet, bread] 
        console.log(diet[1]); [apple, bannana, orange] 
        console.log(diet[2]); [chiken, eggs, milk] 
        console.log(diet[3]); [dates, almonds]
        ```
    
<div>
    <h1 style="color:green;text-align:center;">pratik testing</h1>
</div>
     
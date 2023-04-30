- Selectors and Properties
  - A way of grabing a element from html document and styling it when necessary.
    - element
    - id
    - class
      - If you want specific **p** tag with test calls to get styles then you can also do it as below.
      - If you want to use multiple classes to one element tag then that also you can do see new-para and style-para classes.
        ```
        <!-- HTML -->
        <body>
        <p class="heading">Heading</p>
        <p class="testing">This is a testing text</p>
        <p class="new-para">This is a testing text</p>
        <p class="testing">This is a testing text</p>
        <p class="test-para">This is a testing text</p>
        </body>


        <!-- CSS -->
        p.testing{
            background-color: azure;
            color: blue;
        }
        p.heading{
            color: red;
        }
        ```
        <img src="./class-selector.jpg" width="100%" height="150"/><br>
    - **Difference between class and id selectors :** **classes** are ment to be used multiple times in the html pages, where as **id** is like using it once/ not multiple times in the html page.
    - **Grouping of selectors**- we can do this by adding **","** with the elements that you want to apply css rules.
        ```
        p, em, span, h1{
            color: green;
            background-color: white;
        }
        ```
        How grouping solved the problem of assigning multiple elements same property?
        ```
        h1 {color: purple;}
        h2 {color: purple;}
        h3 {color: purple;}
        h4 {color: purple;}
        h5 {color: purple;}
        h6 {color: purple;}

        // solution to above problem
        h1, h2, h3, h4, h5, h6 {color: purple;}

        ```
    - **Universal selector**- **"*"** this selector got introduces in CSS2. If you want to make every elemet red.
        ```
        *{color : red;}
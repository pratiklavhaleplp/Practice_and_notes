- ES6 introduced a special feature called as arrow function.
  ```
  var test = a => {
      console.log(a);
  }
  test(2);


  Discussion: Above a function has been created with one parameter with the help of arrow operator.
  ```
- Check below Example. Below code suffers a problem.
    ```
    var obj = {
        id: "awesome",
        cool: function coolFn(){
            console.log(this.id);
        }
    }
    var id = "not awesome";
    obj.cool();
    setTimeout(obj.cool, 100);

    <!-- output -->
    awesome
    not awesome

    Discussion: The problem is with the binding of this with the coolFn function inside the object "obj".
    ```
    - There are various ways to solve above problem.
        ```
        var obj = {
            id: "awesome",
            cool: function coolFn(){
                var self = this;
                console.log(self.id);
            } 
        }
        var id = "not awesome";
        obj.cool();
        setTimeout(obj.cool, 100);
        ```
        ```
        var obj = {
            id: "awesome",
            cool: () => {
                console.log(this.id);
            }
        }
        var id = "not awesome";
        obj.cool();
        setTimeout(obj.cool, 100);
        ```
        ```
        var obj = {
            id: "awesome",
            cool: function() {
                console.log(this.id);
            }.bind(this)
        }
        var id = "not awesome";
        obj.cool();
        setTimeout(obj.cool, 100);
        ```
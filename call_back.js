    //Eaxample 1:
    function f1(){
        console.log("Inside function1");
    }
    function f2(){
        console.log("Inside function2");
    }
    function f3(){
        console.log("Inside function3")
    }
    f1();
    f2();
    f3();

    //Example 2:
    function f1(){
        f2();
        
    }
    function f2(){
        f3();
        
    }
    function f3(){
        
        console.log("Inside function3")
    }
    f1();
    //Example 3 
    function func1() {
        console.log("Inside func1");
    }

    function func2() {
        console.log("Inside func2");
        func1();
    }

    func2();

    //Example 4:
    function countdown(n) {
        if (n <= 0) {
          console.log("Done!");
          return;
        }
        console.log(n);
        countdown(n - 1);
      }
      
      countdown(5);

      //Example 5:
      function fetchData(callback) {
        setTimeout(function() {
          console.log("Data fetched!");
          callback();
        }, 1000);
      }
      
      function processData() {
        console.log("Data processed!");
      }
      
      fetchData(processData);
      
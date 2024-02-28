


  //every function have its own scope
  //lexical scope example
  function outer(){
     let username = "Sumit"
      function inner(){
        console.log(username);
      }
      inner();
  }
  outer();
  console.log(username , "outer");

  //clouser exampple

  function makefun(){
      const name = "raghav"
      function displayname(){
        console.log(name);
      }
      return displayname;
  }
  // in clouser it return all lexical scope of outer function not an only inner function
  const func = makefun();
  console.log(func);

  //what is lexical scope
    //lexical scope is scope where inner function can access outer function local variable

    //
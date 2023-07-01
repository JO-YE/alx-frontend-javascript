function test() {
  const string = "abc";
  console.log(string);
  if(true) {
    console.log(string);
  }
  console.log(string);
}

// test();

testcase = (var1 = 90, var2 = 10) => {
  console.log(var1 + var2);  
};

// testcase(40, 50)

function testcase2(letter) {
  console.log(letter);
}

testcase2({a: "apple", b: "ball", c: "cat"});

// redestructruing
function case2({ a, b, c }) {
  console.log(a, b, c);
}

case2({a: "apple", b: "ball", c: "cat"});

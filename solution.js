const int1 = 55;
const int2 = 95;
const int3 = 65;

if (
  (int1 >= 50 && int1 <= 99) ||
  (int2 >= 50 && int2 <= 99) ||
  (int3 >= 50 && int3 <= 99)
) {
  console.log(true);
} else {
  console.log(false);
}

const a = 8;
const b = 3;
const c = 6;

if (a > b && a > c) {
  console.log("a is the biggest", a);
} else if (b > a && b > c) {
  console.log("b is the biggest", b);
} else {
  console.log("c is the biggest", c);
}

if (int1 > int2 && int1 > int3) {
  console.log("int1 is the biggest", int1);
} else if (int2 > int1 && int2 > int3) {
  console.log("int2 is the biggest", int2);
} else {
  console.log("int3 is the biggest", int3);
}

const str = "thon";
if (str.slice(0, 2) === "Py") {
  console.log(str);
} else {
  console.log("Py" + str);
}

console.log("----------------------");

if (int1 + int2 >= 50 && int1 + int2 <= 80) {
  console.log(65);
} else {
  console.log(80);
}

console.log("----------------------");

const int4 = 10;
const int5 = 5;

if (int4 + int5 == 8) {
  console.log(true);
} else if (int4 - int5 == 8 || int5 - int4 == 8) {
  console.log(true);
} else {
  console.log(false);
}

console.log("----------------------");

if (int4 == 15 || int5 == 15) {
  console.log(true);
} else if (int4 + int5 == 15) {
  console.log(true);
} else {
  console.log(false);
}

console.log("----------------------");

if (int4 % 7 == 0 || int5 % 7 == 0) {
  console.log("Multiple of 7", true);
} else if (int4 % 11 == 0 || int5 % 11 == 0) {
  console.log("Multiple of 11", true);
} else {
  console.log(false);
}

console.log("----------------------");

if (int4 == int5) {
  console.log((int4 + int5) * 3);
} else {
  console.log(int4 + int5);
}

console.log("----------------------");

if (int5 > 19) {
  console.log((int5 - 19) * 2);
} else {
  console.log(int5 - 19);
}

console.log("----------------------");

const firstName = "Antonio";
const age = 29;

if (age < 13) {
  console.log(firstName, "is a child");
} else if (age >= 13 && age < 20) {
  console.log(firstName, "is a teenager");
} else if (age >= 20 && age < 30) {
  console.log(firstName, " is a young adult");
} else {
  console.log(firstName, "is an adult");
}

switch (true) {
  case age < 13: // false
    console.log(firstName, "is a child");
    break;
  case age >= 13 && age < 20: // false
    console.log(firstName, "is a teenager");
    break;
  case age >= 20 && age < 30: // true
    console.log(firstName, " is a young adult");
    break;
  default:
    console.log(firstName, "is an adult");
    break;
}

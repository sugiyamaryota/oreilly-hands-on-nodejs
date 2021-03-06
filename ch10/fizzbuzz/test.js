"use strict";
const { strictEqual } = require("assert");
const fizzbuzz = require(".");

strictEqual(fizzbuzz(1), "1");
strictEqual(fizzbuzz(2), "2");
strictEqual(fizzbuzz(3), "Fizz");
strictEqual(fizzbuzz(4), "4");
strictEqual(fizzbuzz(5), "Buzz");
strictEqual(fizzbuzz(6), "Fizz");
strictEqual(fizzbuzz(7), "7");
strictEqual(fizzbuzz(8), "8");
strictEqual(fizzbuzz(9), "Fizz");
strictEqual(fizzbuzz(10), "Buzz");

strictEqual(fizzbuzz(11), "11");
strictEqual(fizzbuzz(12), "Fizz");
strictEqual(fizzbuzz(13), "13");
strictEqual(fizzbuzz(14), "14");
strictEqual(fizzbuzz(15), "FizzBuzz");
strictEqual(fizzbuzz(16), "16");

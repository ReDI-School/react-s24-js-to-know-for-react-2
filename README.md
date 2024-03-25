# Javascript to know for React workbook

## Spread & Rest Operator(s)

The spread and rest operators actually use the same syntax: `...`

Yes, that is the operator - just three dots. It's usage determines whether you're using it as the spread or rest operator.

**Using the Spread Operator:**

The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) or pull the properties out of an object. Here are two examples:

```jsx
const oldArray = [1, 2, 3];
```

```jsx
const newArray = [...oldArray, 4, 5];
// This now is [1, 2, 3, 4, 5];
```

Here's the spread operator used on an object:

```jsx
const oldObject = {
	name: 'Max'
};
const newObject = {
	...oldObject,
	age: 28,
}
```

`newObject` would then be

```jsx
{
	name: 'Max',
	age: 28
}
```

The spread operator is extremely useful for cloning arrays and objects. Since both are [reference types (and not primitives)](https://www.youtube.com/watch?v=9ooYYRLdg_g&feature=youtu.be), copying them safely (i.e. preventing future mutation of the copied original) can be tricky. With the spread operator you have an easy way of creating a (shallow!) clone of the object or array.

# **Destructuring**

Destructuring allows you to easily access the values of arrays or objects and assign them to variables.

Here's an example for an array:

```jsx
const array = [1, 2, 3];
const [a,b] = array;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array); // prints [1, 2, 3]
```

And here for an object:

```jsx
const myObj = {
	name: 'Max',
	age: 28,
}
const { name } = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}
```

Destructuring is very useful when working with function arguments. Consider this example:

```jsx
const printName = (personObj) => {
	console.log(personObj.name);
}
printName({name: 'Max', age: 28}); //prints 'Max'
```

Here, we only want to print the name in the function but we pass a complete person object to the function. Of course this is no issue but it forces us to call `personObj.name` inside of our function. We can condense this code with
destructuring:

```jsx
const printName = ({name}) => {
 console.log(name);
}
printName({name: 'Max', age: 28}); // prints 'Max'
```

We get the same result as above but we save some code. By destructuring, we simply pull out the `name` property and store it in a variable/ argument named `name` which we then can use in the function body.

# Resources:

- [Javascript.info: Rest parameters and spread syntax](https://javascript.info/rest-parameters-spread)
- [Javascript.info: Destructuring assignment](https://javascript.info/destructuring-assignment)

# Exercises

- [Use the Rest Parameter with Function Parameters](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-rest-parameter-with-function-parameters)
- [Use Destructuring Assignment to Extract Values from Objects](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-extract-values-from-objects)
- [Use Destructuring Assignment to Assign Variables from Objects](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-objects)
- [Use Destructuring Assignment to Assign Variables from Nested Objects](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-nested-objects)
- [Use Destructuring Assignment to Assign Variables from Arrays](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-arrays)
- [Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements)
- [Use Destructuring Assignment to Pass an Object as a Function's Parameters](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters)
- [The maximal salary](https://javascript.info/task/max-salary)


## forEach/map/filter/reduce

### [Iterate: forEach](https://javascript.info/array-methods#iterate-foreach)

The [arr.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method allows to run a function for every element of the array.

The syntax:

```jsx
arr.forEach(function(item, index, array) {
	// ... do something with item
});
```

For instance, this shows each element of the array:

```jsx
// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
```

And this code is more elaborate about their positions in the target array:

```jsx
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
	alert(`${item} is at index ${index} in ${array}`);
});
```

The result of the function (if it returns any) is thrown away and ignored.

### [Filter](https://javascript.info/array-methods#filter)

The `[find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)` method looks for a single (first) element that makes the function return `true`.

If there may be many, we can use [arr.filter(fn)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

The syntax is similar to `find`, but `filter` returns an array of all matching elements:

```jsx
let results = arr.filter(function(item, index, array) {
		// if true item is pushed to results and the iteration continue
	// returns empty array if nothing found
});
```

For instance:

```jsx
let users = [
	{id: 1, name: "John"},
	{id: 2, name: "Pete"},
	{id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2
```

## [Transform an array: `map`](https://javascript.info/array-methods#map)

The [arr.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method is one of the most useful and often used.

It calls the function for each element of the array and returns the array of results.

The syntax is:

```jsx
let result = arr.map(function(item, index, array) {
	// returns the new value instead of item
});
```

For instance, here we transform each element into its length:

```jsx
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
```

## All methods together

Credit: https://kentcdodds.com/blog/javascript-to-know-for-react

```jsx
const dogs = [
  {
    id: 'dog-1',
    name: 'Poodle',
    temperament: [
      'Intelligent',
      'Active',
      'Alert',
      'Faithful',
      'Trainable',
      'Instinctual',
    ],
  },
  {
    id: 'dog-2',
    name: 'Bernese Mountain Dog',
    temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'],
  },
  {
    id: 'dog-3',
    name: 'Labrador Retriever',
    temperament: [
      'Intelligent',
      'Even Tempered',
      'Kind',
      'Agile',
      'Outgoing',
      'Trusting',
      'Gentle',
    ],
  },
]
dogs.find(dog => dog.name === 'Bernese Mountain Dog')
// {id: 'dog-2', name: 'Bernese Mountain Dog', ...etc}

dogs.map(dog => dog.name)
// ['Poodle', 'Bernese Mountain Dog', 'Labrador Retriever']

dogs.filter(dog => dog.temperament.includes('Faithful'))
// [{id: 'dog-1', ..etc}, {id: 'dog-2', ...etc}]

dogs.reduce((allTemperaments, dog) => {
  return [...allTemperaments, ...dog.temperaments]
}, [])
// [ 'Intelligent', 'Active', 'Alert', ...etc ]
```

# Exercises

`filter`:

- https://javascript.info/task/filter-range
- [Use the filter Method to Extract Data from an Array](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array)

`map`:

- https://javascript.info/task/array-get-names
- https://javascript.info/task/map-objects

`reduce`:

- https://javascript.info/task/reduce-object
- [Use the reduce Method to Analyze Data](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-reduce-method-to-analyze-data)

All combined:

- [Use Higher-Order Functions map, filter or reduce to Solve a Complex Problem](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)
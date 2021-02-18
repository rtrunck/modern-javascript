import { render, screen } from '@testing-library/react'
import App from './App'


// Variables

test('should expect true', () => {
  // Your journey begins here: Replace the word false with true
  expect(true).toBeTruthy()
})

test('var is initialized to undefined', () => {
  var initial
  expect(initial).toEqual(undefined)
})

test('variables are function scoped', () => {
  var expectedValue = 2
  var actualValue = 1 + 1

  function scopedFunction() {
    var scopedVar = 3
  }
  expect(actualValue === expectedValue).toBeTruthy()
  //Fix
  // expect(scopedVar).toEqual(3)
})

test('var get hoisted', () => {
  var expectedValue = 2
  var actualValue = 1 + 1

  for (var chr of '😲😺') {
    var lastChr = chr
  }
  expect(actualValue === expectedValue).toBeTruthy()
  //Fill this in
  expect(lastChr).toEqual('😺')
})

test('let does not get hoisted -> it is block scoped', () => {
  let expectedValue = 2
  let actualValue = 1 + 1

  for (var chr of '😲😺') {
    let lastChr = chr
  }
  expect(actualValue === expectedValue).toBeTruthy()
  //Fix this broken test
  // expect(lastChr).toEqual('😺')
})

test('const cannot be reassigned', () => {
  // const should be used most of the time
  const initialValue = 3

  // Fix
  // initialValue = 2

  expect(initialValue === 3).toBeTruthy()
})

/*
Summary
var:
  function scoped
  undefined when accessing a variable before it's declared

let:
  block scoped
  ReferenceError when accessing a variable before it's declared

const:
  block scoped
  ReferenceError when accessing a variable before it's declared
  can't be reassigned
  */


// Types

test('types can change', () => {
  let foo = 42 // foo is now a number
  foo = 'bar' // foo is now a string
  foo = true  // foo is now a boolean
  //Fix 
  expect(foo).toBeTruthy()
  expect(typeof foo).toEqual('boolean')
})

test('about strings', () => {
  const jsString = 'Javascript strings can do many things'

  const wordArray = jsString.split(' ')
  // Fix
  expect(wordArray[0]).toEqual('Javascript')
})

test('numbers', () => {
  let aNumber = 42
  let bNumber = 6

  //Fix
  expect(6 * 42).toEqual(aNumber * bNumber)
  expect(++aNumber).toEqual(43)
  expect(bNumber--).toEqual(6)
})

test('objects are a bunch of keys and values', () => {
  const user = {
    name: 'Bat Man',
    car: 'Batmobile'
  }
  const name = user.name
  //Fix 
  expect(name).toEqual('Bat Man')

})

/*
Types summary:

undefined : typeof instance === "undefined"
Boolean : typeof instance === "boolean"
Number : typeof instance === "number"
String : typeof instance === "string"
BigInt : typeof instance === "bigint"
Symbol : typeof instance === "symbol"
*/

// Objects, Arrays and Destructuring

test('you can get object values many ways', () => {
  const user = {
    name: 'Bat Man',
    car: 'Batmobile',
    outfit: 'Cape'
  }

  const { name, car } = user
  //Fix
  expect(car).toEqual('Batmobile')
  expect(user.car).toEqual('Batmobile')
  expect(user['car']).toEqual('Batmobile')
})

test('arrays can destructure as well ', () => {
  const user = ['Ryan', '@rtrunck', 'Denver, CO']
  const name = user[0]

  const [, _, location] = user

  // Fix
  expect(name === 'Ryan').toBeTruthy()
  expect(location).toEqual('Denver, CO')
})

test('named destruturing', () => {
  const software = {
    l: 'Ecma Script',
    c: 'Brendan Eich'
  }

  const { l: language, c: creator } = software
  //Fix
  expect('Ecma Script').toEqual(language)
})

test('object values can be objects, functions, manythings', () => {

  function multiplication(x, y) {
    return x * y
  }

  const newFunction = (x, y) => {
    return x*y
  }

  const object = {
    attributes: { strictlyTyped: false, fun: 'absolutely' },
    name: 'Javascript',
    messaging: function (name) {
      return `Hey ${name}`
    },
    addition (x, y) { // Shorthand method name
      return x + y
    },
    multiplication // Shorthand
  }

  //Fix
  expect(object.attributes.fun).toEqual('absolutely')
  expect(object.addition(40, 2)).toEqual(42)
  expect(object.multiplication(40, 2)).toEqual(80)

})

test('computed property names simplify', () => {
  function objectify (key, value) {
    let obj = {}
    obj[key] = value
    return obj
  }

  const obj = objectify('name', 'Ryan')

  // Fix
  expect(obj).toEqual({name: 'Ryan'})

  const object = (key, value) => {
    return {
      [key]: value
    }
  }

  // Fix
  expect(obj).toEqual({name: 'Ryan'})


})
//Template literals


test('template literals', () => {
  function sayHello (name, email) {
    return 'Hey ' + name +
      ' We\'ll send you an email at ' + email
  }

  const name = 'Bat Man'
  const email = 'bat@man.com'

  expect(sayHello(name, email )).toEqual(`Hey ${name} We'll send you an email at ${email}`)
})

test('template literals also make writing React much easier', () => {
  function makeGreetingTemplate (name, email) {
      return '<div>' +
        '<h1>Hello, ' + name +
      '.</h1>' +
      "<p>We've emailed you at " +
      email +
      '. ' +
      '</div>'

  }

  const name = 'Bat Man'
  const email = 'bat@man.com'

  const template = `
    <div>
      <h1>Hello, ${name}</h1>
      <p>
        We've email you at ${email}.
      </p>
    </div>
  `
  expect(template).to(makeGreetingTemplate(name, email ))

})
//Arrow functions

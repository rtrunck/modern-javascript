import { render, screen } from '@testing-library/react'
import App from './App'


// Variables

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

test('should expect true', () => {
  // Your journey begins here: Replace the word false with true
  // Fix
  expect(false).toBeTruthy()
})

test('var is initialized to undefined', () => {
  // Implement
  var initial
  expect(initial).toBeDefined()
})

test('variables are function scoped', () => {
  var expectedValue = 2
  var actualValue = 1 + 1

  function scopedFunction() {
    var scopedVar = 3
  }

  // Implement
  expect(actualValue === expectedValue)
  // Move
  expect(scopedVar).toEqual(3)
})

test('var gets hoisted', () => {

  for (var chr of '😲😺') {
    var lastChr = chr
  }

  //Fill this in
  expect(lastChr).toEqual()
})

test('let does not get hoisted -> it is block scoped', () => {

  for (var chr of '😲😺') {
    let lastChr = chr
  }

  // Move
  expect(lastChr).toBeTruthy()
})

test('const cannot be reassigned', () => {
  // const should be used most of the time
  const initialValue = 3

  // Fix
  initialValue = 2

  expect(initialValue === 3).toBeTruthy()
})


// Types 

/*
Types summary:

undefined : typeof instance === 'undefined'
Boolean : typeof instance === 'boolean'
Number : typeof instance === 'number'
String : typeof instance === 'string'
BigInt : typeof instance === 'bigint'
Symbol : typeof instance === 'symbol'
*/

test('types can change', () => {
  let foo = 42 // foo is now a number
  foo = 'bar' // foo is now a string
  foo = true  // foo is now a boolean

  // Fix 
  expect(foo).toBeFalsy()
  // Implement
  expect(typeof foo).toEqual()
})

test('about strings', () => {
  const jsString = 'Javascript strings can do many things'

  const wordArray = jsString.split(' ')
  // Implement
  expect(wordArray[0]).toEqual()
})

test('numbers', () => {
  let aNumber = 42
  let bNumber = 6

  // Implement
  expect(6 * 42).toEqual()
  expect(++aNumber).toEqual()
  expect(bNumber--).toEqual()
})

test('objects are composed of keys and values', () => {
  const user = {
    name: 'Bat Man',
    car: 'Batmobile'
  }
  const name = user.name
  // Implement
  expect(name).toEqual()

})


test('you can get object values in many ways', () => {
  const user = {
    name: 'Bat Man',
    car: 'Batmobile',
    outfit: 'Cape'
  }

  const { name, car } = user
  
  // Implement
  expect(car).toEqual()
  expect(user.name).toEqual()
  expect(user['outfit']).toEqual()
})

test('arrays destructure as well ', () => {
  const user = ['Ryan', '@rtrunck', 'Denver, CO']
  const name = user.slice(0, 1)

  const [, _, location] = user

  // Implement
  expect(name === 'Ryan')
  expect(location).toEqual()
})

test('named destruturing', () => {
  const software = {
    l: 'Javascript',
    c: 'Brendan Eich'
  }

  const { l: language, c: creator } = software

  // Implement
  expect().toEqual(language)
})

test('object values can be objects, functions, etc.', () => {

  function multiplication(x, y) {
    return x * y
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

  // Implement 
  expect(object.attributes.fun).toEqual()
  expect(object.addition(40, 2)).toEqual()
  expect(object.multiplication(40, 2)).toEqual()

})

test('computed property names can simplify', () => {
  function objectify (key, value) {
    let obj = {}
    obj[key] = value
    return obj
  }

  const obj = objectify('name', 'Ryan')

  // Implement
  expect().toEqual({name: 'Ryan'})

  const object = (key, value) => {
    return {
      [key]: value
    }
  }

  // Implement
  expect(object('name', 'Ryan')).toEqual()
})

//Template literals

test('template literals', () => {
  function sayHello (name, email) {
    return 'Hey ' + name +
      ' We\'ll send you an email at ' + email
  }

  const name = 'Bat Man'
  const email = 'bat@man.com'

  // Implement
  expect().toEqual(`Hey ${name} We'll send you an email at ${email}`)
})

//Arrow functions

test('putting the fun in functions', () => {

  // Implement
  expect(declarationAdd(5, 4)).toEqual(9)

  // Move
  expect(expressionAdd(5, 6)).toEqual(11)

  // Function declaration
  // Hoisted
  // Must be declared with function
  function declarationAdd (x, y) {
    return x + y
  }

  // Function expression
  // Not hoisted
  const expressionAdd = function (x, y) {
    return x + y
  }

  // Arrow function, also an expression
  const arrowAdd = (x, y) => {
    return x + y
  }

  // Implement
  expect(arrowAdd()).toEqual()

  // Arrow function implicit return
  const arrowImplicitAdd = (x, y) => x + y

  // Implement
  expect(arrowImplicitAdd()).toEqual()

})
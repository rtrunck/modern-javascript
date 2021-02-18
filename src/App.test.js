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
  expect(true).toBeTruthy()
})

test('var is initialized to undefined', () => {
  // Implement
  var initial = "something"
  expect(initial).toBeDefined()
})

test('variables are function scoped', () => {
  var expectedValue = 2
  var actualValue = 1 + 1

  function scopedFunction() {
    var scopedVar = 3
    expect(scopedVar).toEqual(3)
  }

  // Implement
  expect(actualValue === expectedValue)

})

test('var gets hoisted', () => {

  for (var chr of '😲😺') {
    var lastChr = chr
  }

  //Fill this in
  expect(lastChr).toEqual(chr)
})

test('let does not get hoisted -> it is block scoped', () => {

  for (var chr of '😲😺') {
    let lastChr = chr
    expect(lastChr).toBeTruthy()
  }

})

test('const cannot be reassigned', () => {
  // const should be used most of the time
  const initialValue = 3


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
  expect(foo).toBeTruthy()
  // Implement
  expect(typeof foo).toEqual('boolean')
})

test('about strings', () => {
  const jsString = 'Javascript strings can do many things'

  const wordArray = jsString.split(' ')
  // Implement
  expect(wordArray[0]).toEqual('Javascript')
})

test('numbers', () => {
  let aNumber = 42
  let bNumber = 6

  // Implement
  expect(6 * 42).toEqual(252)
  expect(++aNumber).toEqual(43)
  expect(bNumber--).toEqual(6)
})

test('objects are composed of keys and values', () => {
  const user = {
    name: 'Bat Man',
    car: 'Batmobile'
  }
  const name = user.name
  // Implement
  expect(name).toEqual('Bat Man')

})


test('you can get object values in many ways', () => {
  const user = {
    name: 'Bat Man',
    car: 'Batmobile',
    outfit: 'Cape'
  }

  const { name, car } = user

  // Implement
  expect(car).toEqual('Batmobile')
  expect(user.name).toEqual('Bat Man')
  expect(user['outfit']).toEqual('Cape')
})

test('arrays destructure as well ', () => {
  const user = ['Ryan', '@rtrunck', 'Denver, CO']
  const name = user.slice(0, 1)

  const [, _, location] = user

  // Implement
  expect(name === 'Ryan')
  expect(location).toEqual('Denver, CO')
})

test('named destruturing', () => {
  const software = {
    l: 'Javascript',
    c: 'Brendan Eich'
  }

  const { l: language, c: creator } = software

  // Implement
  expect(software.l).toEqual(language)
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
  expect(object.attributes.fun).toEqual('absolutely')
  expect(object.addition(40, 2)).toEqual(42)
  expect(object.multiplication(40, 2)).toEqual(80)

})

test('computed property names can simplify', () => {
  function objectify (key, value) {
    let obj = {}
    obj[key] = value
    return obj
  }

  const obj = objectify('name', 'Ryan')

  // Implement
  expect(obj).toEqual({name: 'Ryan'})

  const object = (key, value) => {
    return {
      [key]: value
    }
  }

  // Implement
  expect(object('name', 'Ryan')).toEqual({name: 'Ryan'})
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
  expect(sayHello('Bat Man', 'bat@man.com')).toEqual(`Hey ${name} We'll send you an email at ${email}`)
})

//Arrow functions

test('putting the fun in functions', () => {

  // Implement
  expect(declarationAdd(5, 4)).toEqual(9)

  // Move
  //expect(expressionAdd(5, 6)).toEqual(11)

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
  expect(expressionAdd(5, 6)).toEqual(11)

  // Arrow function, also an expression
  const arrowAdd = (x, y) => {
    return x + y
  }

  // Implement
  expect(arrowAdd(5, 5)).toEqual(10)

  // Arrow function implicit return
  const arrowImplicitAdd = (x, y) => x + y

  // Implement
  expect(arrowImplicitAdd(4, 5)).toEqual(9)

})

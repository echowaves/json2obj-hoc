# json2obj-hoc
Higher-Order Component that adds ability for object to be re-constructed from JSON string properly preserving given Class behavior.

## Usage

In the class that you want to enhance with this HOC
```js
import Json2ObjHOC from 'json2obj-hoc'

```
Then declare your class and at the end ```export``` as Higher-Order Component
```js
class Account {
  // have to make publicKey optional for json2Obj HOC to work
  // (object must support a constructor with no parameters)
  constructor({ publicKey } = { publicKey: '' }) {
    this.publicKey = publicKey
    this.balance = 0
    this.stake = 0
  }

  // this method defines behavior of Account data type,
  // which will be preserved after you deserialize the object from JSON
  addBalance({ amount }) {
    this.balance += amount
  }
}

export default Json2ObjHOC(Account) // enhancing Account
```
Wrapping ```Account``` with ```Json2ObjHOC``` adds 2 methods to ```Account``` type.

```stringify()``` which is self explanatory -- returns JSON string representation of the object.

and

```parse(json)``` which returns object instance of correct type.

Here are examples how to use the ```Account``` object:

```js
import Account from './account'

let account = new Account({ publicKey: 'some public key' }) // constructor with required parameter
const amount = 100
account.addBalance({ amount })

const jsonAccount = account.stringify()
// jsonAccount will have the right amount

// now let's re-created another instance of the Account object from JSON string
const generatedAccount = new Account().parse(jsonAccount)
// can still call the addBalance method, because the object is of the right type
generatedAccount.addBalance({ amount })

console.log(generatedAccount.balance) // ----> 200
```

## Future
Currently only synch version is supported. There are plans to include asynch methods at some point.

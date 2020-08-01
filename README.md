# json2obj-hoc
Higher-Order Component that adds ability for object to be re-constructed from JSON string properly preserving given Class type

## Usage

In the class that you want to enhance with this HOC
```js
import Json2ObjHOC from 'json2obj-hoc'

```
Then declare your class and at the end ```export``` as Higher-Order Component
```js
class Account {
  // have to make publicKey optional for json2Obj HOC to work
  constructor({ publicKey } = { publicKey: '' }) {
    this.publicKey = publicKey
    this.balance = 0
    this.stake = 0
    this.stakeTimestamp = moment.utc().valueOf()
  }

  // this method will be preserved after you deserialize the object
  addBalance({ amount }) {
		this.balance += amount
	}
}

export default Json2ObjHOC(Account)
```

Here are examples how to use the ```Account``` object:

```js
import Account from './account'

let account = new Account({ publicKey })
const amount = 100
account.addBalance({ amount })

const jsonAccount = account.stringify()
// jsonAccount will have the right amount

// now let's re-created another instance of the Account object from JSON string
const generatedAccount = Account.parse(jsonAccount)
// can still call the addBalance method, because the object is of the right type
generatedAccount.addBalance({ amount })

```

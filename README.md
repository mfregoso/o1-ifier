# o1-lookup

A nano-utility for arrays of objects that optimizes the time complexity of array searches from O(N) to O(1) by transforming an array into an "indexed" object where each key is the value that is being searched for.

## How It Works
Suppose we have a users list API that returns an array of objects with the following schema for each user object:

```javascript
{
	name:  "Jamie Smith",
	avatar:  "https://avt.ar/1.jpg",
	profile: {
		id:  3478,
		desc:  "Hello, world"
	}
}
```
In this case, we would want to create an o1-lookup from all users based on the values their profile.id

Usage Example:

const getUserById = o1lookup(usersArr, "profile.id");

getUserById(3478); // returns entire Jamie Smith object

getUserById("3478"); // returns undefined because o1-lookup can differentiate between numbers and strings


# o1-ifier

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
To use o1ifier in this case, we would want to create an index based on the profile.id value.

Example: o1ifier(studentsArr, "profile.id")

### Start Demo
node runDemo.js
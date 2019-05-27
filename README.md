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
Suppose we have another API that returns an array of the top 1000 users, where each item is an object with only the userId and rank:
```javascript
{
	userId: 3478,
	rank: 42
}
```

### Start Demo
node runDemo.js

//Warning: Do not mistake any with mixed.
// Using any is completely unsafe, and should be avoided whenever possible.
function add(one, two) {
  return one + two;
}

add(1, 2);
add('1', '2');
add({}, []);

// It's danger!!!
// Even code that will cause tuntime errors will not be caugth by Flow:
function getNestedProperty(obj) {
  return obj.foo.bar.baz;
}
getNestedProperty({});

/**
 * There are only a couple of scenarios where you might consider using any:

When you are in the process of converting existing code to using Flow types and you are currently blocked on having the code type checked (maybe other code needs to be converted first).
When you are certain your code works and for some reason Flow is unable to type check it correctly. There are a (decreasing) number of idioms in JavaScript that Flow is unable to statically type.

 */
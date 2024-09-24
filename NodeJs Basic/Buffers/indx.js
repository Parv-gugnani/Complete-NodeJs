var buf = new buffer(10);

var buf = new buffer([10, 20, 30, 40, 50]);

var buf = new buffer("Simply Easy Learning", "utf-8");

// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10);
//allocates

// Creates an uninitialized buffer of length 10.
const buf2 = Buffer.allocUnsafe(10);

// Creates a Buffer containing array
const buf3 = Buffer.from([1, 2, 3]);

// creates a buffer from string
const buf4 = Buffer.from("hello world", "utf8");

Buffer.allocUnsafe(size);
const buf = Buffer.allocUnsafe(10);

console.log(buf);

buf.fill("a");

console.log(buf);

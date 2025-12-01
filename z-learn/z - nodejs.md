# API response FileSystemWritableFileStream
- Caching [inmemeory and distributed] eg redis
    - In-memory caching stores data directly within a server's RAM, providing fast access to frequently used data, while distributed caching extends this concept by storing data across multiple servers or nodes
- Query/Database optimization  [indexing,connection-pooling,pagination]
- Payload optimization [JSON lightweight]
- Network Optimization eg using CDNS and HTTP/2 instead of HTTP/1.1
- Asynchronous processing: For long-running tasks, use asynchronous processing to prevent blocking the main thread and improve API responsiveness. 
- Load balancing: Distribute incoming requests across multiple servers to prevent overloading and reduce bottlenecks. 
- Rate limiting: Control traffic to prevent abuse and ensure the system can handle expected loads. 
- Monitoring and profiling

---

## 🔧 CORE NODE.JS CONCEPTS

### 1. **What is the Event Loop? How does it work in Node.js?**

The event loop is a mechanism that allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel. Node.js is single-threaded but uses the event loop to handle concurrent operations like I/O, timers, and network calls.

**Phases of the Event Loop:**

* Timers
* Pending Callbacks
* Idle/Prepare
* Poll
* Check
* Close Callbacks

---

### 2. **Difference between `process.nextTick()`, `setImmediate()`, and `setTimeout()`?**

| Method               | When it Executes                           |
| -------------------- | ------------------------------------------ |
| `process.nextTick()` | After current operation, before event loop |
| `setImmediate()`     | On the "check" phase of the event loop     |
| `setTimeout(fn, 0)`  | After at least 1ms, during "timers" phase  |

---

### 3. **What is libuv?**

`libuv` is a C library that provides Node.js with an abstraction layer for asynchronous I/O. It powers the event loop and handles file system, TCP/UDP sockets, and timers.

---

### 4. **How does asynchronous programming work in Node.js?**

Node.js uses **callbacks**, **Promises**, and **async/await** to perform non-blocking operations. Instead of waiting for a task to finish, it registers a callback or uses a promise that resolves when the operation completes.

---

## 📁 MODULES & STRUCTURE

### 5. **CommonJS vs ES Modules**

* **CommonJS**: Synchronous (`require`, `module.exports`), default in Node.js.
* **ES Modules**: Asynchronous (`import`, `export`), more modern, tree-shakeable.

---

### 6. **How to handle circular dependencies?**

Use:

* **Dependency injection** (pass modules as parameters)
* **Refactor to shared module**
* Avoid logic execution on `require`, only export functions

---

### 7. **How to structure a large Node.js app?**

Use:

* Modular architecture (separate folders for routes, controllers, services, models)
* Dependency injection (e.g., using `awilix`)
* Environment-based configs
* Logging (e.g., Winston)
* Layers: `API → Controller → Service → DB Layer`

---

## 🗄️ FILE SYSTEM & STREAMS

### 8. **Efficiently read/write large files**

Use Node.js **streams**:

```js
const fs = require('fs');
fs.createReadStream('large.txt')
  .pipe(fs.createWriteStream('copy.txt'));
```

---

### 9. **What are Streams?**

Streams are objects for reading or writing data continuously:

* **Readable**: from source (e.g., file)
* **Writable**: to destination
* **Duplex**: both
* **Transform**: modify data

---

### 10. **How to handle backpressure?**

Check if `.write()` returns false, then wait for the `'drain'` event before continuing writes. This avoids overwhelming the destination.

---

## 🔐 SECURITY

### 11. **Prevent common vulnerabilities:**

* SQL Injection: Use ORMs or parameterized queries
* XSS: Sanitize input/output
* CSRF: Use CSRF tokens
* HTTPS: Always encrypt
* Headers: Use `helmet` middleware in Express

---

### 12. **Handle secrets in production**

* Use `.env` files with `dotenv` (never commit to Git)
* Use cloud services like AWS Secrets Manager, HashiCorp Vault

---

### 13. **Secure Express apps**

* Input validation (e.g., `Joi`)
* Rate limiting (e.g., `express-rate-limit`)
* Use `helmet`, `cors`
* Avoid `eval()`, sanitize user input

---

## ⚙️ PERFORMANCE

### 14. **Optimize Node.js App**

* Use cluster mode for multi-core CPUs
* Avoid blocking the event loop
* Use caching (e.g., Redis)
* Minimize DB calls, batch where possible

---

### 15. **What is clustering?**

Allows multiple Node.js processes to run and share the same port. Helps scale apps on multi-core systems using the `cluster` module.

---

### 16. **Handling memory leaks**

* Use `--inspect` or `heapdump` to analyze memory
* Avoid holding onto large objects or closures in long-lived scopes
* Use `WeakMap` for caching

---

## 🌐 NETWORKING/APIS

### 17. **How does Node handle HTTP requests?**

The `http` module creates servers. Each request is handled via callbacks asynchronously, and I/O is managed by the event loop.

---

### 18. **HTTP/1.1 vs HTTP/2**

* HTTP/2 supports **multiplexing** (multiple streams on one connection)
* Node.js supports HTTP/2 via the `http2` module
* HTTP/3 is UDP-based and not fully supported yet

---

### 19. **Implement rate limiting**

Use middleware like:

```js
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({ windowMs: 15*60*1000, max: 100 });
app.use(limiter);
```

---

## 🧪 TESTING

### 20. **Tools for testing**

* Unit: `Jest`, `Mocha`, `Chai`
* Integration: `Supertest`, `nock`
* E2E: `Cypress`, `Playwright`

---

### 21. **Debug in production**

* Use logging (Winston, Bunyan)
* Use APM tools (Datadog, New Relic)
* Remote debugging with `--inspect` and Chrome DevTools

---

### 22. **Testing API endpoints**

Use `supertest`:

```js
const request = require('supertest');
const app = require('../app');
describe('GET /api/users', () => {
  it('should return 200', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
  });
});
```

---

## 🧰 REAL-WORLD SCENARIOS

### 23. **Handle 1000s of concurrent requests**

* Use load balancers
* Scale with clusters or containers
* Optimize DB and use queues for async tasks

---

### 24. **Performance optimization example**

“I optimized an API that was calling the DB 10 times per request by batching the calls, caching static data in Redis, and reduced latency by 60%.”

---

### 25. **Handle long-running tasks**

* Use **child processes** or **worker threads**
* Offload to background job queues (e.g., **Bull**, **RabbitMQ**)
* Use **message brokers** for decoupling

---

Here's a clear breakdown of the **microtask vs macrotask queue**, **priority execution**, **main thread**, and **worker threads** in **Node.js**, with real-world context:

---

## 🧠 **Node.js Execution Model Overview**

Node.js runs on a **single main thread** for JavaScript execution, backed by **libuv**, which handles asynchronous operations via a **thread pool** and **event loop**.

---

## 📌 **Main Thread**

* Executes JavaScript code
* Handles the **event loop**, which processes queued tasks
* Performs tasks like parsing, executing functions, and handling callbacks

---

## 🔄 **Microtasks vs Macrotasks**

### 🧬 Microtasks (Higher Priority)

Queued in the **Microtask Queue**, executed **right after the current operation** and **before the event loop continues**.

**Examples:**

* `process.nextTick()`
* Promises (`.then`, `.catch`, `async/await` resolution)

### ⏰ Macrotasks

Queued in the **Macrotask Queue**, executed in the appropriate **event loop phase** (e.g., timers, I/O, etc.).

**Examples:**

* `setTimeout()`, `setInterval()`
* `setImmediate()`
* I/O callbacks (like `fs.readFile`)

---

## 🔺 **Priority of Queues (Execution Order)**

1. **`process.nextTick()`** (highest)
2. **Promises/microtasks** (`queueMicrotask()`, `.then()`)
3. **Timers** (`setTimeout`, `setInterval`)
4. **`setImmediate()`**
5. **I/O callbacks**

**Example:**

```js
setTimeout(() => console.log('setTimeout'), 0);
setImmediate(() => console.log('setImmediate'));
process.nextTick(() => console.log('nextTick'));
Promise.resolve().then(() => console.log('promise'));
```

**Output:**

```
nextTick
promise
setTimeout
setImmediate
```

---

## 👷 **Worker Threads in Node.js**

Node.js added `worker_threads` (from v10.5+) to support **multi-threaded** execution for CPU-intensive tasks.

### ✅ Use Cases

* Image/video processing
* Complex calculations
* ML inference
* Avoid blocking the event loop

### 🔧 How to Use:

```js
const { Worker } = require('worker_threads');

new Worker(`
  const { parentPort } = require('worker_threads');
  parentPort.postMessage('Hello from Worker');
`, { eval: true });
```

Each **Worker** has its **own event loop and memory**, unlike child processes which are completely separate OS processes.

---

## 🚦 Real-World Analogy

| Concept        | Analogy                        |
| -------------- | ------------------------------ |
| Main Thread    | A single cashier at a store    |
| Microtasks     | VIP line – gets served first   |
| Macrotasks     | Regular line – served next     |
| Worker Threads | Extra cashiers for heavy tasks |

Here is a simplified **Node.js Event Loop diagram in Markdown format** using text-based representation:

````markdown
# Node.js Event Loop Diagram (Markdown Format)

```
+-----------------+
|  JavaScript     |  ← Main thread (executes your JS code)
|  Execution      |
+--------+--------+
         |
         v
+--------+--------+
|     Event Loop  |
+--------+--------+
         |
   +-----+----------------------+
   |                            |
   v                            v
+------+                    +------------+
| Micro |                    |  Macro     |
| Task  |                    |  Task      |
| Queue |                    |  Queue     |
+------+                    +------------+
   |                            |
   |                            |
   v                            v
[ process.nextTick() ]    [ setTimeout(), setInterval(), I/O ]
[ Promise.then()     ]    [ setImmediate()                  ]

         |
         v
+--------------------+
| Execute Callbacks  |
+--------------------+
         |
         v
+------------------------+
| Event Loop continues…  |
+------------------------+

+---------------------+
| Worker Threads (Optional)  ← Used for CPU-heavy work
| - Separate thread
| - Communicate via messages
+---------------------+
```
````

This format is helpful for technical documentation or README files. Want a more advanced ASCII diagram with color highlights or embedded in HTML?

```js
import https from 'https';
import { HttpsProxyAgent } from 'https-proxy-agent';
import dotenv from 'dotenv';

dotenv.config();

const getResidentialProxyString = (country) => {
  const upperCountry = country.toUpperCase();
  const credential = process.env.R_PROXY_CREDENTIAL;
  const sessionKey = process.env.R_PROXY_SESSION_KEY;
  const host = process.env.R_PROXY_HOST;
  const port = process.env.R_PROXY_PORT;

  const escapedUsername = `${credential}${upperCountry}`;
  return `http://${escapedUsername}:${sessionKey}@${host}:${port}`;
};

const getHttpClientWithProxyResidential = (country) => {
  const proxyUrl = getResidentialProxyString(country);
  const agent = new HttpsProxyAgent(proxyUrl);

  const get = (url) =>
    new Promise((resolve, reject) => {
      https.get(url, { agent }, (res) => {
        let data = '';

        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve({ res, body: data }));
      }).on('error', reject);
    });

  return { get };
};

// Example usage
const fetchData = async () => {
  try {
    const client = getHttpClientWithProxyResidential('ca');
    const { res, body } = await client.get('https://example.com');

    if (res.statusCode !== 200) {
      throw new Error(`Request failed: ${res.statusCode}`);
    }

    console.log(body);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

fetchData();


```


Here's a comprehensive and categorized list of **important JavaScript methods** for working with **Strings**, **Numbers (Integers)**, and **Arrays**—these are the most commonly used in practical development:

---

## 🧵 STRING METHODS

### ✅ Basic

| Method                 | Description                            |
| ---------------------- | -------------------------------------- |
| `.length`              | Gets the length of the string          |
| `.charAt(index)`       | Gets the character at a specific index |
| `.includes(substr)`    | Checks if substring exists             |
| `.indexOf(substr)`     | Returns index of first match or -1     |
| `.lastIndexOf(substr)` | Last occurrence index                  |

### ✅ Transform

| Method                        | Description                       |
| ----------------------------- | --------------------------------- |
| `.toUpperCase()`              | Converts to uppercase             |
| `.toLowerCase()`              | Converts to lowercase             |
| `.trim()`                     | Removes whitespace from both ends |
| `.trimStart()` / `.trimEnd()` | Trims start or end only           |
| `.replace(old, new)`          | Replaces string                   |
| `.replaceAll(old, new)`       | Replaces all occurrences          |

### ✅ Extract

| Method                   | Description                           |
| ------------------------ | ------------------------------------- |
| `.slice(start, end)`     | Extracts part of string (no mutation) |
| `.substring(start, end)` | Similar to `slice`, but no negatives  |
| `.substr(start, length)` | Deprecated but still used             |
| `.split(delimiter)`      | Splits into array by delimiter        |

---

## 🔢 NUMBER METHODS (Integers & Floats)

### ✅ Conversion & Validation

| Method                | Description                 |
| --------------------- | --------------------------- |
| `parseInt(str)`       | Converts string to integer  |
| `parseFloat(str)`     | Converts string to float    |
| `Number(str)`         | Converts to number (strict) |
| `isNaN(val)`          | Checks if value is NaN      |
| `Number.isInteger(n)` | Checks if number is integer |

### ✅ Math Object

| Method                | Description                           |
| --------------------- | ------------------------------------- |
| `Math.round(num)`     | Rounds to nearest integer             |
| `Math.floor(num)`     | Rounds down                           |
| `Math.ceil(num)`      | Rounds up                             |
| `Math.max(...nums)`   | Returns largest number                |
| `Math.min(...nums)`   | Returns smallest number               |
| `Math.random()`       | Returns random number between 0 and 1 |
| `Math.abs(num)`       | Absolute value                        |
| `Math.pow(base, exp)` | Power function                        |
| `Math.sqrt(num)`      | Square root                           |

---

## 📚 ARRAY METHODS

### ✅ Basic

| Method           | Description        |
| ---------------- | ------------------ |
| `.length`        | Length of array    |
| `.push(item)`    | Adds to end        |
| `.pop()`         | Removes from end   |
| `.shift()`       | Removes from start |
| `.unshift(item)` | Adds to start      |

### ✅ Iterate/Transform

| Method              | Description                               |
| ------------------- | ----------------------------------------- |
| `.forEach(fn)`      | Iterates over each element                |
| `.map(fn)`          | Creates new array with transformed values |
| `.filter(fn)`       | Creates new array with filtered values    |
| `.reduce(fn, init)` | Reduces array to single value             |
| `.some(fn)`         | Checks if **any** elements pass condition |
| `.every(fn)`        | Checks if **all** elements pass condition |
| `.find(fn)`         | Finds first match                         |
| `.findIndex(fn)`    | Finds index of first match                |

### ✅ Search/Sort

| Method               | Description                        |
| -------------------- | ---------------------------------- |
| `.includes(item)`    | Checks if value exists             |
| `.indexOf(item)`     | Finds first index of value         |
| `.lastIndexOf(item)` | Finds last index of value          |
| `.sort([fn])`        | Sorts array (default: string sort) |
| `.reverse()`         | Reverses array in place            |

### ✅ Modify/Copy

| Method                                  | Description                             |
| --------------------------------------- | --------------------------------------- |
| `.concat(arr)`                          | Joins arrays (non-mutating)             |
| `.join(delimiter)`                      | Converts array to string                |
| `.slice(start, end)`                    | Returns portion of array (non-mutating) |
| `.splice(start, deleteCount, ...items)` | Adds/removes elements                   |
| `.flat(depth)`                          | Flattens nested arrays                  |
| `.fill(value, start, end)`              | Fills with static values                |

---
### 🎯 Useful Set Methods

| Method                   | Description                  |
| ------------------------ | ---------------------------- |
| `set.add(value)`         | Adds a value (no duplicates) |
| `set.delete(value)`      | Removes a value              |
| `set.has(value)`         | Checks if value exists       |
| `set.clear()`            | Removes all values           |
| `set.size`               | Gets number of items         |
| `for...of` / `forEach()` | Loops through values         |


Absolutely! Here's a list of the most **important and commonly used JavaScript object methods and operations** for handling plain objects (`{}`):

---

## 📦 OBJECT BASICS

### ✅ Declaring an Object

---

## 🔧 COMMON OBJECT METHODS

| Method                            | Description                                          |
| --------------------------------- | ---------------------------------------------------- |
| `Object.keys(obj)`                | Returns array of keys                                |
| `Object.values(obj)`              | Returns array of values                              |
| `Object.entries(obj)`             | Returns array of `[key, value]` pairs                |
| `Object.assign(target, src)`      | Copies properties from `src` to `target`             |
| `Object.fromEntries(arr)`         | Converts `[key, value]` array to object              |
| `Object.hasOwn(obj, key)`         | Checks if key exists on the object (safe in ES2022+) |
| `Object.freeze(obj)`              | Makes object immutable                               |
| `Object.seal(obj)`                | Prevents adding/removing properties                  |
| `Object.is(a, b)`                 | Safer comparison than `===`                          |
| `Object.getOwnPropertyNames(obj)` | Lists all properties (even non-enumerable)           |
| `Object.getPrototypeOf(obj)`      | Gets the prototype                                   |

---

Making an API scalable means ensuring it can **handle increasing loads**—more users, more data, and more requests—**without crashing or slowing down**. Here’s a structured approach to **scalable API design and implementation**:

---

## 🔧 1. **Design for Scalability (Architecture Level)**

### ✅ RESTful / Stateless

* Keep APIs **stateless** — no session stored on server.
* Makes it easier to **scale horizontally** (add more servers).

### ✅ Use Pagination, Filtering, and Caching

* Don't return all data in one go:

  ```http
  GET /products?page=2&limit=50
  ```
* Add query parameters for filtering and sorting.
* Cache GET responses when possxsible (e.g., with Redis or CDN).

---

## 🚀 2. **Backend Optimization**

### ✅ Use Load Balancers

* Distribute traffic across multiple servers.
* Tools: NGINX, HAProxy, AWS ELB.

### ✅ Use Asynchronous Processing

* For heavy tasks (e.g., image processing), offload to a queue.
* Tools: RabbitMQ, Kafka, Bull (Node.js), Sidekiq (Ruby).

### ✅ Optimize Database Access

* Use **indexes**, avoid **N+1 queries**, and prefer **batch inserts/updates**.
* Use **connection pooling** and ORM query optimization.

---

## ⚙️ 3. **Infrastructure Scaling**

### ✅ Horizontal Scaling

* Add more servers/containers behind a load balancer.

### ✅ Use Containerization

* Run your API in Docker containers with orchestration (e.g., Kubernetes).

### ✅ Auto-scaling & Monitoring

* Set autoscaling rules in cloud environments (AWS/GCP/Azure).
* Monitor using tools like Prometheus + Grafana, Datadog, or New Relic.

---

## 💾 4. **Caching for Speed and Reduced Load**

### ✅ Use CDN

* Cache static responses and assets at the edge (Cloudflare, Fastly).

### ✅ Application-Level Caching

* Cache frequently accessed data using Redis or Memcached.

---

## 🔐 5. **Rate Limiting & Throttling**

* Prevent abuse by limiting API calls per user/IP.
* Example:

  * `X-RateLimit-Limit: 1000`
  * `X-RateLimit-Remaining: 750`
* Tools: NGINX, Express middleware, API Gateways (like Kong or Amazon API Gateway)

---

## 🛠️ 6. **Use API Gateway (Optional but Powerful)**

* Centralized access, throttling, authentication, and logging.
* Examples: Kong, Amazon API Gateway, Apigee.

---

## 📈 7. **Monitoring and Logging**

* Track performance and errors.
* Use structured logs (e.g., Winston, Bunyan).
* Integrate APM tools (e.g., New Relic, Datadog).

---

## ✅ Example Technologies for Scalable APIs

| Layer          | Tech Stack Examples                              |
| -------------- | ------------------------------------------------ |
| API Framework  | Express.js, Fastify, NestJS, Spring Boot, Django |
| Cache Layer    | Redis, Memcached                                 |
| Queue/Worker   | RabbitMQ, Kafka, Bull, Celery                    |
| Load Balancing | NGINX, HAProxy, AWS ELB                          |
| Orchestration  | Docker, Kubernetes                               |
| Monitoring     | Prometheus, Grafana, ELK stack, Datadog          |

---


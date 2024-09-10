# Week1

# SD:

- Thought-process/Way of designing a system
- process of defining different elements of the system.
- Elements like architecture, components/Modules.
- and how the different element be communicating/interating.
- Effectively data will flow between the system.

- All above required for bussiness requirement.
- Required to build the application from scratch.

## Types of SD [two-types]:

1. High Level Design [HLD]
2. Low Level Design [LLD]

## HLD
- Involves creation of architecture diagrams.
- Done by senior Engineers and Architect

1. understanding the problem statement.
2. Requirement Analysis [Functional [feature] and non-Functional [maintenance/scalability]]
3. Capacity Estimation. [on what scale, Decide the infrastructure, load on application]
4. Definine the different components of the whole application and their communincation 

- EG.
 - Problem statement = Checout experience of a customer.
 - Requirement 
    - functional req:
        - Able to add the items.
        - able to cart the item
    - Non-functional req:
        - Scalable
        - Available
 - Estimation capacity:
    - 2000 customer request per second
 - Component Breakdown 
    1. Cart Services
    2. Checkout service 
    3. Inventory
    4. Authentication service
    5. Payment service.
    6. Shipment Service 

    - Order  [1,2,4,2,3,2,5,3,6]


## LLD

- Involves Detailing of each component of HLD
- Done by Developers and designers.

- schema of Each components/services
- It depends on HLD
- create ULM and class diagram.


## Why SD:
- To solve business problem
- Implementation, Scaling, Dataflow of Application.


1. Software Developer
2. developing system/application
3. Interview in Product based companies.

## Lifecycle of software

- Requirement Gathering
- Scopeout the Fetures [System-design-role]
- code writing
- Testing
- Deployement

# Types of Architecture

## Website vs Web Applications:

- website
    - Static Content.
    - Read only content
    - Eg. Wikipedia, blogging, Newspaper websites

- WebApplications
    - Dynamic Content.
    - Read and write content ie. write post, update status, upload image.
    - Eg. Facebook, LinkedIn, Gmail, youtube.

## Architecture [webApplication]

- Architecture = Internal design details for building webapp.
- Webapplication have Three layers/components:
    1. Frontend/UI
    2. Backend/Business Layer = Brain of application
    3. Datastorage Layer


## Monolithic/centralized Architecture Pattern:

- Single codebase, single deployment, single-machines
    - The codebase for all three layer [FE,BE,db] should be combined together. ie code should be written together.
    - Single-Deployment = All Layers should be deployed together.
    - Most famously used Architecture.


## When to use Monolithic Architecture Pattern:

1. When you are just Started 
    - Every big company started with a single machines as monolithics eg fb,linkedin,paypal.

2. When we have latency sensitive application.
    - latency is total time reqired to complete the request response cycle.
    - Fast response becoz No need of Network call [I/O]

3. It is comparatively easy to secure Monolithic system.

4. Integration testing is comparatively easy.
    - Becoz less moving pieces.

5. Less confused developer 

- Cons:
    - Interdependency b/w developers.
    - Tightly Coupled.
    - No SRP.
    - All the Layer have to scaled [not cost effective]
    - Single tech stack for all layers.

## Microservices Architecture 

- Multiple smaller Applications/services

- Each Application are fully inpedendent of eachother.
    - If there are 3 smaller application/services then all of them should communicate calling the API of the other services that means there should not direct interaction with the application.
    ie order service will call the API from the cart service to place the order. there 
        - order service is the service requester here
        - cart service is the service provider here.

- Based on service-requester and service-provider.

- Pros:
    - Selective scaling [any single services can be scaled as reqired]
    - Loosely Coupled
    - Maintain Single responsibility Principles
    - Lesser Deployment Time
    - multiple tech stack
    - No interdependency b/w developers.
    - Better collaboration.

- Cons/Challenges:
    - Costly Infrastructure
    - Integration testing is trickly
    - Security is complex and costlies
    - Higher Latency becoz of additional networks hops


## Monolithic VS Microservices Architecture 

- Together || Granularity 
- Low latency || High Latency
- Easy & low-cost security || complex and high-cost security
- Single TechStack || Multiple Tech-stack
- Whole scaling || Selective scaling
- Tightly coupled || loosely coupled
- Not reusable || Resuable
- High production time || Less production time

### Microservices are not replacement of monolithic it depends on various scenarios which Architecture should be preferred.

# Distributed Systems:

- When volume of data is become so huge that storing and computation is done by a single machine/computer/server. 

- Then multiple system is required which is connected over the network.

- It is used to solve the storage problem and computation problems.

- Data driven decision
- Data is the new oil
- Data is stored and computed for generating insight.

- Earlier business decision are taken by an experienced individual developer intution but now a day data is being used to take any kind of decision.

- Most of the companies collects a huge volume of data eg linkedIn, google, amazon

## Priciples Distributed Systems:

- DS is a multiple machines/node/server/computer.
- Resposible for storage or computation.
- These node are connected to eachother over a network.
- DS is called to be a successfull DS if the end user is having an experience they are still using the single system.

- Distributed Storage ::
    2000GB = 4 * 500GB if four different machines

- Distributed Computations::
    1 file = 4 chunks of file willbe computed by 4 machines.
    EG: A company settle the payment with merchant every two weeks and they have a file with millions of merchant/seller transactions.
    Then in this case if a sigle machine will take a lot of time therefour divide file in n different file computed by n different machines.

- Two main characteristic of DS:
    1. Commodity Hardware/ Interchangable hardware
    2. Dependency on the Network 
        

## Evolution of DS:

- Oracle has monopoly in Datastorage. Very costly.

- Replication/Redundancy and map-reduce/Distributed Computation in case of DS failure [Replication>1] that's how HADOOP is created.

- single point of failure [SPoF] is eliminated

## Centralized vs DeCentralized Application:

- Monolithic and Distributed/Microservices application can be a Centralized as well as Decentralized Application.

1. Centralized App:
    - Single/Group of Entity controls the entrire application.
    - Flow of data is from a Single source/cluster.
    - Eg - Fb,gmail etc

2. Decentralized App:
    - Single/Group of Entity doesnot have all control over the entrire application.
    - Distribute control/ no central authority
    - Eg Blockchain [datamining], bit torrent


# Application Characteristics:
- AC required to build DS.


## Latency/Network latency
- Latency mean round-trip-time.
- Time required for req-res cycle except server time is called as latency.
        req >>>>>[t1]>>>>>> res
            server/db-timer[t2]
        req <<<<<[t3]<<<<<< res
- t2 is the computational time
- Total time = [t1+t2+t3]
- Latency time = [t1+t3]
- response time = latency + computational time


### impact of architecture on Latency

- Monolithic system
    - method to method call
    - total time = computational time
    - lower latency

- microservices/distributed system
    - network to network call
    - total time = computational time + Network call
    - higher latency

### Importance of latency:

- Having the right latency is very important for the application to be successfull.
- website are made to have high as well as low latency,
- For Eg 
    - stock-market and car-autopilot = Low Latency

- Other impact of high latency:
    - bad customer experience
    - lower sales 

### Factor which impact latency:

- Latency depends on two thing Network and computation delays
- Improve Network Bandwidth.
- Improve computational delay by parallel/concurrent processing.
- CDN help in cache the static content therefore reduce the latency time.
- Caching Mechanism reduce the computational delay.

# Latency Casestudy

- Wallmart have it own private cloud with datacenter which ensure lower latency
- Later decide to move public cloud[azure/aws/google] so they started deploying application on the cloud therefore latency is increased many Folds.
    Therefore they have to stop as the main reason was the network delays which not existed in earlier. So they leveraged various cloud native services to do the paraller processing to reduce computation.


# Throughput:

- Defination = Rate of doing things. n nos. of parallel request per second
- Eg if application has throughput of 30 parallel request per second. and there are 50 request then rest 20 has to wait.


- Throughput = How many request an application can process at a time.
- Latency = How much time does each request take.

## Throughput vs architecture:

- Monolithic:
    - Limited in terms of resources/threads
    - Fixed/limited throughput

- Distributed:[Prefered]
    - No limitation on the availability of resources.
    - Higher throughputs.

## Improvising Throughput:

- Improving the machine resources [RAM,Storage etc]
- Improve the performance [caching,CDN]
- Proper monitoring and fixing all the performance.
- Distributed computation using load-balancers

## Eg in Throughput numerical and prev vid.

# Availability.

- When application responds to request it is called available but not responding that unavailability.
- For eg - Fb/Li = Highly available
    - IRCTC = Not available [11.45 PM to 12.20 AM]

- Monolithic have lower Availability becox SPoF
- Distributed have high availability becoz if any of the machine fails then with the concept of redundancy/replication can help the application high available.


## Fault/partition Tolerance.[network failure]

- In case of distributed systems it is bound to failure ie vulnerable to failure.
- If failure happen then system should handle gracefully.
- Generaly done using replication/redundancy/duplicacy.
- If the system is highly fault-tolerant it is highly available.

## Improving Availability:

- Fault Tolerant
- Reduce the downtime/fix time.
- Proper monitoring/ proactive alering.

## Availability Numerical

## Conclusion::
- Low Latency
- Bandwidth
- High Throughput
- High Availability = depends on downtime
- Reliability


- Bandwidth >>> Throughput >>> Latency >>> Availability >>> Reliability

    - Max Rate at which data can be transferred. eg [bits/second]
    - Actual rate of the transfer of data eg[bits/second]
    - Total time of completeion of request eg [ms,seconds]
    - [uptime / uptime + downtime] * 100
    - [1 - Probability of failure]

- Availability does not guranteess the reliablity.
- Reliability guranteess the high Availability.


# Application Characteristic -2 

# Consistency:

- Defination = It is the way by which every customer/client gets the same response for the same request.


- Eg 
    support in a distribute system there are 3 system with same data and 3 different people have access to different system based on location and 
    
    - Inconsitency State:
    if 1system is updated the rest 2 system take delta"t" time to update then the 1 people will get the updated data whereas the rest two will get the old data[called as Read dirty]. Then this system is called as Inconsistent state of application.

    - Consitency State:
    if 1system is updated the rest 2 system take delta"t" time to update then during this delta"t" time the read will be disabled and only when all the replica nodes will get update then only the read is enable. Then this system is called as Consistent state of application.

## Consistency with Architecture:

- Monolithic/centralised is higly/natively consistent.
- Distributed System have to take extra step to achieve consistency.

## Factors impacting consistency:

1. Stop the read while all replica are being updated.
2. By improving the network bandwidth. make the process fast.
3. Replica should be choosen based on distance aware stratigies.

- But
    - How fast system is able to update the replica nodes/machines. Make sure nodes are properly synchronised.
    - Is the application is in the position to bring down/disable read. Depends of application. Eg fb, IRCtc

## Types of Consistency:

- Eg 
    support in a distribute system there are 3 system with same data and 3 different people have access to different system based on location and 

1. Strong consitent
    if 1system is updated the rest 2 system take delta"t1 and t2" time to update then max of [t1,t2] wiill the time for which system is disable.
    and after that the system is enable so
    NOw the system is Strongly consistent.

2. Eventual consitent[preferred]
    if 1system is updated the rest 2 system take delta"t1 and t2" time to update then max of [t1,t2], now during this time if the rest two make call then will get the old data. but after max of t1 and t2 will pass then all will get the same data.
    In the beginning few nodes may have the old data but after some time all willl have the same data.

- All social media website works on Eventual consistency.

## Eg
    - In Irctc if the two people try to book the same seat then only one will be able to book the system behind will have Reservation service[ui] and the ticket-inventory[which will alway have the latest data] so if the ticket is available then only it can be booked else not

# CAP Theorem:
- Consistency = same-data
- Availability = always-responding[either error]
- Parition Tolerance = Network failure 

- Theorem  = At any given instance of time system can only have any of the two property ie CA or AP or CP. All three cant be there.

- If AC then P⬇️ or 
    AP then C⬇️ or 
    CP then A⬇️

- Note : P is the most important part it must be there but in b/w C and A we can choose either of them based on type of application requirement.

- If availability⬇️ then consistency⬆️ and viceverssa

- If app is consistent the system has to be unreadable for that time of updation the availability will be low.
- If app is readable/available all the time the updation at some node is not possible then cosistency is compromised.


## Use cases:

- Based of what the requirement we can take the required property.

- Ecommerce = Available 
- Food Delivery = Available 
- Socialmedia = Available
- Banking = Consistent 
- Ticket = Consistent 
- Auto-Driving = Consistent 
- Messaging app = Consistent
- 

## Importance of Physical time:

- Clock can be of gravity type, spring type and atomic physics[mostaccurate].

- Problems in using physical clock in case of distributed system:
    1. No concept of global time.
    2. Problem in finding the precise ordering of events. [network-delay]
    3. Network dealy can also cause error.


## Logical time and Lamport Algorithm:

- Logical time has two concept:
    1. Logical local time.
        - Process marks its own event,
        - Protocol to update after each local events.
    2. Logical global time.
        - Local information about global time.
        - Protocol to update when process exchange data.

## Lamport Clock:
- It is a way to measure the logical time.
- Found in 1978 by Leslie Lamport.

- Finds
    - Partial ordering of events.
    - Numerical measure of happened before relationship.

- Algorithms:
    - Each process uses a local counter [integer]. Initial value can start from zero.
    - Process increments the counter, whenever the event happens [event can be res or req.]
        [timestamp = prevCount + 1]
    - Counter is assigned as the time stamp to each event.
    - In sent Event carries its own counter/timestamp.
        [timestamp = prevCount + 1]
    - In Receive event [timestamp = Mathmax(local/prev clock + message Timestamp) + 1]

- See screenshot

---------------------------------


# Weeks 2

# Scaling Techniques:

- Scalability:  when there is v.less number of people are using application then res time will be 2ms, now if the number of user increases therefore the load on the system is increased and res time will be increased.
    Now if the res time cannot be maintained then it is not scalable. but if we are able to increase machine to main the res time then that system is scalable.

## Vertical Scaling:

- Generally in case of monolithic
- Adding more hardware /configuration. 
- It means to increase the diskstorage and RAM.


- Limitations of Vertical Scaling:
 1. SPoF [network/hardware.failure]
 2. Very expensive after a certain stage. when performance doesnot goes linear in graph [perfomance vs vertical scaling].
 
## Horizontal Scaling:
- Generally in case of distributed.

- Instead of single machines make use of multiple machines/group of machines/cluster that is called horizonatal scaling. Each connected with each other using Network.

- Each of these machines is called as commodity hardware/not-expensive.

- Load can of two types - storage and computational.

## Horizontal Scaling with Monolithic :
- Hosted the same app on multiple machines 
- that make the monolithic a distribute monolithic application.

- Challenge of H'scaling monolithic applications:

    - maintaning the consistency./ Data replication
    - No selective scaling ie a single services cant be scaled but a whole app becoz tightly coupled.

# Intro to Redundany and Replication.

- In distributed system, commodity hardware[machines], Networks are used and both are highly vulnerable/highly unrealiable. That make a fault prone system.

- the process to handle failure gracefully is called a partition tolerance. failure can be due to network or node goes down.

- So the partition tolerance is achieve by redundancy & replication.

- How Redundany and Replication used to avoid fault tolrence.


## Redundancy/Duplicates [nodes/component]:

- Having Duplicate node/machines so that if the node fails than other node is available to service customer for failure management/failure recover.

- Two types of redundancy

1. Active Redundancy:
    Each of the duplicate nodes are active ie reponding. Request are send to any node using the load balancer[which distributes the request among all the nodes equally]

2. Passive Redundancy:
    Few of the duplicate nodes are active and rest will be in the passive state. Only when the active node breaks/godown then the passive node become active.

## Replication/Duplication [data]:

- Diff from Redundancy - Copying of data on multiple machines/ synchronising multiple machines.

- Two types of replication:

1. Active Replication:
    Each node receives the data ie the data is synchoronised to all the nodes.

2. Passive Replication:
    Every read and write is done on the master node. and rest of the machines only backing up the data [slave machines]. If the master machines goes down then any of the slave machines get promoted to master machines.


## Reduncancy vs replication


- Redundancy is all about keeping the multiple copies and replication ensures that all the copies have same state maintained via updates

- Duplicacy of a node/machine/component.
-  Success of a redundant machines depends on the replication ie the data should be synchronoused/same steate. this is being ensured by replication.
- multiple redundant node are consistent via updates.
- Duplicacy of the data of a single machine on the other machines.

MYSQL = Follow redundancy using master-slave model of replication. 

# Scaling Techniques (part2):
# Load Balancer:

- LB are like Manager in IT Company.
- Load balancer decides which task should be assigned to which machine based on the machines efficiency, node availability, network bandwidth.
- LoadBalancer do's:
    1. Make sure each server is equally loaded.
    2. Health check
    3. High scalability/availability/ throughput.

## What all places loadBalancers can be placed?

- FE/BE/Db layer will have multiple server each. So for all servers of each layer will have single load balancer. ie 1 for FE, 1 for BE and 1 for DB.

- Each of these nodes/machines of a layer serves as a IC [individual Contributor] for which a LB is required.

- So if horizontal scalability is being done then Loadbalancer have to put there to maintain the scalability.

- LB help us to put multiple instances and allows us to distribute the load across the machines.

## when & whennot to loadBalancers?

- If there are multiple instance of the same application then LB are required.

- In monolithic system LB are not required.

## Pros of Load Balancer:

- Better customer experience.
- High Availability.
- Scalability.
- Faster Response Time.
- Minimize the downtime.
- Filterings/understanding the request pattern and based on that traffic bottleneck can be predicted.
- A single server is not overloaded.

## Load Balancer Algorithms:

- LB Checks:
    1. Health check of server
    2. Algorithm/based on logic

- Algos:
1. Round Robin Methods:
2. Weighted Round Robin Methods:
3. IP Hash Algorithms:
4. Least connection Algorithm:
5. Least Response Time


1. Round Robin Methods:

- Applies only When all the server are of equal capacity.
- server send the request one after another. egs 123..n and then 124...n 


2. Weighted Round Robin Methods:

- Applies when servers are of different capacity.
- request are sent to server one after other if the server has n capcity then n request will be sent to that and then move on to the other one
- eg server[capaticy] = 1[1] 2[1] 3[2] 4[1] now when the capacity is fulfilled only then it will go to the next server.


3. IP Hash Algorithms:

- Applies when server are almost same capacity.
- Random/unbiased distribution of traffic.
- hash fn is applied which give number between [0,n-1] for n servers and assigns the request to nth server.

4. Least connection Algorithm:

- Lb will check which server has the least number of connection and will assign to that server.
- When we need to decide based on the availablility of openconnection on a server.

5. Least Response Time

- Load balancer will check which server has the minimal responsive time and assign the request to that server.

## Challenges with Loadbalancer Algorithms:

1. Load balancer acts like a SPoF means if LB's fails the no matter how many instance of node we have the machine will go down.
2. Now to avoid above issue, Redundancy will help. ie
3. Active Load balancer and Passive Load balancer.
4. Incase the Active load balancer goes down then passive loadbalancer will works
5. Thus removing the SPOf.


# Popular load balancers:
1. nginx
2. HAProxy
3. AWS Elastic Load Balancing (ELB)
4. Google Cloud Load Balancing
5. Azure Load Balancer
6. Kubernetes Ingress Controllers

```javascript
* configure nginx

Features:

Round Robin
Weighted Round Robin
IP Hash
Least Connections
SSL/TLS Termination
Caching

http {
    upstream backend {
        server 127.0.0.1:3001;
        server 127.0.0.1:3002;
        server 127.0.0.1:3003;
    }

    server {
        listen 80;

        location / {
            proxy_pass http://backend;
        }
    }
}

1. Weighted Round Robin Methods

http {
    upstream backend {
        server 127.0.0.1:3001 weight=1;
        server 127.0.0.1:3002 weight=2;
        server 127.0.0.1:3003 weight=3;
    }

    server {
        listen 80;

        location / {
            proxy_pass http://backend;
        }
    }
}

2. IP Hash Algo
http {
    upstream backend {
        ip_hash;
        server 127.0.0.1:3001;
        server 127.0.0.1:3002;
        server 127.0.0.1:3003;
    }

    server {
        listen 80;

        location / {
            proxy_pass http://backend;
        }
    }
}

3. Least connection
http {
    upstream backend {
        least_conn;
        server 127.0.0.1:3001;
        server 127.0.0.1:3002;
        server 127.0.0.1:3003;
    }

    server {
        listen 80;

        location / {
            proxy_pass http://backend;
        }
    }
}

* configure HAProxy
Features:
Round Robin
Least Connections
Least Response Time
Session Persistence
Health Checks

4. Least response time

frontend http_front
    bind *:80
    default_backend http_back

backend http_back
    balance leastconn
    server node1 127.0.0.1:3001
    server node2 127.0.0.1:3002
    server node3 127.0.0.1:3003


```

# Caching:

## What
- It means dont do something repeteadly which does not change.
- Avoiding/minimizing unnecessary expensive /resource intensiive/timetaking  calls - Disk I/O, Network I/O, external API Calls, CPU Intensive calculations.
- Bring all these thing in LocalStorage Memory and use this as much as possible.
- Ultimately improves application performance and read operation.

## Where
- caching can be done on backend,frontend and brower.
- Two cache category:
    1. Application Server cache = - Local Inmemory storage
    2. CDNs [Content.Delivery.Network] = JS/CSS/Images/Static.content can be cached using CDNs and then sent to the frontend application

## Types of caching solutions:

1. Local/Inmemory Cache = 
    - Store data in RAM
    - It is specific to single machines
    - eg. Google Guava cache, MEM Cache
2. Distributed cache
    - In case of distributed machines
    - External caching
    - same cache will be share across all machines
    - eg. Reddis cache

- Monolithic = Local or inmemory cache
- Distributed = Distributed cache

## When to use Cache.

- If the data is not changing very-frequently. Else no caching.
- Type of application  
    - read intensive = caching is used eg wikipedia,newspaper, blogging
    - write intensive = caching not used eg twitter
        - If used then performance goesdown.

## Differenct caching strategies

1. Write Through Cache:
    - when new data is arrived it will update the cache and database at the same time
    - Pros:
        - No state data.
        - High consistency
        - consistent read
    - Cons:
        - write will be slow
        - Good for read intensive app and not for write

2. write Around cache:
    - data is only updated in db and no in the cache directly
    - Pros:
        - write is fast.
        - Good for write intensive app.
    - Cons:
        - Read will be slow

3. write back cache:
    - Data is first updated in caches and when in offline mode it get updated in db async.
    - Pros:
        - write is very fast.
    - Conss:
        - It can lead to loss of data incase the cache memory is failed.

## cache Eviction strategies

- cache memory is leverage a free memory for new data.
- Cache has small memory so only store small data.
- Used to add new data or removing stale data.

1. FIFO: Evict the first added data for new data.
2. LIFO: Evict the last added data for new data.
3. LRU:: Evict the data which is Least Recently Used.
4. MRU: Evict the data which is MOSTly Recently Used.
5. RR: Evict the random data [Random-Replacement].

-----------------------------------

# Database

## Filebased storage system / Filebased Db management system 

- Data is stored inside the file and file is strored inside folder/subfolder.
- Cons:
    - Data redundancy = no mechanism to check if data is already present. which causes anomalies[update, insertion, deletion,read]
    - Security is minimal
    - No query language so only programmer can deal with filebased storage. ie why tightly coupled system.
    - Retrieval is not very efficient = read speed is very slow.

- Now to overcome this people started solving real life problems with - entities[state] and - realtionship that's where RDBMS came.

## RDBMS:

- DBMS is a DB[database] which is surrounded MS[management.system] a program layer 
- Program layer/MS
    - Improved security
    - Avoid Redundancy
    - v.simeple SQL therefore No need of a programmer.
    - Support Relationship so RDBMS eg oracle,MYSQL

- Pros:
    - Rich feature of query
    - Transaction 
    - Relationship

- Cons of RDBMS:
    - Needs a Rigid Schema
    - Scalability Issues. [not designed for Distributed systems.]


## NoSQL Database:

- Not only sql
- Pros [why nosql over sql]
    - Dynamic/semi-structured schema.
    - Data is huge in terms of volumes and velocity.
    - No need of joins.
    - Non relational data
    - High Throughput

## Types of NoSQL DBs:

1. Key Value Data Model
    - For caching solution. eg redis
  - key can be an id and value can be a JSON Object
  - Easy to retrieve data.
  - If multiple updates to data then not good.
  - Inbuilt caching mechanism [eg redis]
  - simple Data structure
  - key can be any primitive datatype and value can be any data type
  - Good Scalability

  - uses ::
    - to enter big collection of data [array]
    - dictionary,hashmap
    - general collection
    - E-commerece shopping cards
    - Recommendation Engines

    EG: Amazon DynamoDB, Oracle NOSQL


2. Columnar Data Model
    - Data Analytics is eassy ie aggregation

- Data is stored in cell group are in the form of column.
- In Rows in RDBMS and IN Column in NOSQL
- All read and write operation will happen on column.

- Pros:
  - Aggregation is really fast.
      eg - Apache, Hadoop, cassandra
  - compression is good, ie why used in :
      - Content management system
      - Blogging
      - Maintaining Counters

- CONS:
  - To write comples queries , avoid column DM becoz it is hard to connect different column to form row and then extract data.


3. Document Data Model 
    - best of both the worlds
    - rdbms |vs| NOsql
    -  Realtions/schema || dynamic schema
    - Transaction support || Natively horizontal scalable.
    
- JSON Format and XML
- It is key-value type only but without KEY and ONLY VALUE in JSON format.
- PROS:
  - Easy to comprehend.
  - Felxible schema 
  - less memory
  - Good for API developement [more prefered]
  - Easy Horizontal scalability
  - lot of database support sql or other query languages.
      eg : mongoDB [BSON] and Postgre-sql
  - Also have ACID Properties.
  - DB management tools are build using Document based noSql.

- CONS:
  - cannot enforce constraint on Data.



4. Graph Data Model 
  - It store semi-structured, semi-structured, non-structured
  - Graph consist node[vertices] and edges[relation]
  - Uses:
    - Social Network [eg linked[1st.2nd.3rd.degree.connections]]
    - Recommendation Engines
    - Fraud Detection
    - google maps

- Graph Based DB are Neo4J and Arango DB 

# Polyglot persistence

- if the same project make use of difference databases for data stroring.
  - eg amazon is using oracle[payment],mongodb[product],cassadranda, elasticsearch[test.based.fn].

- Banking sector = Money transaction is required so data consistency is imp therefore RDBMS [oracle,mysql]
- Ticket booking system = Transaction + Cosistency is important so will used RDBMS.
- Ecom website = Landing page [search+product.info(flexible schema)] with huge data so MONGODB.

- If there is lot of I/O operations then NOSQL database will make lots of sense.


# Denormalization

- putting the multiple data from different related table into a single table.
- eg if there are two table employess and department then denormalization means to merge both the tables.

## Use-case of denormalization:
- To get the insight of the data most of the time we have to fetch the 
  - data from the multiple table we have join table in rdbms db which is an expensive operation 
  - data from multiple server which includes network hops and then have to perform the join operation then again it is an  expensive operation.
- so to avoid this we can have denormalized data becoz all the information will lies at the single place.

- For increased performance.

# week3

# DB Optimization:

## Indexing:

- Indexing makes the search faster eg binary-search[O(logn)-faster] vs bruteforce[O(n)-slower]
- In read-intensive-app, Indexing is applied to those columns in which the query are frequently applied.
- In write-intensive-app, Indexing is not applied becoz will make app more slower and detrimental.

## Partitioning:

- To breakdown very large database/table into smaller chunks/machines.
- Pros: Helps Achieving
  1. scalability
  2. Maintainablility
  3. Performance optimization
  4. Availability. ie less downtime
  5. Proper Load-balancing.

- Different Partitioning METHODS:
  1. Horizontal-Partitioning OR Sharding OR Range-based-Partitioning
  2. Vertical -Partitioning
  3. Directory-based Partitioning

## Horizontal Partitioning

- Distribute/split the whole database/table across multiple machines.
  - eg 200 row [200-indexex] = 100 rows in m1 machines and 100 in m2 machine
- Cons:
  - Range-based eg if zipcode is 2000 then store data in m1 and  3000 then in m2 but what if 2000 is a village so it has less people and 3000 is a city so have more people so that machines m2 will have more data so again it is not equally distributed.


## Vertical Partitioning:

- Different tables/databases are stored in different machines./ breaking the table in vertical directiion.

- eg1: For Food delivery app = Restaurants-data is stored in m1, customer-data is stored in m2 and order data is stored in m3

- eg2: if a table/database have 10 column then storing data from c1 to c3 in m1 machine and storing data from c4 to c6 in m2 machine and storing data from c7 to c10 in m3 machine

- Cons:
  - Very.Slower join queries.
  - Need futher partition of table [sometimes].
  - 


## Directory-based Partitioning:

- Data is first received in Directory server and then goes to its respective machine.
- Directory server is responsible for mapping the data to decide that data should be sent to which server/machine.

- Pros:
  - Loosely Coupled.
  - Horizontally scalable system.

- Cons:
  - Complex in implementation.
  - Directory Server is the SPoF, so DS redundancy is required.

## Different Partitioning TYPES:

1. Hash Based Partitioning:
  - Hash(key of data)%[available no. of machines/server] => outcome of hash fn will decide in which machine data should be stored.
  Cons:
    - If number of nodes is not changing then its is an most efficient way of paritioning but in case of the number of nodes is changing then not good.
     - Becoz during read operation the hash fn is now have incresed node then the ouput will return some different number in which the data is not stored so this will result in loss of data/as not able to find
     - In such case, redistribution/repartitioning of data is required, which is complex time consuming.

  1a. Consistent Hashing Partitioning:
    - See Screenshot mobile.
    - case 1: If one machine/node is added/deleted.
       No complete repartitioning ie reshuffling will only effect 1 machine. ie partial partitioning of data is done.

2. List Partitioning:
  - Every machines has list of paritioning keys associated with it which then match the key with the data key and if get matched then data is stored in that machine.

3. Round Robin Partitioning:
  - Simplest way of partitioning.
  - Every partition/machine should get equal opportunity.
  - data is stored in squential manner ie 1st data in 1st machine and nth server in nth machine and nth + 1 in 1 machines.
  -  i'th data is store in = i % no.of machines

- When partitioning is used?
  - When data can't fit in single machine.
  - Eg Cassandra is Natively distributed using consistent hashing.
  

-------------------------------------


# Communications [b/w applications]

# Concept of Synchronous Communication:

- Also called as blocking communication/call.
- Task are done one after the other.

- Usecases:
    - Immediately want the response.
    - In database transaction eg placing-order, transfer-money.
    - consistency* [write data process is not completed until redundant.machines are not updated.]

- Industrial Usecases:
    - Banking industry = UPI/PhonePay/GooglePay
    - Payment Services
    - Reservation based = IRCTC,BookmyShow,makemytrip
    - Sequential Application 
    - Troubleshooting services/realtime decision making
    - stock market apps


# Concept of Asynchronous Communication:

- Also called as non-blocking communication/call OR loosely coupled communication/call.
- Task are in parallel manner without waiting for previous task.

- Usecases:
    - When computation takes alot of time.
    - Scalability/Performance of the application
    - if app1[capacity = 500 req/sec] send req to app2 [capacity = 500 req/sec] then in this case To avoid cascading failure/eventual failure of app2 we use async communication

## How async works:

- Two Patterns:
    1. Req-res pattern / Traking id based:
        if app1 send req to app2 and app2 takes a huge amount of time so in this case app2 will send the trackid to app1 [does app1 thread is now free and can process other request] and thus app1 keep checking of the trackid until the app2 completes the task and send the response back.
    
    2. Message queue based:
        app1 will not directly send the req to app2  there is a message queue layer in which the req are strored in the sequential manner in FIFO based structure so when app2 receive the req it send the trackid/response back to the app1.

## UseCase:

1. Booking App :: booking confirmation email/message are async operations.
2. Bank: AT EOD bank to make a transaction report so transactin service sends the req to report service this is also async.
3. Reading tweets from twitter and predicting sentiments of the people. = load/traffic is dynamic in nature ie why async queue based system is used to make of resource as and when required.

# Message Queues:

- Popular Messaging queues = Kafka, Rabbit-MQ/Active-MQ
- Need : to allow the communicatin b/w two application
- App1 >>> Message-queue >>>> App2
- Basic Terminology:
    1. Producer = Application which sends the message/request 
    2. Consumer = Application which receive the message/request
    3. Agent/broker = message-queue which acts as a middleman between two applications.

- usecases::
    1. Handle Dynamic load/traffic = normally 500gb/hr and sometime 800gb/hr thus mainining the throughput of the app.
    2. If there are four app = one being receving all the updated and in rest 3 app updates can be delayed so in this case messagequeue is used through which other three apps can consume the data.
        if app5 also comes up so no new system has to be build as app5 can consume updates through MQ.
    3. if there are two independent app which diffrent throughput in which app1 process the data and send to app2 which again further process the data.THus MQ will be a great uses. failure of any one of the app will not impact the whole system.

## Models of Messaging system:

1. P2P[peer.to.peer] 
    - App1 >>> Message-queue >>>> App2
    - Only interested party of MQ req is app2[only two system involved]
    - personal messaging in whatapp [person2person]

2. Publish Subscribe model [popular]
    - one producer sends one message to MQ to multiple consumers
    - Multiple interested party of MQ req.

- Industrial use case:
    1. Kafka = Provide async communication b/w apps.
    2. Rabbit MQ/RabbitMQ


# Web Applications:

- Applications which can run over web.
- Web Applications consist of three parts:
    1. Frontend/UI = User interact with this layer
    2. Backend/Business-logic = Crunching and munching
    3. Database/Datastorage Layer

## Client-Server:

- All interaction happens over the network[n/w]
- client = send request to server
    Happens over the network
- server = send response back to the client
- If the app has many services such as auth,checkout,inventory,cart,payment. these services will make call to each other based on the requirement so the service which makes the call/request is called as client and the service which receives the request is called as server.


## Web Servers [WS] VS Applications servers [AS]:

1. WS used for web-Application that 
    - Serve static content eg html,images etc 
    - Only supports the HTTP Protol. 
    - Not much support for multi-threading
    - Serves only the web based app.
            VS
1. AS used for: 
    - Dynamic content.
    - Support Multiple protocols.
    - Supports multi-threading
    - Serves both web and enterprise based app


## REST Framework: [REpresentation.State.Transfer]

- REST is the framework or tool or technique to enable the communication between two applications.

- Requirements for communication b/w two apps.
    1. Enable communication over network.
    2. Language neutral.
    3. Light weighted
    4. Fast 

- To fetch the data from twitter in a automated fashion over network app1 will request for data twitter for which the twitter is EXPECTED TO EXPOSE REST-APIs to

- APP >>>req.for.data>>> rest-framework <<[sent the data]<< twitter[EXPECTED TO EXPOSE REST-APIs]

- REST APIs:
    - whoever needs the data needs two things:
        1. Address of the data called as URI [unique.resource.identifier = IP.address:portnumber/application-name/version/tweets] 
            eg- 121.01.15.56:5656/twitterapi/v2/tweets
        2. Intent [CRUD] = [POST,GET,PUT,DELETE]

    - Enable sharing [CRUD] the data b/w two applications.
    
# Service Oriented Architecture [SOA]:

- Defi:: Keeps applications [FE,BE,DB] as granular as possbile.
- FE, BE, DB should communicate over the network.
- SOA has always two components:
    - Service Requester/client = request sender
    - Service Provider = send response back
    - eg two app1 and app2 based on useage each can act as both services-requester and service-provider

- EG = A ticket booking app have below services: 
    - booking service[c++]
    - ticket inventory service[Golang]
    - auth service[python]
    - notification service
    - payment service[java]
        - all these services can act as both services-requester and service-provider based on which service is sending the request and which is receiving  

- PROS of SOA:
    - Agile: def:time to go to production is less. 
        -smaller services/independent of eachother
    - selective scaling of application is possible.
    - free to choose differenct techstack for different applications.
    - Loose coupling and reusablility of components.
    - Big size team.

- CONS of SOA
    - Additional network calls ie higher latency comparatively.
    - Testing is difficult becoz of moving boundary.
    - security is again very complex. to defined boudary so have to secure multiple pieces.
    - confused developers.[becoz only few know SOA and most in monolithic] so less productivity.


# Microservices Architecture:

- How it is Similar to SOA and still different from SOA?
- More evolved/granular version of SOA.
- Every single services are 100% independent of eachother and each services must do only one thing [granular].

- Similarity = Services are communicating over network.

- Difference
1. In SOA two differenct services can have same database.

1. In Microservices two different service have individual database along with codebase,deployment.


# TIER Architecture: 
    
- Different ways of designing the application in terms of different tiers.

- n-tiers/n-layers architecture pattern. n can be any positive integer
- 3-tier application is most popular

- 1-tier = UI + BE + DB on same layer.
    UI = Client Layer
    BE + DB = Application layer

- 2-tier
    1. Visualization layer [UI] = client tier
    2. Application tier [BE + DB]

- 3-tier
    1. Visualization layer [UI] = FE/client-tier
    2. Application tier = BE [processing/computation/business-logic]
    3. Database = datastorage layer/reading and writing the databases.

# Week 4

# Web servers:

- Web servers keeps the program/server up & running all the time for the end-users.
- It is process that keeps running on the machine.
- Process:
    1. Arrange a server.
    2. Deploy a program under the server.
    3. Restart the server.
- Most commonly used servers:
    1. Apache servers.
    2. Tomcat servers.
    3. Node.js servers.

## Push and pull methods [communication-protocols]:



1. Push-Model: When Client didnot asks for data but still server sends the data. [eg In case product are added to the website]
    - server will have to know about client.

2. Pull-Model/polling: When Client asks for data from server and server sends it back.
    - more popular
    - Cons:
        - in case no data to update. [for request] so client is all the time busy making the request only one or very less time data is available. mulitple n/w call have to be done unnecessarily so slow down the app/ie expensive operation. 

## More communication protocols:

- [A] Long polling
    1. Client send the request to server.
    2. if the data is not available, server will wait for the computation. in such case either
        1. data become available 
        or
        2. Request timeout.
    3. Client set free after the response is retained.
    - short lived connection
    -  COns:
        - client thread is blocked from the server side

- [B] Socket Connection:

    - Two way communication
    - Frequent connection.
    - long-live connection
    - A duplex connection channel under [TCP-connection] is made that is available all the time.
    - Eg chat application

- [C] Server sent Events:

    - Estd a long-live connection channel.
    - One way communication ie server send the event.
    - Used when server is doing complex computation.
    - If client want to send req it will send it through some other channel.
    - Eg = cricinfo [live cricket stat updates]


# Proxy:

- Doing a task on behalf of someone.
- Two types of Proxy:
    1. Forward Proxy
    2. Reverse Proxy


1. Forward Proxy

- Proxy-server hides the client from server
- No-direct interaction b/w client & server.
- Client make call a Proxy-server and Proxy-server on behalf of client make a call to server and server sends res to Proxy-server and Proxy-server send res back to client
    eg client >>> Proxy-server >>> server
- Server doesnot know who the client is ie client identity is disclosed.

- Use cases:
    when govt bans some website in their country in this case forward proxy server can enable the citizen of the countrly to make call to that website through proxy servers.

2. Reverse Proxy

- Proxy-server hides the server from client.
- In this case Proxy-server instead of serving for client it serves for the server.
- client doesnot know who ther server is.
- cient thinks as Proxy-server is the main-server.
- usecases:
    - for security event when we dont wont to expose the main-server.
    - Hide the complex internal structure.
    - Reverse Proxy used in defining API Gateways:

## API Gateways:

- In case of complex microservice architecture.
- if the client have direct access to the server ten it would be intimidating for the client to call all microservices. THus by adding API-LAYER over the architecture so now client has to call only one simple api and then this API is responsible to call the all complex microservices. 


# Application security:

1. Authentication = Proving who I am.
2. Authorization = What can I do.

## Authentication Protocols:

1. Basic Authentication
    - No encryption, hence not very secure (it decode but not encrypt)
    - client need to store credentials which can be exposed through cross script attacks easily.
    - Easy to crack using BruteForce attacks.
    - Username and password is only form of authentication. so incase of lost password account is lossed.

2. Token-based / Access-token-based authentication
    - Encrypted token = use hashing technique once it is done can be reversed that means no decoding in hashing.
    - Stateless = loosely coupled
    - Easy to Scale
    - Can be used by Mobile and web Both.
    - access token has TTL [time.to.live]

    - usecase: TTL for token in baking application is very less so when a user is idle for loger duration it automatically get logout.

3. OAuth:
    - Third party auth [google,linkedin,facebook,github] = generally trusted and popular applications.
    - Allow app to take basic-info from third party app.
    - generate a token upon registering/login.
    
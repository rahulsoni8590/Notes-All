# Lecture-1 [WEEK-1]

# OS
- User {customer} >> Application {waiter} >> Operating system {manager} >> hardware[cpu,gpu,disk,usb,etc] {chef,cupboard,counte-top}
- Used for resource management. see SS
- Provides an interface for communication between the application and hardware.  
- Hides the hardware complexity from application

## Abstraction [Hides-complexity] and Arbitration [Resource-Management]:

- Managing the resouces eg multiple apps running simultaneously 
- hiding the underlining complexity eg using copy-paste,scanner,output-hardware[soundbar],stylus.
- Memory allocation and ram management based on usage of app.


## Defination of OS:
- Acts as Interface b/w Apps and hardware.
- Privilege access to the hardware.
- It hides complexity for user, application as well as developer. = Abstraction
- Resource Manager = Arbitration.
- Isolation and protection to application ie prevent overwrite of the data from app1 to app2.

## Category of OS:
- Desktop OS = Windows, Linux, MacOS
- Mobile OS = Android, IOS

## Components of OS:

1. GUI = graphical user interface
2. CLI = commandline interface [works inside the shell]
3. System programs


- Kernel [core]= Perform the privilege action on the underlining hardware.
- User-space = Where the application runs.

- kernel does [process-manager,memory-manager,file-manager,I/O-manager]
- user-Space used by [Application]

## Function of Kernel:

- Memory-manager = allocation and deallocation of memory
- process-manager = start or termination of program/app/script
- file-manager = permission to path for the shell script eg hello.sh
- I/O-manager = if file hello.sh is stored in usb then this is used.

### Types of Kernel:

- Monolithic Kernel 
    - Single piece of code with all four functionality [moduel = PM,MM,FM,IM]
    - Difficult to debug the module of single piece of code.
    - High Memory consumption
    - if any one of the module crash entire kernel is crashed along with the os is crashed.
    - Communication b/w module is fast becoz all the Module are present in Kernel and not the userspace.

- Micro Kerel
    - userspace has = Application , File Manager and Device Drivers.
    - Kernel = Memory manager and Process manager
    - Over all size of OS is less.
    - If any one module crash then other function doesnot affect the entire OS.
    - Easy to debug the module becoz not single piece of code.
    - Less portablility.
    - communication between modules takes place using the IPC.
    - Slow as compare to monolithic.
    - EG = Symbian os and Linux os.

- Hybrid Kernel:
    - userspace = Application and FM
    - Kernel = I/O-M, MM,PM
     - Size is less then monolithic
     - Debug is easy and relaibility is better.
     - Communication happen using IPC [no of communication is less as compare to micro-kernel]
     - Better performance as compare to micro kernel and less size as compare to monolithic
     - eG:   windows NT [10 and 5], Mac OS

- NanoKernel
- ExoKernel

## Command Line Interface
- In windows cmd is provided by command prompt, powershell
- In linux cmd is provided by bash shell, born again shell, c shell, k shell, z shell


- mkdir <name>= to create a new directory


## Process of How communications/system call 
- ie Architecture of system call in SS

### Different category of System calls:

1. Process control [pid = process id]
    - Fork = create a new process
    - exit = terminate a runnig process properly [deallocate the memory and close the file open and terminate child process]
    - wait = if p2 or parent-process is in wait until p1 child-process exit.
    - exec = to replace the code of p1 with p2 by keeping the process id same ie p1 pid.
    - kill = end process abruptly but 
        - termination of process abruptly ie doesnot [deallocate memory,close file and terminate child process]
        - works on singal fn
        - commands are
            - kill
            - kill -9 pid
            - kill -15 pid
            - kill -2 pid
            - kill -l = to get list of all signal 


- whoami = to know the user
- ps = list process running
- ps -ef = all process running root+other user
- ps -ef | grep root = all process with root account.
- echo $$ = give process id 
- ps -ef | grep pid = list the
- exec sleep 300 = wait for 300 ms and then run
* so last in last two commands we have replace -bash program with sleep 300.

- sleep 300
- ps -ef | grep sleep
- kill pid = terminated
- kill -9 pid = killed

- system calls are implemented using c. Linux program provides a wrapper around c.

2. FIle management
    - cat <filename.extension> = open
    - cat <filename.extension> = read
    - write = write
    - cat <filename.extension> = close
    - create = create
    - security of file
        - ownership
            - chown <username> <filename.extension> = ownership
        - permission 
            - chmod -r <filename.extension>= read
            - chmod -w <filename.extension> = write
            - chmod -e <filename.extension> = exec
    - ls -l <filename.ext> = to check ownership

3. Device management
    - It need access to :
        - CPU
        - Memory
        - FS (filesystem)
        - USB, Keyboard, Mouse
    - system calls are
        - Open
        - read
        - attach
        - deattach
    
4. Information Maintenance
    - Date&time, freespace, allocated memory, free memory, OS version, proceess id.
    - getpid() = process id
    - getppid() = parent process id

5. Communication management
    - pipe
    - shm-open
    - mmap


## OS Design Principle:

1. Policy = set of rules
    - least recently used policy
2. Mechanism = Method to fullfill the rule/policy/abstraction.

- Principles:
1. Clear segregation/separation b/w mechanism and policy
2. Common use cases.
3. Should Macro-manage and not micro-manage.

# Lecture-2 [WEEK-1]

## Process

- Defi = A program or application under execution. It is the unit of work done by the computer.
- nproc = to see number of cpu of machine.
- CPU can only run one process at a time but with the help of OS [virtulaization of CPU [abstraction] and timesharing[mechanism] and policy [scheduling process]] it can run multiple process at a time.
    - ./file.sh A & ./file.sh B & ./file.sh C
    - we are running 3 shell scrip simultaneously with input as A,B,C.

## Architecture of process

- How OS create a process
    1. Load the program and static data for initialization
    2. Allocate runtime stack eg localvariable,fn-parameters and returns.
    3. Allocate heap memory to program. eg dynamically allocated variables.
    4. Task for I/O and error descriptors
    5. go to main fn of the program and transfer the control of cpu to program.
    6. now program will have access of cpu and it is converted to process.

## Attributes of process

- Process table have Process Control Blocks [pcb] for each process.
- PCB stores the attribute/feature of a process. Attributes are
    - ProcessID = unique identifier of process
    - Program-counter = address of next instruction of the program
    - Process State - 
    - Priority
    - General Purpose Registers - store data or variable.
    - List of open files
    - List of open Devices - storing open I/O device

## Basic of storage Devices

- Register [fastest, store bit of data eg 1 and zero] >>> Cache >>> Main memory[RAM] >>> Electronic Disk >>> Magnetic Disk >>> Optical Disk >>> Magnetic tapes

- From Register to main memory = Primary Memory
    - cost more and size less.
    - volatile memory.
- From Electtronic disk to magnetic tapes = Secondary memory
    - size more and cost less.
    - non volatile memory.

## Process States:

- New = OS is about to pick program and convert into process.
- Ready = Picker by os and stored in main memory
- Running = CPU is allocated
- Termination = Process exit
- Wait/block = process is waiting for I/O. meanwhile cpu is assigned with new process.
- suspend/Ready = process in ready state but with no free memory and any higher priority process in the queue. copy the process from mainmemory to secondary memory
- suspend/wait = when a process is waiting for I/O and when there is no free memory and there is higher priority process in the queue. copy the process from mainmemory to secondary memory

## Process Queue:

- 
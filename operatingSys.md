# OS
- User {customer} >> Applicaton {waiter} >> Operating system {manager} >> hardware[cpu,gpu,disk,usb,etc] {chef,cupboard,counte-top}
- Used for resource management. see SS
- Provides an interface for communication between the application and hardware.  
- Hides the hardware complexity from application

## Abstraction [Hides-complexity] and Arbitration [Resource-Management]:

- Managing the resouces eg multiple apps running simultaneously 
- hiding the underlining complexity eg using copy-paste,scanner,output-hardware[soundbar],sylus.
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
    
    - Open
    - read
    - attact
    - deattach
    
4. Information Maintenance
    - Date&time, freespace, allocated memory, free memory, OS version
        proceess id.
    
    - getpid
    - getppid

5. Communication management
    - pipe
    - shm-open
    - mmap



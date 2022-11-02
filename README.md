# SSBSE-Research-2022-javascript-replication

### Contains

* Specific version of Syntest-Framework used by Syntest-JavaScript
* The Syntest-JavaScript project
	* Inside the experiments folder the shell file used to run experiments can be found
* The Dockerfile that is used to create the experimental setup
* Raw results that where used in the published statistics
* The python project to process the results into the published statistics

### Running experiments

From the base folder
* `docker build --tag="syntest/javascript:new" .`
* `cd syntest-javascript/experiments && ./run_experiments`
This will start 100 parallel runs. Ensure atleast 1 core and 8 GBs of ram available per run.
Alternatively, modify the shell file `run_experiments.sh` to decrease the number of parallel runs.

### Processing the results

From the statistics folder:
* `source venv/bin/activate` # activate the virtual environment
* `python3 main.py`
By default the raw_results folder is used to extract the results from.
If you want to process different results, please modify the main.py and extract_results.py files such that they point to the right path & experiment name.

### Rules


| **Operator Category**      | **Operator Name**                      | **Relation**     |
|----------------------------|----------------------------------------|------------------|
| Primary Expressions        | This                                   | this.L           |
|                            | Define Function                        | function L       |
|                            | Define Class                           | class L          |
|                            | Define Generator Function              | function* L      |
|                            | Pause and Resume Generation Function   | yield L          |
|                            | Delegate to another Generator Function | yield* L         |
|                            | Define Async Function                  | async function L |
|                            | Wait for Promise Resolution/Rejection  | await            |
|                            | Array initializer                      | [L]              |
|                            | Object initializer                     | {L:R}            |
|                            | Regular Expression                     | /L/              |
|                            | Grouping Operator                      | (L, R)           |
| Left-hand-side Expressions | Property Accessor                      | L.R              |
|                            | New                                    | new L()          |
|                            | Spread                                 | ...L             |
| Increment/Decrement        | PostFix Increment                      | L++              |
|                            | PostFix Decrement                      | L--              |
|                            | PreFix Increment                       | ++L              |
|                            | PreFix Decrement                       | --L              |
| Unary                      | Delete                                 | delete L         |
|                            | Void                                   | void L           |
|                            | Type Of                                | typeof L         |
|                            | Unary Plus                             | +L               |
|                            | Unary Negation                         | -L               |
|                            | Bitwise NOT                            | ~L               |
|                            | Logical NOT                            | !L               |
| Arithmetic                 | Addition                               | L+R              |
|                            | Subtraction                            | L-R              |
|                            | Division                               | L/R              |
|                            | Multiplication                         | L*R              |
|                            | Remainder                              | L%R              |
|                            | Exponentiation                         | L**R             |
| Relation                   | In                                     | L in R           |
|                            | Instance Of                            | L instanceof R   |
|                            | Less than                              | L<R              |
|                            | Greater than                           | L>R              |
|                            | Less or Equal                          | L<=R             |
|                            | Greater or Equal                       | L>=R             |
| Equality                   | Equality                               | L==R             |
|                            | Inequality                             | L!=R             |
|                            | Strict Equality                        | L===R            |
|                            | Strict Inequality                      | L!==R            |
| Bitwise Shift              | Left Shift                             | L<<R             |
|                            | Right Shift                            | L>>R             |
|                            | Unsigned Right Shift                   | L>>>R            |
| Binary Bitwise             | Bitwise AND                            | L&R              |
|                            | Bitwise OR                             | L\|R             |
|                            | Bitwise XOR                            | L^R              |
| Binary Logical             | Logical AND                            | L&&R             |
|                            | Logical OR                             | L\|\|R           |
|                            | Nullish Coalescing                     | L??R             |
| Ternary                    | Conditional                            | C?L:R            |
| Optional Chaining          | Optional Chaining                      | L?.R             |
| Assignment                 | Assignment                             | L=R              |
|                            | Multiplication Assignment              | L*=R             |
|                            | Exponentiation Assignment              | L**=R            |
|                            | Division Assignment                    | L/=R             |
|                            | Remainder Assignment                   | L%=R             |
|                            | Addition Assignment                    | L+=R             |
|                            | Subtraction Assignment                 | L-=R             |
|                            | Left Shift Assignment                  | L<<=R            |
|                            | Right Shift Assignment                 | L>>=R            |
|                            | Unsigned Right Shift Assignment        | L>>>=R           |
|                            | Bitwise AND Assignment                 | L&=R             |
|                            | Bitwise XOR Assignment                 | L^=R             |
|                            | Bitwise OR Assignment                  | L\|=R            |
|                            | Logical AND Assignment                 | L&&=R            |
|                            | Logical OR Assignment                  | L\|\|=R          |
|                            | Logical Nullish Assignment             | L??=R            |
|                            | Destructuring Assignment               | [a,b]=[1,2]      |
|                            | Destructuring Assignment               | {a,b}={a:1,b:2}  |
| Comma                      | Comma                                  | L,R              |
| Function                   | Parameter                              | L_R              |
|                            | Return                                 | L->R             |
|                            | Call                                   | L(R)             |

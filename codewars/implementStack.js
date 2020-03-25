var CustomStack = function(maxSize) {
    this.stack={}
    this.max=maxSize
    this.count=0
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.count<this.max){
        this.stack[this.count] = x
        this.count++
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(!this.count) return -1
    this.count--
    let temp = this.stack[this.count]
    delete this.stack[this.count]
    return temp
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    let max = this.count > k ? k : this.count
    for(let i=0;i<max;i++){
        this.stack[i]+=val
    }
};

Design a stack which supports the following operations.

Implement the CustomStack class:

    CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number of elements in the stack or do nothing if the stack reached the maxSize.
    void push(int x) Adds x to the top of the stack if the stack hasn't reached the maxSize.
    int pop() Pops and returns the top of stack or -1 if the stack is empty.
    void inc(int k, int val) Increments the bottom k elements of the stack by val. If there are less than k elements in the stack, just increment all the elements in the stack.

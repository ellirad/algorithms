/*
Implement an engine that processes asynchronous callbacks using JavaScript. Your task is to provide the implementation of the QueueProcessingCallback class to meet all the requirements described below.
Requirements
1. You should provide the implementation of the constructor and process methods. Do not change the names of these methods or the number of arguments they receive.
2. The constructor method should receive an optional string. The value of the string will be responsible for the order in which callbacks stored in the queue are processed. The only non-empty value it can receive is the string "LIFO" (Last In First Out). The default order of processing callbacks in the queue will be "FIFO" (First In First Out)
3. The process method receives a single asynchronous function that should be executed by following the algorithm described below.
4. If there is currently no asynchronous function being executed by the class, the received callback method should be executed immediately.
5. If there is currently only one asynchronous function being executed, the received callback method should be executed immediately as well.
6. If there are two asynchronous functions currently being executed (see
MAX CONCURRENTLY_ EXECUTING in the initial code), the callback method should be put in the queue.
7. After one of the currently executed asynchronous functions is finished:
• where there was no argument passed to the constructor. the first callback method that was pushed into the queue should be
 */

class QueueProcessingCallback {
    constructor(order = 'FIFO') {
        this.queue = [];
        this.MAX_CONCURRENTLY_EXECUTING = 2;
        this.executingCount = 0;
        this.order = order;
    }

    process(callback) {
        const executeCallback = async () => {
            try {
                this.executingCount++;
                await callback();
            } finally {
                this.executingCount--;
                if (this.queue.length > 0) {
                    const nextCallback = this.order === 'LIFO' ? this.queue.pop() : this.queue.shift();
                    executeCallback(nextCallback);
                }
            }
        };

        if (this.executingCount < this.MAX_CONCURRENTLY_EXECUTING) {
            executeCallback(callback);
        } else {
            this.queue.push(callback);
        }
    }
}

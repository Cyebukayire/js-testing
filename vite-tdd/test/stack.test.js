/* 
Jest is mostly prefered for unit testing 
Even though Jest can do E2E tests, 
Cypress is prefered for this one.*/

class Stack{
    constructor() {
        this.top = -1;
        this.items = {};
    };

    get peek() {
        return this.items[this.top];
    };

    push(value) {
        this.top +=1;
        return this.items[this.top] = value;
    } 
}


describe('My Stack', () => {
    // const stack = new Stack();
    // it.todo("Can clear the stack"); //this indicates that you have a test to implement
    let stack;

    beforeEach(() => {
        stack = new Stack();
    })

    it('is created empty', () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });


    it('can push to the top', () => {
        stack.push('Hi');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('Hi');
    });


    it.todo('can pop off');
}); 
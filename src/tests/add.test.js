const add=(a,b)=>a+b;
const generateGreeting=(name)=>`Hello${name}!`;
test('shold print Hello ',()=>{
    const result=generateGreeting('Ramesh');
  expect(result).toBe('HelloRamesh!')
})
// test('test with no name',()=>{
//     expect(generateGreeting()).toBe('Hello Anonymous!')
// })

test('should add two numbers',()=>{
    const result=add(3,4);
    if(result !==7){
        throw new Error(`you added 4 and 3.Th eresult was ${result}.Expect 7`)
        expect(result).toBe(7);
    }
})
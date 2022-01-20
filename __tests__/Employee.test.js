const Employee = require('../lib/Employee');
//organize
describe("Employees", () => {
    //Methods
    describe ("Initialization", () => {
        //Testing of object properties after constructing a new instance
        it("should build with prop x when give y", ()=> {
            const employee = new Employee('Arya', 11, 'dr.aryakris@gmail.com');

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });
    });

    describe("getName", () =>{
     it ("should get the name of the employee", ()=>{
         const employee = new Employee('Arya', 11, 'dr.aryakris@gmail.com') ;  
         expect(employee.getName()).toEqual(expect.any(String));
     })   
    });

    describe("getId", () => {
        it("should get the employee id", () => {
            const employee = new Employee('Arya', 11, 'dr.aryakris@gmail.com');
            expect(employee.getId()).toEqual(expect.any(Number));
        })  

    });

    describe("getEmail", () => {
        it("should get the email", () => {
            const employee = new Employee('Arya', 11, 'dr.aryakris@gmail.com');
            expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
        })  

    });
});
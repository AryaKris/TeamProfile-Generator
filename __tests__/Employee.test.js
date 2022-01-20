const Employee = require('../lib/Employee');
//organize
describe("Employees", () => {
    //Methods
    describe ("Initialization", () => {
        //Testing of object properties after constructing a new instance
        it("should build with prop x when give y", ()=> {
            const obj = new Employee("Manoj", "757865", "hgchg@gvhg.com");
            expect("name" in obj).toEqual(true);
        });
    });

    describe("getName", () =>{
        //Arrange
        //Create a new Employee object
        const emp1 = new Employee("Manoj","757865","hgchg@gvhg.com");

        //Act
        //Call the getName method and store the result
        const name = emp1.getName();

        //Assert
        //The result is equal to an expected values
        expect("Manoj").toEqual(name);
    });

    describe("getId", () => {
        //Arrange
        //Create a new Employee object
        const emp2 = new Employee("Arya", "121", "hgchg@gvhg.com");

        //Act
        //Call the getName method and store the result
        const id = emp2.getId();

        //Assert
        //The result is equal to an expected value
        expect("121").toEqual(id);

    });

    describe("getEmail", () => {

    });
});
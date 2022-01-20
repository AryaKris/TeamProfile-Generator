const Manager = require('../lib/Manager');

//organize

describe("Manager", () => {
    it("should create a Manager Object", () => {
        const manager = new Manager('Arya', 11, 'dr.aryakris@gmail.com', 1);

        //Assert
        expect(manager.officeNumber).toEqual(expect.any(Number));
    })
}
);

describe("getRole", () => {
    it("should get the role", () => {
        const manager = new Manager('Arya', 11, 'dr.aryakris@gmail.com');
        expect(manager.getRole()).toEqual("Manager");
    })
});
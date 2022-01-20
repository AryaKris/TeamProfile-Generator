const Intern = require('../lib/Intern');

//organize

describe("Intern", () => {
    it("should create an Engineer Object", () => {
        const intern = new Intern('Arya', 11, 'dr.aryakris@gmail.com', 'UDUB');
        expect(intern.school).toEqual(expect.any(String));
    })
}
);

describe("getSchool", () => {
    it("should get the intern's school", () => {
        const intern = new Intern('Arya', 11, 'dr.aryakris@gmail.com', 'UDUB');
        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    })
});

describe("getRole", () => {
    it("should get the role", () => {
        const intern = new Intern('Arya', 11, 'dr.aryakris@gmail.com', 'UDUB');
        expect(intern.getRole()).toEqual("Intern");
    })
});
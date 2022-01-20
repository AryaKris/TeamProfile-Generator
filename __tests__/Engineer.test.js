const Engineer = require('../lib/Engineer');

//organize

describe("Engineer" , ()=>{
    it ("should create an Engineer Object", ()=>{
        const engineer = new Engineer('Arya', 11, 'dr.aryakris@gmail.com', 'AryaKris');   
        expect(engineer.github).toEqual(expect.any(String));  
    })
}
);

describe ("getGithub", ()=>{
    it ("should get the github username", ()=> {
        const engineer = new Engineer('Arya', 11, 'dr.aryakris@gmail.com', 'AryaKris');
        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));      
    })
});

describe("getRole", () => {
    it("should get the role", () => {
        const engineer = new Engineer('Arya', 11, 'dr.aryakris@gmail.com', 'AryaKris');
        expect(engineer.getRole()).toEqual("Engineer");
    })
});
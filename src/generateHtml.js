function generateHtml(employees) {
    var allCards = "";
    employees.forEach(function (employee) {
        var lastPTag = "";
        if (employee.getRole() == 'Manager') {
            lastPTag = `<p class="card-text">${employee.officeNumber}</p>`

        } else if (employee.getRole() == 'Engineer') {
            lastPTag = `<p class="card-text">${employee.github}</p>`

        } else {
            lastPTag = `<p class="card-text">${employee.school}</p>`
        }
        var cardTemplate = (` <div class="card-header">Employee Details</div>
           <div class="card-body ">
    
                <h5 class="card-title">${employee.name}</h5>
                <p class="card-text">${employee.id}</p>
                <p class="card-text">${employee.getRole()}</p>
                <p class="card-text">${employee.email}</p>
                
                ${lastPTag}
                
        </div>`)
        allCards = allCards + cardTemplate
    });

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>TeamProfile Generator</title>
</head>

<body>
    <div class="card text-dark bg-info mb-3 " style="max-width: 18rem; ">
${allCards}
    </div>

</body>

</html>`

}
module.exports = generateHtml;
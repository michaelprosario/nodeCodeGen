let ejs = require('ejs');
let fs = require('fs');

let renderCodeForEntityCommand = require('./renderCodeForEntityCommand.json');

// create function to extract a list of properties from the renderCodeForEntityCommand
function extractProperties(renderCodeForEntityCommand) {
    let properties = renderCodeForEntityCommand.entitySchema.properties;
    let result = [];
    for (let key in properties) {
        let property = properties[key];
        result.push({
            name: key,
            type: property.type,
            format: property.format
        });
    }
    return result;
}

let templateInputData = 
{
    metaData: renderCodeForEntityCommand.metaData,
    properties: extractProperties(renderCodeForEntityCommand)
}

// console.log(templateInputData);

// load the template file 'edit-blazor-form.ejs'
let template = fs.readFileSync('edit-blazor-form.ejs', 'utf8');

// render the template with the given data
let result = ejs.render(template, templateInputData);
console.log(result);
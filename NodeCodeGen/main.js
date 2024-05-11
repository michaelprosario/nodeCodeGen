let ejs = require('ejs');
let fs = require('fs');

let renderCodeForEntityCommand = require('./renderCodeForEntityCommand.json');
const { sourceMapsEnabled } = require('process');

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

// load the template file 'edit-blazor-form.ejs'
let template = fs.readFileSync('edit-blazor-form.ejs', 'utf8');

// render the template with the given data
let result = ejs.render(template, templateInputData);

// write the result to a file a file called output.html
fs.writeFileSync('output.html', result);

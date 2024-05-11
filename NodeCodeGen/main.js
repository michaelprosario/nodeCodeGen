let ejs = require('ejs');
let fs = require('fs');

let renderCodeForEntityCommand = {
    "entityName": "TimeEntry",
    "entitySchema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "properties": {
            "Id": {
                "type": "string"
            },
            "ProjectId": {
                "type": "string"
            },
            "UserId": {
                "type": "string"
            },
            "Date": {
                "type": "string",
                "format": "date-time"
            },
            "StartTime": {
                "type": "string",
                "format": "date-time"
            },
            "EndTime": {
                "type": "string",
                "format": "date-time"
            },
            "Notes": {
                "type": "string"
            }
        },
        "required": ["Id", "ProjectId", "UserId", "Date", "StartTime", "EndTime", "Notes"]
    }
}

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

let templateInputData = {
    entityName: renderCodeForEntityCommand.entityName,
    properties: extractProperties(renderCodeForEntityCommand)
}

console.log(templateInputData);

// load the template file 'edit-blazor-form.ejs'
let template = fs.readFileSync('edit-blazor-form.ejs', 'utf8');

// render the template with the given data
let result = ejs.render(template, templateInputData);
console.log(result);
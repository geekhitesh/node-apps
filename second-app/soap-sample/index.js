const fs = require('fs');
const util = require('util');


const loadContent = (fileName) => {
    try {
        const dataBuffer = fs.readFileSync(fileName)
        return dataBuffer.toString() 
    } catch (e) {
        return []
    }

}

const nameToUpperCase = (name) => {
  return name.replace("soapenv:","")
            .replace("sf:","")
            .toLowerCase();
}

const deleteAttributes = (name) => {
    return false;
}

let sampleXMLResponse = loadContent('sample_response.xml');


var parseString = require('xml2js').parseString;

parseString(sampleXMLResponse,
            { 
                 tagNameProcessors: [nameToUpperCase],
                  attrNameProcessors: [deleteAttributes],
                // attrValueProcessors: [deleteAttributes],
                ignoreAttrs: true,
                stripPrefix: true,
                explicitArray : false,
            },
            (err,result) => {
                const records = result.envelope.body.notifications.notification;
    // console.log(util.inspect(result.envelope.body.notifications.notification, false, null));
    console.log(Array.isArray(records));
});
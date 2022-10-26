let componentList = [];

function getFlowDetails(flow) {
    for (const key in flow) {
        if (key == "_attributes") continue;
        getElementDetails(flow[key], key);    
    }
}

function getHttpRequestDetails(element) {
    componentList.push({
        type: "http:request",
        ...element._attributes
    });
}

function getHttpRequestConfigDetails(requestConfig) {
    // for (const key in requestConfig) {
        componentList.push({
            type: "http:request-config",
            ...requestConfig._attributes,
            "http:request-connection": requestConfig["http:request-connection"]._attributes
        })
    // }
}

function getElementDetails(element, key) {
    if (element.length) {
    // if (typeof element == "Array") {
        element.forEach(el => getElementDetails(el, key));
        return;
    }

    if (key == "flow") {
        return getFlowDetails(element);
    } else if (key == "http:request") {
        return getHttpRequestDetails(element);
    } else if (key == "http:request-config") {
        // debugger
        return getHttpRequestConfigDetails(element);
    }
}

let requestList = [];
for (let key in fileList) {
    // console.log(key);
    let muleObj = fileList[key]["mule"];
    for (let muleKey in muleObj) {                
        if (muleKey == "_attributes") continue;
        // console.log("\t" + muleKey);
        let detail = getElementDetails(muleObj[muleKey], muleKey);
        // console.log({detail});
        
    }
}
console.log(componentList);
componentList.filter(comp => comp.type == "http:request").forEach(compHttp => {
    compHttp["config-object"] = componentList.find(compConfig => compConfig.type == "http:request-config" && compConfig.name == compHttp["config-ref"])
    console.log(compHttp);
})
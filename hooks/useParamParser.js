import React, { useState } from 'react'

function useParamParser(query) {
    let [queryIndex, setQueryIndex] = useState(0);
    // remove values inside ()
    const a = query.replace(/ *\([^)]*\) */g, "");
    //get values before a comma
    // const b = a.replace(/,[^,]+$/, "");
    //check for line breaks
    let query_values = [];
    let line_values = [];
    let coma_values = []
    //check for strings separated by coma and push that to array
    if (a.includes(',')) {
        coma_values = a.split(",").filter(function (el) {
            return el != "";
        });
    }
    // get first substring after
    function parseString(string) {
        if (string.includes('.')) {
            var newString = string.substr(0, string.indexOf('.'));
            return newString
        }
        if (string.includes(':')) {
            var newString = string.substr(0, string.indexOf(':'));
            return newString
        }
        return string
    }
    //check for strings separated by line and push that to array
    const line = (a.match(/\n/g) || []).length;
    if (line > 0) {
        line_values = a.split("\n").filter(function (el) {
            return el != "";
        });
    }
    //construct query param
    const query_param_init = () => {
        query_values = line_values.concat(coma_values)
        if (query_values.length < 1) return parseString(a);
        return query_values[queryIndex];
    };
    const query_param = query_param_init();
    return { query_param, queryIndex, setQueryIndex, query_values }
}

export default useParamParser
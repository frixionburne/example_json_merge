const mergeAIntoB = (base, override) => {
    for (const [key, value] of Object.entries(base)) {
        if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
            if (typeof override[key] === 'undefined') {
                override[key] = value;
            } else {
                mergeAIntoB(value, override[key]);
            }
        } else {
            if (typeof override[key] === 'undefined') {
                override[key] = value;
            }
        }
    }
}

const mergeObjects = (baseObject: object, overrideObject: object) => {
    mergeAIntoB(baseObject, overrideObject);
    return overrideObject;
}

export { mergeObjects }
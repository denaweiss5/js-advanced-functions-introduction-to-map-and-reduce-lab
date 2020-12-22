// Your code here
function mapToNegativize(sourceArray){
    let x = []
    for(let i = 0; i < sourceArray.length; i++){
        x.push(sourceArray[i]*(-1))
    }
return x
}

function mapToNoChange(sourceArray){
    return sourceArray
}

function mapToDouble(sourceArray){
    let x = []
    for(let i = 0; i<sourceArray.length; i++){
        x.push(sourceArray[i]*(2))
    }
    return x
}

function mapToSquare(sourceArray){
    let x = []
    for(let i = 0; i<sourceArray.length; i++){
        x.push(sourceArray[i]**(2))
    }
    return x
}

function reduceToTotal(src, start=0){
    let total = start
    for (let i=0; i<src.length; i++){
        total += src[i]
    }
return total
}

function reduceToAllTrue(src){
    for (let i=0; i<src.length; i++){
        if (!src[i]) return false
    }
    return true
}

function reduceToAnyTrue(src){
    for (let i=0; i<src.length; i++){
        if (src[i]) return true
    }
return false
}
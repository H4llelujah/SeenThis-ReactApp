export const getPagesArray = (pageCount) => {
    let result = [];
    for (let i = 0; i < pageCount; i++){
        result.push(i+1);
    }
    return result;
}
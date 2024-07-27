/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function(path) {
    let _path = path.split("/");
    let stack = [];
    for(let i = 0; i < _path.length; i++) {
        if(_path[i] === "") {
            continue;
        } else if(_path[i] === "..") {
            if(stack.length) stack.pop();
        } else if(_path[i] === ".") {
            continue;
        } else stack.push(_path[i]);
    }
    return "/" + stack.join("/");
};

// console.log(simplifyPath("/home//"))
// console.log(simplifyPath("//home/user/Documents/../Pictures/"))
console.log(simplifyPath("/.../a/../b/c/../d/./"))
console.log(simplifyPath("/../"))
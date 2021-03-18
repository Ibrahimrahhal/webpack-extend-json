import * as path from 'path';
import * as fs from 'fs';

const resolveJSON = (_path:string, content?:string) => {
    if(!content) content = fs.readFileSync(_path, 'utf8');
    const jsonContent = JSON.parse(content);
    if(!jsonContent.extends) return content;
    if(!path.isAbsolute(jsonContent.extends)) jsonContent.extends = path.resolve(path.join(_path, "../", jsonContent.extends));
    return JSON.stringify({
        ...JSON.parse(resolveJSON(jsonContent.extends)),
        ...(jsonContent.data || {})
    });
}
const loader = function (content:string) :string {
    return resolveJSON(this.resourcePath, content);
}
export default loader;
module.exports = loader;
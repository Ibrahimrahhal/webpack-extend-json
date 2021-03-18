import * as path from 'path';
import * as fs from 'fs';
import JsonParser from './parser';
import { FileNotFound } from './error';

const resolveJSON = (_path:string, content?:string, caller?: string) => {
    _path = path.resolve(_path);
    try {
        if(!content) content = fs.readFileSync(_path, 'utf8');
    } catch {
        (new FileNotFound(_path, caller)).throw();
    }
    const jsonContent = JsonParser.parse(content, _path);
    if(!jsonContent.extends) return content;
    if(!path.isAbsolute(jsonContent.extends)) jsonContent.extends = path.resolve(path.join(_path, "../", jsonContent.extends));
    return JSON.stringify({
        ...JsonParser.parse(resolveJSON(jsonContent.extends), _path),
        ...(jsonContent.data || {})
    });
}
const loader = function (content:string) :string {
    return resolveJSON(this.resourcePath, content);
}
export default loader;
module.exports = loader;
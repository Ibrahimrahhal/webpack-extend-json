import { InvalidJSONFormat } from './error';


export default class JsonParserWrapper {
    static parse(JSONStr: string, file?: string) {
        try {
            return JSON.parse(JSONStr);
        } catch {
            (new InvalidJSONFormat(file)).throw();
        }
    }
}
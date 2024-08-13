// TODO: write your code here
export default class Validator {
    static validateUsername(str) {
        const startFinish = /^[^\d-_][A-Za-z0-9_-]*[^\d-_]$/.test(str);
        const numberRe = /\d{4,}/;
        const numberCheck = numberRe.test(str);
        return startFinish && !numberCheck ? true : false;
    }
}

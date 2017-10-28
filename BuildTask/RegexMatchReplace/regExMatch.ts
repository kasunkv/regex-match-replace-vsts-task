
export class RegExMatch {
    constructor() {}

    static MatchAndReplace(content: string, expression: string, valueToReplace: string, global: boolean = true, ignoreCase: boolean = false, multiLine: boolean = false): string {
        let regExModifier: string = '';

        if (global) { regExModifier += 'g'; }
        if (ignoreCase) { regExModifier += 'i'; }
        if (multiLine) { regExModifier += 'm'; }

        const regEx: RegExp = new RegExp(expression, regExModifier);
        return content.replace(regEx, valueToReplace);
    }
}
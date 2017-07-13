
export function HashCode(s: String): number {
    // tslint:disable-next-line:no-bitwise
    return s.split("").reduce(function (a : number, b:string):number { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
}

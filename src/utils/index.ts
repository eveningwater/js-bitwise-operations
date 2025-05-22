export const evalLike = <T>(v: string): T => new Function(`return ${v}`)();

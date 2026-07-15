export class Logger {

    static log(message: string): void {
        console.log(
            `%c[CUE]`,
            "color:#ff9800;font-weight:bold;",
            message
        );
    }

    static error(message: string): void {
        console.error(
            `%c[CUE]`,
            "color:red;font-weight:bold;",
            message
        );
    }

}
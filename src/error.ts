interface FromattableError {
    format: (any) => string;
}

abstract class CustomError implements FromattableError {
    abstract format();

    throw() {
        throw new Error(this.format());
    }
}

export class FileNotFound extends CustomError {
    file:string;
    location:string;

    constructor(file: string, location:string) {
        super();
        this.file = file;
        this.location = location;
    }

    format() {
        return `\n Error: Extended file not found "${this.file}" at "${this.location}"\n`;
    }
}

export class InvalidJSONFormat extends CustomError {
    file: string;
    constructor(file: string) {
        super();
        this.file = file;
    }

    format() {
        return `\n Error: Invalid JSON Format at "${this.file}" \n`;
    }
}
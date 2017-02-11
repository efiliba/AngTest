export class ConsoleService {
  log(message: string) {
    console.info(`%c${message}`, "color: blue;");
  }
}

import { Service } from 'egg'

export default class Home extends Service {
    public async sayHi(name: string) {
        return `hi, ${name}`;
    }
}
export interface Formater {
    '60s'?: string // 一分钟内
    '60m'?: string // 一小时内
    '1d'?: string // 当日
    '24h'?: string // 24小时内
    'yesterday'?: string // 昨天
    'bYesterday'?: string // 前天
    '1M'?: string // 当月
    '1y'?: string // 当年
    'xy'?: string // 超过当年
}

class Utils {
    public formatTime(timeStamp: number, type: string): string {
        if (this.getType(timeStamp) !== 'Number') {
            throw `Error: 时间戳格式错误。传入的时间戳：${timeStamp}`
        }
        if (String(timeStamp).length !== 10 && String(timeStamp).length !== 13) {
            throw `Error: 请传入10位或13位时间戳。传入的时间戳：${timeStamp}`
        }
        let time: any = 0
        let result = type
        if (String(timeStamp).length === 10) {
            time = new Date(timeStamp * 1000)
        } else {
            time = new Date(timeStamp)
        }
        const nowTimeStamp = new Date().getTime()
        const sendTimeStamp = time.getTime()
        const timeObj = {
            year: time.getFullYear(),
            month: time.getMonth() + 1,
            day: time.getDate(),
            hours: time.getHours(),
            minutes: time.getMinutes(),
            seconds: time.getSeconds(),
        }
        const reg = /{YYYY}|{MM}|{M}|{DD}|{D}|{hh}|{h}|{mm}|{m}|{ss}|{s}|{nm}|{nh}/g
        const timeMap = new Map()
        timeMap.set('{YYYY}', () => {result = result.replace('{YYYY}', String(timeObj.year))})
        timeMap.set('{MM}', () => {result = result.replace('{MM}', String(timeObj.month).padStart(2, '0'))})
        timeMap.set('{M}', () => {result = result.replace('{M}', String(timeObj.month))})
        timeMap.set('{DD}', () => {result = result.replace('{DD}', String(timeObj.day).padStart(2, '0'))})
        timeMap.set('{D}', () => {result = result.replace('{D}', String(timeObj.day))})
        timeMap.set('{hh}', () => {result = result.replace('{hh}', String(timeObj.hours).padStart(2, '0'))})
        timeMap.set('{h}', () => {result = result.replace('{h}', String(timeObj.hours))})
        timeMap.set('{mm}', () => {result = result.replace('{mm}', String(timeObj.minutes).padStart(2, '0'))})
        timeMap.set('{m}', () => {result = result.replace('{m}', String(timeObj.minutes))})
        timeMap.set('{ss}', () => {result = result.replace('{ss}', String(timeObj.seconds).padStart(2, '0'))})
        timeMap.set('{s}', () => {result = result.replace('{s}', String(timeObj.seconds))})
        timeMap.set('{nm}', () => {
            const timeNum = parseInt(`${(nowTimeStamp - sendTimeStamp) / 1000 / 60}`, 10)
            result = result.replace('{nm}', String(timeNum))
        })
        timeMap.set('{nh}', () => {
            const timeNum = parseInt(`${(nowTimeStamp - sendTimeStamp) / 1000 / 60 / 60}`, 10)
            result = result.replace('{nh}', String(timeNum))
        })
        let temp: RegExpExecArray|null|any[] = []
        while (temp !== null) {
            temp = reg.exec(type)
            if (temp) {
                timeMap.get(temp[0]).call()
            }
        }
        return result
    }
    public getPublishTime(timeStamp: number, formater: Formater): string {
        const now = new Date()
        const time: number|string|Date = this.changeTimeStemp(timeStamp)
        const nowTimeStamp = now.getTime()
        const sendTimeStamp = time.getTime()
        const sendTime = new Date(Number(time))
        const cur = {
            year: now.getFullYear(),
            mouth: now.getMonth() + 1,
            day: now.getDate(),
            hour: now.getHours(),
            minutes: now.getMinutes(),
        }
        const send = {
            year: sendTime.getFullYear(),
            mouth: sendTime.getMonth() + 1,
            day: sendTime.getDate(),
            hour: sendTime.getHours(),
            minutes: sendTime.getMinutes(),
        }
        const equalArr = this.compareObj(cur, send)
        let param = ''
        const formatMap = new Map()
        formatMap.set('60s', () => {
            if (nowTimeStamp - sendTimeStamp < 60 * 1000) {
                return formater['60s']
            }
        })
        formatMap.set('60m', () => {
            if (nowTimeStamp - sendTimeStamp < 60 * 60 * 1000) {
                return formater['60m']
            }
        })
        formatMap.set('24h', () => {
            if (nowTimeStamp - sendTimeStamp < 24 * 60 * 60 * 1000) {
                return formater['24h']
            }
        })
        formatMap.set('1d', () => {
            if (this.includesArr(equalArr, ['year', 'mouth', 'day'])) {
                return formater['1d']
            }
        })
        formatMap.set('yesterday', () => {
            if (this.includesArr(equalArr, ['year', 'mouth'])
                && cur.day - send.day === 1
                && formater.yesterday) {
                return formater.yesterday
            }
        })
        formatMap.set('bYesterday', () => {
            if (this.includesArr(equalArr, ['year', 'mouth'])
                && cur.day - send.day === 2
                && formater.bYesterday) {
                return formater.bYesterday
            }
        })
        formatMap.set('1M', () => {
            if (this.includesArr(equalArr, ['year', 'mouth'])) {
                return formater['1M']
            }
        })
        formatMap.set('1y', () => {
            if (this.includesArr(equalArr, ['year'])) {
                return formater['1y']
            }
        })
        formatMap.set('xy', () => {
            return formater.xy
        })

        for (const x of Object.keys(formater)) {
            if (!param) {
                param = formatMap.get(x).call()
            }
        }
        return this.formatTime(timeStamp, param)
    }
    public changeTimeStemp(timeStamp: number): Date {
        if (String(timeStamp).length === 10) {
            return new Date(timeStamp * 1000)
        } else {
            return new Date(timeStamp)
        }
    }
    public compareObj(obj1: any, obj2: any): string[] {
        const result: string[] = []
        const obj1Keys = Object.keys(obj1)
        obj1Keys.forEach((item) => {
            if (obj1[item] === obj2[item]) {
                result.push(item)
            }
        })
        return result
    }
    public includesArr(pArr: any[], cArr: any[]): boolean {
        let result = true
        cArr.forEach((c) => {
            if (!pArr.includes(c)) {
                result = false
            }
        })
        return result
    }
    public getType (val: any): string {
        return Object.prototype.toString.call(val).slice(8, -1)
    }
    public formatNum (num: number, fix: number): string {
        if (num < 9999) {
            return `${num}`
        } else {
            return `${(num / 10000).toFixed(fix)}万`
        }
    }
    public localSet(name: string, temp: any): void {
        localStorage.setItem(name, JSON.stringify(temp))
    }
    public localGet(name: string): any {
        if (localStorage.getItem(name)) {
            return JSON.parse((localStorage.getItem(name)) as any)
        } else {
            return null
        }
    }
}

export default new Utils()

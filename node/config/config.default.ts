import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1580633168284_1419';

    // add your egg config in here
    config.middleware = [
    ];

    // add your special config in here
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    };

    // config.mysql = require('/var/www/suhang/mysqlconfig.json')

    config.mysql = {
        client: {
            host: '106.13.201.201',
            port: '3306',
            user: 'root',
            password: 'suhangdev',
            database: 'blog',
        },
    }
    config.security = {
        csrf: { 
            enable: false
        },
        domainWhiteList: ['*']
    };
    config.cors = {
        origin: 'http://localhost:3000',
        credentials: true,   // 开启认证
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    };
    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    };
};
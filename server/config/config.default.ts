import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1601917004846_9140';

  // add your egg config in here
  config.middleware = [];

  config.security = {
    csrf: { 
        enable: false
    },
    domainWhiteList: ['*']
  };
  config.cors = {
      origin: 'http://127.0.0.1:8000',
      credentials: true,   // 开启认证
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.mysql = {
    client: {
      host: '182.61.146.67',
      port: '3306',
      user: 'root',
      password: 'suhangdev',
      database: 'blog',
    },
    app: true,
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};

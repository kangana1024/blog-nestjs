export const typeOrmConfig: any = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5433,
    username: 'postgres',
    password: 'admin',
    database: 'demo_blog',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
};
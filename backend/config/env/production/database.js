module.exports = ({ env }) => ({
  connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'dpg-cl4g8782650c73a50km0-a'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'sample_wjjk'),
        user: env('DATABASE_USERNAME', 'admin'),
        password: env('DATABASE_PASSWORD', '8yoES2j6eLsRsVKGYwp4VG4COWuKWQ0G'),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
});
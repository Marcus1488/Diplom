module.exports = {
  development: {
    use_env_variable: "postgres://bporwqsuawtuiz:03b528948ea61e5ea0d0c34fe469749318e2bf3ef2d8a59fb6a6ea648c3e9f60@ec2-54-247-99-159.eu-west-1.compute.amazonaws.com:5432/d9uovgpf3k33ca",
    dialect:  'postgres',
    protocol: 'postgres',
    port:     "5432",
    host:     "ec2-54-247-99-159.eu-west-1.compute.amazonaws.com",
    logging:  true,
    dialectOptions: {
      ssl: true
    },
    username: "bporwqsuawtuiz",
    password: "03b528948ea61e5ea0d0c34fe469749318e2bf3ef2d8a59fb6a6ea648c3e9f60",
    database: "d9uovgpf3k33ca"

  },
  test: {
    use_env_variable: "postgres://bporwqsuawtuiz:03b528948ea61e5ea0d0c34fe469749318e2bf3ef2d8a59fb6a6ea648c3e9f60@ec2-54-247-99-159.eu-west-1.compute.amazonaws.com:5432/d9uovgpf3k33ca",
    dialect:  'postgres',
    protocol: 'postgres',
    port:     "5432",
    host:     "ec2-54-247-99-159.eu-west-1.compute.amazonaws.com",
    logging:  true,
    dialectOptions: {
      ssl: true
    },
    username: "bporwqsuawtuiz",
    password: "03b528948ea61e5ea0d0c34fe469749318e2bf3ef2d8a59fb6a6ea648c3e9f60",
    database: "d9uovgpf3k33ca"
  },
  production: {
    use_env_variable: "postgres://bporwqsuawtuiz:03b528948ea61e5ea0d0c34fe469749318e2bf3ef2d8a59fb6a6ea648c3e9f60@ec2-54-247-99-159.eu-west-1.compute.amazonaws.com:5432/d9uovgpf3k33ca",
    dialect:  'postgres',
    protocol: 'postgres',
    port:     "5432",
    host:     "ec2-54-247-99-159.eu-west-1.compute.amazonaws.com",
    logging:  true,
    dialectOptions: {
      ssl: true
    },
    username: "bporwqsuawtuiz",
    password: "03b528948ea61e5ea0d0c34fe469749318e2bf3ef2d8a59fb6a6ea648c3e9f60",
    database: "d9uovgpf3k33ca"
  }
};

import { MikroORM } from "@mikro-orm/core";
import { Test } from "./entities/Test";

async function main() {
  const orm = await MikroORM.init({
    entities: ["./dist/entities/**/*.js"],
    entitiesTs: ["./src/entities/**/*.ts"],
    dbName: "test",
    user: "postgres",
    password: "123123",
    debug: true,
    type: "postgresql",
  });

  const test = await orm.em.findOne(Test, { id: 1 });
  console.log(test);
}

main();

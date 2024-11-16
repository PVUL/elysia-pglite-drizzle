# Elysia + Pglite + Drizzle
Tutorial: https://qiita.com/t_o_d/items/58c27ffa826296c26da5

start server:
```sh
bun dev
```

to test out api server:
```sh
curl localhost:3000/books/1
# sample response
# [{"id":1,"title":"sample1","author":"t_o_d","createdAt":"2024-11-13T05:33:50.313Z"}]
```

generate migration files:
```sh
bun db:generate
```

see migration files:
```sh
ls drizzle # goes drizzle directory
```

apply migrations to db:
```sh
bun db:push
```

run local drizzle studio:
```sh
bun db:studio
```
then head over to https://local.drizzle.studio/

run seed script:
```sh
bun db:seed
```

self generated docs via swagger:
run `bun dev` and head over to `http://localhost:3000/docs`
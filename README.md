# Elysia + Pglite + Drizzle
Tutorial: https://qiita.com/t_o_d/items/58c27ffa826296c26da5

start server:
```
bun dev
```

to test out api server:
```sh
curl localhost:3000/books/1
# sample response
# [{"id":1,"title":"sample1","author":"t_o_d","createdAt":"2024-11-13T05:33:50.313Z"}]
```

run local drizzle studio:
```
bunx drizzle-kit studio
```
then head over to https://local.drizzle.studio/

self generated docs via swagger:
```
http://localhost:3000/swagger
```

# My Encord App

This is a repository for my encord app, a project to predict image objects

## Development

Run these commands to start development

```
pnpm install
pnpm run dev
```

## Deployment

In order to deploy this repo in production, run these commands

```
pnpm install
pnpm run build
pnpm run start
```

## API Reference

#### Get General

```http
  GET /api
```

#### Post Predict

```http
  POST /api/predict
```

| Body          | Type     | Description                          |
| :------------ | :------- | :----------------------------------- |
| `mediaId`     | `string` | **Required**. media Id               |
| `title`       | `string` | **Required**. title from Modal       |
| `description` | `string` | **Required**. description from Modal |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Feedback

If you have any feedback, please reach out to us at me@gazar.dev

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

- [@ehsangazar](https://www.github.com/ehsangazar)

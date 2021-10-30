import build from './src'

const port = process.env.PORT || 8000

const app = build()

app.listen(port, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`build listening at ${address}`)
})

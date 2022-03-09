import sharp from 'sharp'

const run = async () => {
  const image = await sharp('./sharp/_input.jpg').resize({
    width: 1000,
    height: 1000,
  })

  console.log(await image.metadata())

  image.toFormat('jpeg', { quality: 80 }).toFile('./sharp/sharp-80.jpeg')
  image.toFormat('jpeg', { quality: 80, mozjpeg: true }).toFile('./sharp/sharp-80-moz.jpeg')
  image.toFormat('png', { quality: 80 }).toFile('./sharp/sharp-80.png')
  image.toFormat('webp', { quality: 80 }).toFile('./sharp/sharp-80.webp')
  image.toFormat('webp', { quality: 80, effort: 6 }).toFile('./sharp/sharp-80-e6.webp')
}

run()

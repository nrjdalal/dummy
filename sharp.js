import sharp from 'sharp'

const run = async () => {
  const image = await sharp('./sharp/beta.jpg').resize({
    width: 1920,
    height: 1080,
  })

  console.log(await image.metadata())

  image.toFormat('jpeg', { quality: 80 }).toFile('./sharp/beta-80.jpeg')
  image.toFormat('jpeg', { quality: 80, mozjpeg: true }).toFile('./sharp/beta-80-moz.jpeg')
  image.toFormat('webp', { quality: 80 }).toFile('./sharp/beta-80.webp')
  image.toFormat('webp', { quality: 80, effort: 6 }).toFile('./sharp/beta-80-e6.webp')
}

run()

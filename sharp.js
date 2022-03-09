import sharp from 'sharp'

const run = async () => {
  const image = await sharp('./sharp/alpha.jpg')

  image.toFormat('jpeg', { quality: 80 }).toFile('./sharp/sharp-80.jpeg')
  image.toFormat('jpeg', { quality: 80, mozjpeg: true }).toFile('./sharp/sharp-80-moz.jpeg')
  image.toFormat('webp', { quality: 80 }).toFile('./sharp/sharp-80.webp')
  image.toFormat('webp', { quality: 80, effort: 6 }).toFile('./sharp/sharp-80-e6.webp')
}

run()

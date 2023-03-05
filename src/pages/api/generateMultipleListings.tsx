function generateSingleListing(seed: number) {
  return {
    name: 'Cursor house ' + seed,
    location: 'Stock photo views',
    dates: 'March 15 - 20',
    price: '$' + (seed + 3),
    images: [
      'https://source.unsplash.com/random/800x800/?img=' + (seed + 1),
      'https://source.unsplash.com/random/800x800/?img=2' + (seed + 2),
      'https://source.unsplash.com/random/800x800/?img=3' + (seed + 3),
      'https://source.unsplash.com/random/800x800/?img=4' + (seed + 4),
    ],
  }
}
export function generateMultipleListings(howMany: number) {
  const listings = []
  for (let i = 0; i < howMany; i++) {
    listings.push(generateSingleListing(i))
  }
  return listings
}

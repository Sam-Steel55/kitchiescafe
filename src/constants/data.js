import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: 'N5,600',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: 'N5,900',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: 'N4,400',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: 'N3,100',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: 'N2,600',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'N2,000',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'N1,600',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: 'N1,000',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: 'N3,100',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'N2,600',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Best Fine Dining Restaurant',
    subtitle: `Recognizing Kitchies Cafe as the top destination for exceptional fine dining.`,
  },
  {
    imgUrl: images.award01,
    title: 'Gourmet Excellence Award',
    subtitle: `Highlighting Kitchies Cafe's commitment to culinary excellence and outstanding≈ gourmet experiences.`,
  },
  {
    imgUrl: images.award05,
    title: 'Outstanding Hospitality',
    subtitle: `Commending Kitchies Cafe for its exceptional customer service and warm hospitality.`,
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: `Celebrating Kitchies Cafe's recognition by renowned chefs for its culinary expertise and outstanding flavors.`,
  },
];

export default { wines, cocktails, awards };

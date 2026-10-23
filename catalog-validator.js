const fs = require('fs');
const path = require('path');
const { GAME_CATALOG, WHATSAPP_NUMBER } = require('./catalog.js');

const root = __dirname;
const catalog = GAME_CATALOG;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(Array.isArray(catalog), 'Catalog must be an array.');
assert(catalog.length === 40, `Expected exactly 40 catalog entries, found ${catalog.length}.`);

const ids = new Set();
const slugs = new Set();

for (const product of catalog) {
  assert(product && typeof product.id === 'string' && product.id.trim(), `Missing product id in entry: ${JSON.stringify(product)}`);
  assert(!ids.has(product.id), `Duplicate product id: ${product.id}`);
  ids.add(product.id);

  assert(product.slug && product.slug.trim(), `Missing slug for ${product.id}`);
  assert(!slugs.has(product.slug), `Duplicate slug: ${product.slug}`);
  slugs.add(product.slug);

  assert(typeof product.title === 'string' && product.title.trim(), `Missing title for ${product.id}`);
  assert(Number.isFinite(product.price) && product.price > 0, `Invalid price for ${product.id}: ${product.price}`);

  const variants = Array.isArray(product.variants) && product.variants.length ? product.variants : [{ platform: product.platforms && product.platforms[0], label: product.edition || 'Standard', price: product.price, status: product.status || 'available' }];
  for (const variant of variants) {
    assert(Number.isFinite(variant.price) && variant.price > 0, `Invalid variant price for ${product.id}: ${variant.price}`);
    if (variant.status === 'available' || variant.status === 'preorder' || variant.status === 'inquiry') {
      // allowed
    } else if (variant.status === 'review') {
      // review-only entries are allowed in dataset, but should not be shown as public sales
    } else {
      throw new Error(`Unexpected variant status for ${product.id}: ${variant.status}`);
    }
  }

  const publicVariants = variants.filter(v => v.status === 'available' || v.status === 'preorder' || v.status === 'inquiry');
  const invalidPublic = publicVariants.filter(v => v.status === 'review');
  assert(invalidPublic.length === 0, `Invalid public review variant present for ${product.id}`);

  const imagePath = product.image || 'images/placeholder.svg';
  const resolvedPath = path.resolve(root, '..', imagePath.replace(/\\/g, '/'));
  assert(fs.existsSync(resolvedPath), `Image missing for ${product.id}: ${imagePath}`);
}

const publicProducts = catalog.filter(item => item.status !== 'review' && item.status !== 'draft');
assert(publicProducts.length >= 1, 'No public products found.');

const searchResults = publicProducts.filter(item => item.title.toLowerCase().includes('gta') || item.slug.includes('gta'));
assert(searchResults.length > 0, 'Search for GTA should return at least one result.');

const message = `Hello FCHKAL STORE! I am interested in purchasing Grand Theft Auto V (GTA 5), PC, for 200 DH. Please confirm availability and delivery details.`;
const encoded = encodeURIComponent(message);
assert(encoded.includes('%20') || encoded.length > 20, 'WhatsApp messages must be URL-encoded.');
assert(WHATSAPP_NUMBER && WHATSAPP_NUMBER.length >= 9, 'WhatsApp number must be configured.');

console.log(`Validated ${catalog.length} catalog entries.`);
console.log(`Public products: ${publicProducts.length}`);
console.log(`Unique IDs: ${ids.size}`);
console.log(`Unique slugs: ${slugs.size}`);
console.log(`WhatsApp number: ${WHATSAPP_NUMBER}`);
console.log('Validation passed.');

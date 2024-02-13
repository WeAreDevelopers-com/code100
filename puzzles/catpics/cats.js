import { readFileSync, write, writeFile } from 'fs';

let cats = `Whiskers: A classic name for a cat with long, elegant whiskers.
Midnight: A sleek black cat with eyes that gleam like the night sky.
Luna: A graceful feline with a crescent moon-shaped marking on her forehead.
Oliver: A chubby tabby cat who loves to nap in sunny spots.
Misty: A gray cat with a mysterious aura, as if she’s always hiding secrets.
Simba: A regal orange tabby, reminiscent of the lion king himself.
Cleo: A Siamese cat with striking blue almond-shaped eyes.
Tiger: A bold and striped cat who prowls around like a mini jungle predator.
Snowball: A fluffy white cat who leaves a trail of soft paw prints.
Salem: A mischievous black cat with an affinity for witchy adventures.
Whisper: A delicate, pale-gray cat who moves silently through the house.
Jasper: A ginger cat with a playful personality and a penchant for climbing trees.
Mocha: A chocolate-brown cat with eyes like warm coffee.
Ziggy: A quirky tabby with zigzag patterns on his fur.
Pumpkin: An orange cat who brightens up any room.
Sylvester: A tuxedo cat with a dapper black-and-white coat.
Willow: A slender, graceful cat who loves to perch on windowsills.
Cinnamon: A reddish-brown cat with a sweet disposition.
Gizmo: A curious cat who investigates every nook and cranny.
Pearl: A white cat with a shimmering, pearly coat.
Whiskers: A classic name for a cat with long, elegant whiskers.
Midnight: A sleek black cat with eyes that gleam like the night sky.
Luna: A graceful feline with a crescent moon-shaped marking on her forehead.
Oliver: A chubby tabby cat who loves to nap in sunny spots.
Misty: A gray cat with a mysterious aura, as if she’s always hiding secrets.
Simba: A regal orange tabby, reminiscent of the lion king himself.
Cleo: A Siamese cat with striking blue almond-shaped eyes.
Tiger: A bold and striped cat who prowls around like a mini jungle predator.
Snowball: A fluffy white cat who leaves a trail of soft paw prints.
Salem: A mischievous black cat with an affinity for witchy adventures.
Mittens: A white cat with adorable black paws that resemble mittens.
Coco: A chocolate-brown cat with a glossy coat and bright eyes.
Oreo: A tuxedo cat with a perfect split of black and white on its face.
Pebbles: A small, gray tabby cat who loves to explore rocky terrain.
Ginger: An orange cat with a fiery personality and a fluffy tail.
Sapphire: A blue-gray cat with eyes that sparkle like precious gems.
Harley: A sleek black cat with a rebellious streak.
Daisy: A delicate white cat with a yellow flower-shaped marking on her back.
Rocky: A muscular cat with a rugged appearance, as if he’s been climbing mountains.
Hazel: A tortoiseshell cat with a mix of brown, black, and orange patches.
Leo: A confident cat with a majestic lion-like mane.
Mango: An orange tabby cat who radiates warmth and sweetness.
Cupcake: A small, round cat with a playful demeanor.
Jinx: A black cat with an air of mystery and superstition.
Willow: A long-haired cat with a flowing coat that sways like a willow tree.
Panda: A black-and-white cat with large, expressive eyes.
Biscuit: A cream-colored cat who’s as comforting as a freshly baked biscuit.
Cosmo: A cosmic-looking cat with speckled fur that resembles distant stars.
Maple: An autumnal cat with reddish-brown fur like fallen leaves.
Zara: A Siamese cat with striking blue eyes and a slender build.
Mittens: A white cat with adorable black paws that resemble mittens.
Coco: A chocolate-brown cat with a glossy coat and bright eyes.
Oreo: A tuxedo cat with a perfect split of black and white on its face.
Pebbles: A small, gray tabby cat who loves to explore rocky terrain.
Ginger: An orange cat with a fiery personality and a fluffy tail.
Sapphire: A blue-gray cat with eyes that sparkle like precious gems.
Harley: A sleek black cat with a rebellious streak.
Daisy: A delicate white cat with a yellow flower-shaped marking on her back.
Rocky: A muscular cat with a rugged appearance, as if he’s been climbing mountains.
Hazel: A tortoiseshell cat with a mix of brown, black, and orange patches.
Leo: A confident cat with a majestic lion-like mane.
Mango: An orange tabby cat who radiates warmth and sweetness.
Cupcake: A small, round cat with a playful demeanor.
Jinx: A black cat with an air of mystery and superstition.
Willow: A long-haired cat with a flowing coat that sways like a willow tree.
Panda: A black-and-white cat with large, expressive eyes.
Biscuit: A cream-colored cat who’s as comforting as a freshly baked biscuit.
Cosmo: A cosmic-looking cat with speckled fur that resembles distant stars.
Maple: An autumnal cat with reddish-brown fur like fallen leaves.
Zara: A Siamese cat with striking blue eyes and a slender build.
Finn: A playful tabby cat who loves chasing after imaginary mice.
Velvet: A black cat with fur so soft it feels like velvet to the touch.
Mochi: A small, round cat with a sweet and squishy appearance.
Cleo: An Egyptian-looking cat with regal eyes and a mysterious air.
Rusty: An orange cat with patches of darker fur, like rusted metal.
Nala: A lioness-like cat with golden fur and a strong, independent spirit.
Snickers: A caramel-colored cat who’s always up for a treat.
Ziggy: A quirky cat with zigzag patterns on its coat.
Pippin: A mischievous kitten who bounces around like a little apple seed.
Mittens: A white cat with black-tipped paws, as if wearing mittens.
Casper: A ghostly white cat who appears silently in unexpected places.
Pumpkin: An orange cat with a round, pumpkin-shaped body.
Misty: A gray cat who blends into misty mornings.
Tux: A dapper black-and-white cat who’s always ready for a formal occasion.
Salem: A sleek black cat with an air of mystery, like a witch’s familiar.
Whiskers: A classic name for a cat with long, elegant whiskers.
Midnight: A sleek black cat with eyes that gleam like the night sky.
Luna: A graceful feline with a crescent moon-shaped marking on her forehead.
Oliver: A chubby tabby cat who loves to nap in sunny spots.
Misty: A gray cat with a mysterious aura, as if she’s always hiding secrets.
Simba: A regal orange tabby, reminiscent of the lion king himself.
Cleo: A Siamese cat with striking blue almond-shaped eyes.
Tiger: A bold and striped cat who prowls around like a mini jungle predator.
Snowball: A fluffy white cat who leaves a trail of soft paw prints.
Salem: A mischievous black cat with an affinity for witchy adventures.
Whisper: A delicate, pale-gray cat who moves silently through the house.
Jasper: A ginger cat with a playful personality and a penchant for climbing trees.
Mocha: A chocolate-brown cat with eyes like warm coffee.
Ziggy: A quirky tabby with zigzag patterns on his fur.
Pumpkin: An orange cat who brightens up any room.
Sylvester: A tuxedo cat with a dapper black-and-white coat.
Willow: A slender, graceful cat who loves to perch on windowsills.
Cinnamon: A reddish-brown cat with a sweet disposition.
Gizmo: A curious cat who investigates every nook and cranny.
Pearl: A white cat with a shimmering, pearly coat.
Finn: A playful tabby cat who loves chasing after imaginary mice.
Velvet: A black cat with fur so soft it feels like velvet to the touch.
Mochi: A small, round cat with a sweet and squishy appearance.
Cleo: An Egyptian-looking cat with regal eyes and a mysterious air.
Rusty: An orange cat with patches of darker fur, like rusted metal.
Nala: A lioness-like cat with golden fur and a strong, independent spirit.
Snickers: A caramel-colored cat who’s always up for a treat.
Ziggy: A quirky cat with zigzag patterns on its coat.
Pippin: A mischievous kitten who bounces around like a little apple seed.
Mittens: A white cat with black-tipped paws, as if wearing mittens.
Casper: A ghostly white cat who appears silently in unexpected places.
Pumpkin: An orange cat with a round, pumpkin-shaped body.
Misty: A gray cat who blends into misty mornings.
Tux: A dapper black-and-white cat who’s always ready for a formal occasion.
Salem: A sleek black cat with an air of mystery, like a witch’s familiar.
Basil: A green-eyed cat with a fresh, herb-like presence.
Cocoa: A warm brown cat who loves to curl up by the fireplace.
Zara: A Siamese cat with striking blue eyes and a slender build.
Gingerbread: An orange cat with a sweet and spicy personality.
Muffin: A fluffy cat who’s as comforting as a freshly baked muffin.
Shadow: A mysterious black cat who disappears into the shadows.
Peaches: A peach-colored cat with a gentle demeanor.
Olive: A gray cat with a hint of green in her eyes.
Caramel: A cat with a caramel-colored coat that’s soft to the touch.
Binx: A mischievous cat who loves playing tricks on unsuspecting humans.`.split('\n');
let catdata = [];
function randomlargefilename() {
    let rand = Math.floor(Math.random() * 5) + 2;
    let name = '';
    while(rand--) {
        name += Math.random().toString(36).substring(7);
    }
    let types = ['jpg', 'png', 'jpeg', 'webp', 'BMP', 'gif','JPEG','JPE'];
    name +=  '.' + types[Math.floor(Math.random() * types.length)];
    return name;
}
randomlargefilename();
cats.forEach(element => {
    let width = Math.floor(Math.random() * 2000) + 100;
    let height = Math.floor(Math.random() * 2000) + 100;
    let rand = Math.random();
    if (rand > 0.2 && rand < 0.22) {
        height = width;
        console.log('x');
    }
    catdata.push({
        width: width,
        height: height,
        filename: randomlargefilename(),
        alt: element
    })
});
writeFile('catdata.json', JSON.stringify(catdata), err => {
    if (err) throw err;
    console.log('Stored in result.json');
});
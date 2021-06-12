const favouriteFood = process.env.FAVOURITE_FOOD;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log(`My favourite food is ${favouriteFood}`);
  while(true) {
    console.log('Containers rule!!');
    await sleep(5000);
  }
}

main();

## SPACING SYSTEM (px)

2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

## FONT SIZES (px)

10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

## FONT WEIGHT

300 / 500 / 700

# REDUCE (fn)

const myArr = [1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9];
const arrNoDuplicates = myArr.reduce((accumulator, currentValue) => {
if(!accumulator.includes(currentValue)) {
return [...accumulator, currentValue];
}
return accumulator;
}, []);

<!-- console.log(arrNoDuplicates) ===> [1, 2, 3, 4, 5, 6, 7, 8, 9] -->

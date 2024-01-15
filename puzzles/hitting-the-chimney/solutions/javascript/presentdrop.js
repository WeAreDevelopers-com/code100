import { readFileSync, write, writeFile } from 'fs';
const dataset = '../../coordinatesystem.json';
const drops = JSON.parse(readFileSync(dataset, 'utf8'));

drops.droppoints.forEach(c => {

    let [x ,y] = [c[0], c[1]];

    let distance = Math.floor(Math.sqrt(
        (x - drops.width / 2) ** 2 + 
        (y - drops.height / 2) ** 2
    ));

    let inside = drops.chimneyRadius - drops.chimneyWidth / 2;
    let outside = drops.chimneyRadius + drops.chimneyWidth / 2;

    if (distance > outside) {
        drops.outerPoints.push([x , y]);
    } else if (distance < inside) {
        drops.innerPoints.push([x , y]);
    } else if (distance >= inside && distance <= outside){
        drops.onChimneyPoints.push([x , y]);
    }

});

drops.inside = drops.innerPoints.length;
drops.outside = drops.outerPoints.length;
drops.chimney = drops.onChimneyPoints.length;

['width', 'height', 'droppoints','chimneyWidth','chimneyRadius'].forEach(
    k => delete drops[k]
);    

console.log((drops));

writeFile('result.json', JSON.stringify(drops), err => {
    if (err) throw err;
    console.log('Stored in result.json');
});
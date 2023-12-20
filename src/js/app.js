export default function checkPersonStrength(object) {
 let response = '';
 if(object.health > 50) {response = 'healthy'}
 else if (object.health < 15) {response = 'critical'}
 else {response = 'wounded'}
 return response;
}

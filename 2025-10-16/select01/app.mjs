import gyumolcsok from './gyumolcsok.json' with { type: 'json' };
console.log(gyumolcsok);
let rendezett_gyumolcsok = [...gyumolcsok].sort((a,b)=> a.ar - b.ar);
console.log(rendezett_gyumolcsok);
console.log("Készeleten lévő gyümölcsök:");
let keszleten_gyumolcsok = rendezett_gyumolcsok.filter(e => e.keszleten).map(gyumolcs => gyumolcs.neve);
console.log(keszleten_gyumolcsok);
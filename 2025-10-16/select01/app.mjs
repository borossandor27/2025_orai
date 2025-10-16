import gyumolcsok from './gyumolcsok.json' with { type: 'json' };
console.log(gyumolcsok);
let rendezett_gyumolcsok = [...gyumolcsok].sort((a,b)=> a.ar - b.ar);
console.log(rendezett_gyumolcsok);
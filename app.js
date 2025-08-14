// app.js
const i18n = require('./i18n.js');

console.log('--- Testing Danish translations ---');
const t_da = i18n('da');
console.log(t_da('greeting'));
console.log(t_da('greetingWithName', { name: 'Alice' }));
console.log(t_da('callStatus.incoming'));

console.log('\n--- Testing English translations ---');
const t_en = i18n('en');
console.log(t_en('greeting'));
console.log(t_en('greetingWithName', { name: 'Bob' }));
console.log(t_en('callStatus.connected'));

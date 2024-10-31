const ValidEmail = require('./EmailValid');

test('email joseph12@gmail.com => true', ()=>{
    expect(ValidEmail.isValidEmail('joseph1216@gmail.com')).toBe(true);
})

test('email 2 => false', ()=>{
    expect(ValidEmail.isValidEmail('2')).toBe(false);
})
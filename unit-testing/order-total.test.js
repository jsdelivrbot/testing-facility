const orderTotal = require('./order-total');


it('Happy case', () => 
    expect(orderTotal({
        items: [
            { 'name': 'Dragon shell', price: 40, quantity: 1 },
            { 'name': 'Dragon easter egg', price: 10, quantity: 2 }
        ]
    })).toBe(60))

it('Quantity', () => 
    expect(orderTotal({
        items: [
            { 'name': 'Dragon candy', price: 2, quantity: 3 }
        ]
    })).toBe(6))

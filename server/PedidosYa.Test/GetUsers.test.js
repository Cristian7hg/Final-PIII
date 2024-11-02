// userController.test.js

const User = require('../PedidosYa.Data/models/User/user');
jest.mock('../PedidosYa.Data/models/User/user'); // Asegúrate de que Jest está simulando el módulo completo.

const controller = require('../PedidosYa.Web/controllers/Login/userControllers');

describe('User Controller - Create', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Limpia los mocks antes de cada prueba.
    });

    test('should return an error if user already exists', async () => {
        // Simula que el usuario ya existe
        User.findOne.mockResolvedValue({ email: 'existing@example.com' });
    
        const req = { body: { email: 'existing@example.com', password: '123456' } };
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(), // Permite que status devuelva res
        };
    
        await controller.create(req, res);
    
        expect(res.status).toHaveBeenCalledWith(409); // Ajuste a 409 para el caso de conflicto
        expect(res.json).toHaveBeenCalledWith({
            success: false,
            message: 'Ya existe un usuario con este email',
        });
    });
});

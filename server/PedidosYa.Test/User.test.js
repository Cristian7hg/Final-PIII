const User = require('../PedidosYa.Data/models/User/user');
jest.mock('../PedidosYa.Data/models/User/user');
const controller = require('../PedidosYa.Web/controllers/Login/userControllers');


describe('User Controller - getAll', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should get all users', async () => {
        User.findAll.mockResolvedValue([{ id: 1, name: 'John' }]);
        
        const req = {}; // Simular la solicitud (request)
        const res = {
            json: jest.fn(), // Función simulada para json
            status: jest.fn().mockReturnThis(), // Función simulada para status
        };

        await controller.getAll(req, res); // Llamar al método getAll
        
        expect(res.status).toHaveBeenCalledWith(200); // Verificar que el estado es 200
        expect(res.json).toHaveBeenCalledWith([{ id: 1, name: 'John' }]); // Verificar que la respuesta JSON contiene el usuario
    });
});
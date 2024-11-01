const orders = require('../PedidosYa.Data/models/Orders/orders');
jest.mock('../PedidosYa.Data/models/Orders/orders');
const controller = require('../PedidosYa.Web/controllers/orders/orders_controller');


describe('Order Controller - getAll', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Prueba para getAll
    test('Deberia obtener todas las ordenes - getAll', async () => {
        orders.findAll.mockResolvedValue([{ id: 1, user_id: 1, subtotal: 50.00 }]);

        const req = {};
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };

        await controller.getAll(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([{ id: 1, user_id: 1, subtotal: 50.00 }]);
    });

    // Prueba para getById
    test('Deberia obtener una orden por ID - getById', async () => {
        const orderId = 1;
        orders.findOne.mockResolvedValue([{ id: orderId, user_id: 1, subtotal: 50.00 }]);
        
        const req = { params: { id: orderId } };
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };

        await controller.getById(req, res);
        
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([{ id: orderId, user_id: 1, subtotal: 50.00 }]);
    });

    // Prueba para create
    test('Deberia crear una nueva orden - Create', async () => {
        const newOrder = { user_id: 1, direction_id: 2, subtotal: 50.00, total: 55.00, state: 1 };
        orders.create.mockResolvedValue([{ id: 1, ...newOrder }]);
        
        const req = { body: newOrder };
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
        
        await controller.create(req, res);
        
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([{ id: 1, ...newOrder }]);
    });

    // Prueba para update
    test('Deberia actualizar una orden - Update', async () => {
        const orderId = 1;
        const updatedOrder = { user_id: 1, direction_id: 2, subtotal: 60.00, total: 66.00, state: 1 };
        orders.update.mockResolvedValue([1]);
        
        const req = { params: { id: orderId }, body: updatedOrder };
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };

        await controller.update(req, res);
        
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([1]);
    });

    // Prueba para delete
    test('Deberia eliminar una orden - Delete', async () => {
        const orderId = 1;
        orders.destroy.mockResolvedValue(1); // Sequelize retorna el número de filas eliminadas
        
        const req = { params: { id: orderId } };
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };

        await controller.delete(req, res);
        
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(1);
    });
});
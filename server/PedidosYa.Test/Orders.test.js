const orders = require('../PedidosYa.Data/models/Orders/orders');
jest.mock('../PedidosYa.Data/models/Orders/orders');
const controller = require('../PedidosYa.Web/controllers/Login/userControllers');


describe('Order Controller - getAll', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should get all orders', async () => {
        orders.findAll.mockResolvedValue([{ id: 1, total: 100 }]);

        const req = {};
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };

        await controller.getAll(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([{ id: 1, total: 100 }]);
    });
});
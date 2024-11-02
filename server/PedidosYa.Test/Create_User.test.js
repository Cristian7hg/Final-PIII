
const User = require('../PedidosYa.Data/models/User/user');
jest.mock('../PedidosYa.Data/models/User/user'); 

const controller = require('../PedidosYa.Web/controllers/Login/userControllers');

describe('User Controller - Create', () => {
    beforeEach(() => {
        jest.clearAllMocks(); 
    });

    test('should return status 201 if created successfully',async()=>{

        const req = { body: { name: 'Joseph', lastName: 'Herrera', accountType: 2, photo: 'asdasdas', country: 'Dominican Republic', 
            phone: '823232',zip: '12344',email: 'jason@gmail.com', password: '123456' }};
            
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(), // Mock del status en el response
        }; 
        await controller.create(req, res);

        expect(res.status).toHaveBeenCalledWith(201);

        expect(res.json).toHaveBeenCalledWith({
            success: true,
            message: 'registrado correctamente',
        });
        
    });

    test('should return an error if user already exists', async () => {
        // Simula que el usuario ya existe
        User.findOne.mockResolvedValue({ email: 'existing@example.com' });
    
        const req = { body: { name: 'Joseph', lastName: 'Herrera', accountType: 2, photo: 'asdasdas', country: 'Dominican Republic', 
            phone: '823232',zip: '12344',email: 'existing@example.com', password: '123456' } };
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
    
        await controller.create(req, res);
    
        expect(res.status).toHaveBeenCalledWith(409); 
        expect(res.json).toHaveBeenCalledWith({
            success: false,
            message: 'Ya existe un usuario con este email',
        });
    });
    
    test ('should return status 400 if request done improperly',async ()=>{
        const req = { body: { name: 'Joseph', lastName: 'Herrera', accountType: 2, photo: 'asdasdas', country: 'Dominican Republic', 
            phone: '823232',zip: '12344',email: 'existing@example.com', password: '' }};

        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
        await controller.create(req, res);

        expect(res.status).toHaveBeenCalledWith(400); 
        expect(res.json).toHaveBeenCalledWith({
            success: false,
            message: 'Bad request',
        });
    })
});

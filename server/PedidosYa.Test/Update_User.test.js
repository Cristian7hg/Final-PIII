
const User = require('../PedidosYa.Data/models/User/user');
jest.mock('../PedidosYa.Data/models/User/user'); 

const controller = require('../PedidosYa.Web/controllers/Login/userControllers');

describe('User Controller - Update', () => {
    beforeEach(() => {
        jest.clearAllMocks(); 
    });

    test('should return status 200 if updated successfully',async()=>{

        const req = {
            params:{id:2},
        
            body:{
                name: 'Joseph', lastName: 'Herrera', accountType: 2, photo: 'asdasdas', country: 'Dominican Republic', 
                phone: '823232',zip: '12344',email: 'jason@gmail.com', password: '123456'
            }
    };        
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(), // Mock del status en el response
        }; 

        const usuario = {name: 'John', lastName: 'Herrera', accountType: 2, photo: 'asdasdas', country: 'Dominican Republic', 
            phone: '823232',zip: '12344',email: 'jason@gmail.com', password: '123456'}

        User.update.mockResolvedValue(usuario);

        await controller.update(req, res);

        expect(res.status).toHaveBeenCalledWith(200);

        expect(res.json).toHaveBeenCalledWith(usuario);
        
    });

    test('should return status 500 if updated unsuccessfully',async()=>{

        const req = {
            params:{id:2},
        
            body:{
                name: 'Joseph', lastName: 'Herrera', accountType: 2, photo: 'asdasdas', country: 'Dominican Republic', 
                phone: '823232',zip: '12344',email: 'jason@gmail.com', password: '123456'
            }
    };        
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(), // Mock del status en el response
        }; 

        
        const mockError = new Error('Database error');
        User.update.mockRejectedValue(mockError);

        await controller.update(req, res);

        expect(res.status).toHaveBeenCalledWith(500);

        expect(res.json).toHaveBeenCalledWith({error: mockError});
        
    });
});
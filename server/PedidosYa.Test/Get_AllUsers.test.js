const User = require("../PedidosYa.Data/models/User/user");
jest.mock("../PedidosYa.Data/models/User/user");

const controller = require("../PedidosYa.Web/controllers/Login/userControllers");

describe("User Controller - GetAll", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should return status 200 if get is successful", async () => {
    const mockUsers = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ];
    User.findAll.mockResolvedValue(mockUsers);

    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await controller.getAll(req, res);

    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith(mockUsers);
  });

  test("should return status 500 if get is not successful", async () => {
    
    // Simulando un error de base de datos interno:
    const mockError = new Error('Database error');
    User.findAll.mockRejectedValue(mockError);

    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await controller.getAll(req, res);

    expect(res.status).toHaveBeenCalledWith(500);

    expect(res.json).toHaveBeenCalledWith({error: mockError});
  });
});

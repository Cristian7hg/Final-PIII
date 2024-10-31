// Importando modulos a usar
const express = require('express');
const cors = require('cors');
const sequelize = require('./PedidosYa.Data/database/conexion');

require('dotenv').config();

const app = express();
const PORT = 4090;

// Gestionando middlewares
app.use(express.json());
app.use(cors());

// Importando modelos:
require('./PedidosYa.Data/models/User/user');
require('./PedidosYa.Data/models/User/userType');

require('./PedidosYa.Data/models/Commerce/commerce');
require('./PedidosYa.Data/models/Commerce/commerceType');
require('./PedidosYa.Data/models/Commerce/commerce_category');

require('./PedidosYa.Data/models/other/favorites');

require('./PedidosYa.Data/models/Products/product');

require('./PedidosYa.Data/models/other/direction');

require('./PedidosYa.Data/models/Orders/orders');
require('./PedidosYa.Data/models/Orders/orders_details');


// Importando rutas:
const userRoutes = require('./routes/Login/userRoutes');
const commerceRoutes = require('./routes/commerce/commerceRoutes');
const commerceType = require('./routes/commerce/commerceType');
const authenticationRoutes = require('./routes/Login/authRoute');
const orders_details_routes = require('./routes/orders/orders_details_router');
const orders_routes = require('./routes/orders/orders_routes');
const directions_routes = require('./routes/other/directions_routes');
const favorites_routes = require('./routes/other/favorites_routes');
const commerce_category_routes = require('./routes/commerce/commerce_categorys_routes')
const product_routes = require('./routes/products/product_routes');
const routes_404 = require('./routes/404/404Routes');

// creando los endpoints:
app.use('/api/user',userRoutes);
app.use('/api/commerce', commerceRoutes);
app.use('/api/commerceType', commerceType);
app.use('/api/auth',authenticationRoutes);
app.use('/api/orders_details',orders_details_routes);
app.use('/api/orders', orders_routes);
app.use('/api/directions',directions_routes);
app.use('/api/favorites',favorites_routes);
app.use('/api/product', product_routes);
app.use('/api/commerce_categorys', commerce_category_routes)

// Sincronizando Sequelize:
sequelize.sync()
.then(()=>{
    console.log('Database Connection was successfully'); 
    // servidor escuchando
    app.listen(PORT,() => {
        console.log(`Server listen on port http://localhost:${PORT}`)
    });
}).catch(err =>{
    console.error('Database Connection had problems', err);
});

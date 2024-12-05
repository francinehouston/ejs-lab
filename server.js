const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json())




// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
//app.set('views', path.join(__dirname, 'views')); // Default setup



const RESTAURANT = {
  name: 'The Green Byte Bistro',
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
  phone: '555-321-9876',
  menu: [
    {
      id: 1,
      name: 'Quantum Quinoa Mushroom Burger',
      price: 13.00,
      rating: 4,
      category: 'mains',
      details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    {
      id: 2,
      name: 'Binary Berry Cheesecake',
      price: 10.11,
      rating: 3,
      category: 'desserts',
      details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    {
      id: 3,
      name: 'Recursive Rigatoni',
      price: 17.00,
      rating: 5,
      category: 'mains',
      details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    {
      id: 4,
      name: 'Pumpkin Pi Squared',
      price: 3.14,
      rating: 5,
      category: 'desserts',
      details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    {
      id: 5,
      name: 'Fibonacci String Bean Fries',
      price: 11.23,
      rating: 5,
      category: 'sides',
      details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ]
};

// Middleware to make RESTAURANT available in all views

app.use((req, res, next) => {
  res.locals.RESTAURANT = RESTAURANT;
})



// Root Path
app.get('/', (req, res) => {
  //res.send('Hello There!');
  //res.locals.restaurant = RESTAURANT;//   Send data using locals object
  res.render('home');// This renders the home.ejs template
});

// Define the menu route
app.get('/menu', (req, res) => {
  res.render('menu', { menu }); // Render the menu.ejs view
});

// category
app.get('/menu/:category', (req, res) => {
  const category = req.params.catergory;
  res.render('category', { category });
});

// Start the server
app.listen(3004, () => {
  console.log('Server is running on http://localhost:3004')

});

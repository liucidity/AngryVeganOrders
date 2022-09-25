INSERT INTO restaurant_details (id, name, phone, email, street_address,
city, province, postal_code, website)

VALUES (1, '(250) 809-7610', 'Angry Vegan', 'info@angryveganpenticton.ca', '536 Main Street', 'Penticton', 'British Columbia', 'V2A 5C7', 'https://www.angryveganpenticton.ca');


INSERT INTO categories (name)
VALUES
('Fresh Juices'),
('Smoothies'),
('Detox Shots'),
('Specialty Drinks'),
('Vegan Burgers'),
('Buddha Box'),
('Vegan Wraps'),
('Sides'),
('Salads'),
('Dessert');


INSERT INTO menu_items (name, price, picture_url, description, category_id)
VALUES ('Green Room', 10.00, 'https://images.pexels.com/photos/12018245/pexels-photo-12018245.jpeg?cs=srgb&dl=pexels-jacqueline-spotto-12018245.jpg&fm=jpg', 'cucumber, apple, pineapple, lemon, ginger, cilantro', 1),
('Bugs Bunny', 10.00, 'https://images.pexels.com/photos/1150682/pexels-photo-1150682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'carrots, apple, lemon, ginger', 1),
('Fallen And I Cant Get Up', 10.00, 'https://images.pexels.com/photos/161440/smoothie-fruit-vegetables-salad-beetroot-carrots-161440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'carrots, celery, beet, ginger, pineapple, lemon', 1),

('Latin Fiesta Burger', 11.00, 'https://images.pexels.com/photos/6546024/pexels-photo-6546024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'black beans, onion, red peppers, spices, chipotle mayo, salsa & guacamole', 5),
('Green Warrior Burger', 11.00, 'https://www.angryveganpenticton.ca/app/uploads/AngryVeganGallery25.jpg', 'white beans, spinach, parsley, basil, green peas, oats & in-house cilantro lemon-cashew dressing', 5),
('Vegetekia', 12.00, 'https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '(lentil, mushroom), cucumbers, sweet peppers, red onions, tomatoes, lettuce, cashew tzatziki', 5)

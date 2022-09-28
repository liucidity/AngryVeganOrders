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

('Berry Blend', 8.00,
'https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg?auto=compress&cs=tinysrgb&w=800',
'blackberries, blueberries, raspberries', 2),
('Fruit Blend', 8.00,
'https://images.pexels.com/photos/990439/pexels-photo-990439.jpeg?auto=compress&cs=tinysrgb&w=800',
'pineapple, peaches, grapes, strawberries', 2),
('Strawberry Banana', 8.00,
'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=800',
'blend with almond and coconut milk', 2),
('Piña Colada', 8.00,
'https://images.pexels.com/photos/1368043/pexels-photo-1368043.jpeg?auto=compress&cs=tinysrgb&w=800',
'hunks of frozen pineapple, shredded coconut, coconut milk', 2),

('Detox Shot', 2.00,
'https://images.pexels.com/photos/4195612/pexels-photo-4195612.jpeg?auto=compress&cs=tinysrgb&w=800',
'A blend of apple, lemon, and ginger', 3),

('Banana Iced Coffee', 8.00,
'https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=600',
'banana, frozen coffee cubes, coconut milk, nutmeg & cinnamon', 4),
('Popeye Lemonade', 8.00,
'https://images.pexels.com/photos/1149300/pexels-photo-1149300.jpeg?auto=compress&cs=tinysrgb&w=800',
'a handful of spinach in organic lemonade', 4),
('MargaritaVille (lime or strawberry)', 8.00,
'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=800',
'Blended with organic lemonade and a shake of salt.', 4),
('Da Beets Lemonade', 8.00,
'https://images.pexels.com/photos/11480972/pexels-photo-11480972.jpeg?auto=compress&cs=tinysrgb&w=600',
'a nice blend of beet juice & organic lemonade', 4),
('Mocha Monkey', 8.00,
'https://images.pexels.com/photos/11100423/pexels-photo-11100423.jpeg?auto=compress&cs=tinysrgb&w=600',
'Frozen banana, coffee cubes, coconut milk and cocoa', 4),
('Bullet Proof Coffee Latte', 8.00,
'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
'fresh brewed coffee, coconut oil, nutmeg & cinnamon', 4),

('Latin Fiesta Burger', 11.00, 'https://images.pexels.com/photos/6546024/pexels-photo-6546024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'black beans, onion, red peppers, spices, chipotle mayo, salsa & guacamole', 5),
('Green Warrior Burger', 11.00, 'https://www.angryveganpenticton.ca/app/uploads/AngryVeganGallery25.jpg', 'white beans, spinach, parsley, basil, green peas, oats & in-house cilantro lemon-cashew dressing', 5),
('Vegetekia', 12.00,
'https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
'(lentil, mushroom), cucumbers, sweet peppers, red onions, tomatoes, lettuce, cashew tzatziki', 5),

('BBQ Lentil', 14.00,
'https://images.pexels.com/photos/6120511/pexels-photo-6120511.jpeg?auto=compress&cs=tinysrgb&w=600',
'with carrot ginger dressing', 6),

('Spicy Chickpea', 14.00,
'https://images.pexels.com/photos/4869467/pexels-photo-4869467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
'with salsa verde & ranch', 7),

('Poutine', 10.00,
'https://www.angryveganpenticton.ca/app/uploads/poutine_Angryvegan-400x284.jpeg',
'Vegan gravy, fries & vegan cheese', 8)


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# From lesson, but don't think i need this. 
# Review.destroy_all
Product.destroy_all
User.destroy_all

@admin = User.create!(username:'courtney', email:'courtney@gmail.com', password:'hairhaven')

puts "#{User.count} users created"

Product.create!(item:'001', hanger:'wall', price:100, description:'product description', img:'https://i.imgur.com/1dgK7jy.jpg')
Product.create!(item:'002', hanger:'plant', price:100, description:'product description', img:'https://i.imgur.com/Z2UiZco.jpg')
Product.create!(item:'003', hanger:'wall', price:100, description:'product description', img:'https://i.imgur.com/NSMTjWW.jpg')
Product.create!(item:'004', hanger:'earring', price:100, description:'product description', img:'https://i.imgur.com/8GwxKMf.jpg')

puts "#{Product.count} products created"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
events = []
20.times do
  events << {
    name: Faker::Game.title,
    end_date: Faker::Date.in_date_period,
    begin_date: Faker::Date.in_date_period,
    body: Faker::Movie.title,
    price: Faker::Boolean.boolean,
    # age_limit: Faker::Number.within(range: 1..21),
    place: Faker::Nation.capital_city,
    orgranizator: Faker::Name.name,
    set_image: 'https://picsum.photos/2048'
  }
end
Event.create!(events)

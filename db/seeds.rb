# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# puts 'seeds deleted ❌❌❌'
# User.destroy_all

User.create(name: 'Christian', profile_picture: "https://www.czaudiovisual.com/img/about.jpg", username: "Christian123", password: "password")
User.create(name: 'Rob', profile_picture: "https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg", username: "Rob456", password: "password")
User.create(name: 'Alex', profile_picture: "https://the360report.com/wp-content/uploads/2020/10/jeff.jpg", username: "Alex123", password: "password")
User.create(name: 'Michael', profile_picture: "https://cdn.mos.cms.futurecdn.net/XSSP3a7JNHWxCnhKwX38y8-1200-80.jpg", username: "Michael456", password: "password")
User.create(name: 'Emma', profile_picture: "https://www.biography.com/.image/t_share/MTQzMzAxODc2MTU3MjYxMzgz/emma-watson_gettyimages-619546914jpg.jpg", username: "Emma123", password: "Emma123")


puts 'seeding done ✅✅✅'
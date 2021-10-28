
puts 'Seeds deleted ❌❌❌'
User.destroy_all
Claim.destroy_all

User.create(id: 1, name: 'Christian', profile_picture: "https://www.czaudiovisual.com/img/about.jpg", username: "christian@hello.com", password: "password")
User.create(id: 2, name: 'Rob', profile_picture: "https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg", username: "rob@hello.com", password: "password")
User.create(id: 3, name: 'Alex', profile_picture: "https://the360report.com/wp-content/uploads/2020/10/jeff.jpg", username: "alex@hello.com", password: "password")
User.create(id: 4, name: 'Michael', profile_picture: "https://cdn.mos.cms.futurecdn.net/XSSP3a7JNHWxCnhKwX38y8-1200-80.jpg", username: "michael@hello.com", password: "password")
User.create(id: 5, name: 'Emma', profile_picture: "https://www.biography.com/.image/t_share/MTQzMzAxODc2MTU3MjYxMzgz/emma-watson_gettyimages-619546914jpg.jpg", username: "emma@hello.com", password: "Emma123")


Claim.create(address: "4349 Sunrise Ave", item_name: "Roofing", description: "Roof tiles missing and broken", user_id: User.first.id)
Claim.create(address: "4350 Sunrise Ave", item_name: "Air conditioner handler", description: "Not working propertly", user_id: User.second.id)
Claim.create(address: "4355 Sunrise Ave", item_name: "Garage door", description: "Missing part and broken door", user_id: 3)
Claim.create(address: "4360 Sunrise Ave", item_name: "Living room windows", description: "Water leak problem", user_id: 4)
Claim.create(address: "4365 Sunrise Ave", item_name: "kitchen tiles", description: "Tiles broken", user_id: 5)

puts 'seeding done ✅✅✅'
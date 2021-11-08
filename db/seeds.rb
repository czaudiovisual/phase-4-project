
puts 'Seeds deleted ❌❌❌'
User.destroy_all
Claim.destroy_all

User.create(id: 1, name: 'Christian', profile_picture: "https://www.czaudiovisual.com/img/about.jpg", username: "christian@hello.com", password: "password")
User.create(id: 2, name: 'Rob', profile_picture: "https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg", username: "rob@hello.com", password: "password")
User.create(id: 3, name: 'Alex', profile_picture: "https://the360report.com/wp-content/uploads/2020/10/jeff.jpg", username: "alex@hello.com", password: "password")
User.create(id: 4, name: 'Michael', profile_picture: "https://cdn.mos.cms.futurecdn.net/XSSP3a7JNHWxCnhKwX38y8-1200-80.jpg", username: "michael@hello.com", password: "password")
User.create(id: 5, name: 'Emma', profile_picture: "https://www.biography.com/.image/t_share/MTQzMzAxODc2MTU3MjYxMzgz/emma-watson_gettyimages-619546914jpg.jpg", username: "emma@hello.com", password: "Emma123")


Claim.create(address: "4349 Sunrise Ave", item_name: "Roofing", description: "Roof tiles missing and broken", image_url: "https://dynamix-cdn.s3.amazonaws.com/findlayroofingcom/Findlay-Roofing_5-Roofing-Problems-You-Cant-Ignore2-1024x683.jpeg", user_id: 1)
Claim.create(address: "21722 Rainbow Ave", item_name: "Living Room Wall", description: "Living room wall damaged", image_url: "https://1fc4k12qfhga1etc0t3sh4o1-wpengine.netdna-ssl.com/wp-content/uploads/2015/08/damaged_wall-e1440750048269.jpg", user_id: 1)
Claim.create(address: "4350 Sunrise Ave", item_name: "Air conditioner handler", description: "Not working propertly", image_url: "https://www.dontwasteyourmoney.com/wp-content/uploads/2018/06/538774812_679e512300_o_air-conditioner.jpg", user_id: 2)
Claim.create(address: "4355 Sunrise Ave", item_name: "Garage door", description: "Missing part and broken door", image_url: "https://www.a-1garagedoors.com/sites/a-1garagedoors.com/files/00_A-1OverheadDoorSystems/blog/misaligned_Horizontal_tracks.png", user_id: 3)
Claim.create(address: "4360 Sunrise Ave", item_name: "Living room windows", description: "Water leak problem", image_url: "https://leakdefensesystem.com/wp-content/uploads/2017/12/water-damage-living-room-2.jpg", user_id: 4)
Claim.create(address: "4365 Sunrise Ave", item_name: "kitchen tiles", description: "Tiles broken", image_url: "https://st.hzcdn.com/fimgs/2282af5f00a8f30c_9553-w500-h666-b0-p0--.jpg", user_id: 5)

puts 'seeding done ✅✅✅'
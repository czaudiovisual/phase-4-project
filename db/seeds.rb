
puts 'Seeds deleted ❌❌❌'
User.destroy_all

User.create(id: 1, name: 'Christian', profile_picture: "https://www.czaudiovisual.com/img/about.jpg", username: "christian@hello.com", password: "password")
User.create(id: 2, name: 'Rob', profile_picture: "https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg", username: "rob@hello.com", password: "password")
User.create(id: 3, name: 'Alex', profile_picture: "https://the360report.com/wp-content/uploads/2020/10/jeff.jpg", username: "alex@hello.com", password: "password")
User.create(id: 4, name: 'Michael', profile_picture: "https://cdn.mos.cms.futurecdn.net/XSSP3a7JNHWxCnhKwX38y8-1200-80.jpg", username: "michael@hello.com", password: "password")
User.create(id: 5, name: 'Emma', profile_picture: "https://www.biography.com/.image/t_share/MTQzMzAxODc2MTU3MjYxMzgz/emma-watson_gettyimages-619546914jpg.jpg", username: "emma@hello.com", password: "Emma123")


puts 'seeding done ✅✅✅'
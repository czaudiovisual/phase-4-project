class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :profile_picture, default: "https://i.stack.imgur.com/l60Hf.png"
      t.string :username
      t.string :password_diggest

      t.timestamps
    end
  end
end

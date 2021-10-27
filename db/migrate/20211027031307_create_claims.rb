class CreateClaims < ActiveRecord::Migration[6.1]
  def change
    create_table :claims do |t|
      t.string :address
      t.string :item_name
      t.string :description
      t.integer :user_id

      t.timestamps
    end
  end
end

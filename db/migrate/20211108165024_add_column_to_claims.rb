class AddColumnToClaims < ActiveRecord::Migration[6.1]
  def change
    add_column :claims, :image_url, :string, default: "https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png"
  end
end

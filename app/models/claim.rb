class Claim < ApplicationRecord

    belongs_to :user

    validates_presence_of :address, :item_name, :description, :image_url
end

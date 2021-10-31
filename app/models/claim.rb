class Claim < ApplicationRecord
    validates_presence_of :address, :item_name, :description
    belongs_to :user
end

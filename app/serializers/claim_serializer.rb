class ClaimSerializer < ActiveModel::Serializer
  
  attributes :id, :address, :item_name, :description, :image_url
  # belongs_to :user
end

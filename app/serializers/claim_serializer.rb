class ClaimSerializer < ActiveModel::Serializer
  attributes :id, :address, :item_name, :description
end

class UserSerializer < ActiveModel::Serializer
  
  attributes :id, :name, :profile_picture, :username
  # has_many :claims
end

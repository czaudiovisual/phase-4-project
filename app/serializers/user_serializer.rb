class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :profile_picture, :username, :password_diggest
end

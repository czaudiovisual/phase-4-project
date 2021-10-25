class User < ApplicationRecord
    has_many :claims
    # attr_accessor :name, :username, :profile_picture, :password, :password_confirmation
    has_secure_password
end

class User < ApplicationRecord
    has_many :claims
    # attr_accessor :name, :username, :profile_picture, :password, :password_confirmation

    # validation 
    validates :name, presence: true
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true, case_sensitive: false
    

    has_secure_password
end

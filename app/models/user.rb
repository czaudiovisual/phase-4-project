class User < ApplicationRecord
    has_many :claims
    # attr_accessor :name, :username, :profile_picture, :password, :password_confirmation

    # validation 
    validates :name, presence: true, length: {minimum: 3}
    validates :username, presence: true, uniqueness: {case_sensitive: false}
    validates :password_digest, presence: true

    
    has_secure_password
end 
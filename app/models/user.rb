class User < ApplicationRecord

    has_many :claims

    # validation 
    # validates :name, presence: true
    validates :username, presence: true, uniqueness: {case_sensitive: false}
    validates :password, presence: true

    has_secure_password
end
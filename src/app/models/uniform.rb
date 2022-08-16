class Uniform < ApplicationRecord
    has_many :formation_posts, through: :post_uniforms
    has_many :post_uniforms
end

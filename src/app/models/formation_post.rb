class FormationPost < ApplicationRecord
    has_many :uniforms, through: :post_uniforms
    has_many :post_uniforms
end

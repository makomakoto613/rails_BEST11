class FormationPost < ApplicationRecord
    belongs_to :user
    def change
        create_table :pictures do |t|
        t.text  :image_url
        t.string  :remark
        t.timestamps null: false
        end
    end
end

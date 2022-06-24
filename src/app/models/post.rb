class Post < ApplicationRecord
    def change
        create_table :posts do |t|
          t.text  :image_url
          t.string :title
          t.string :category
          t.text :body
          t.timestamps null: false
        end
    end
end

class AddImageUrlToFormationPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :formation_posts, :image_url, :text
    add_column :formation_posts, :remark, :string
  end
end

class AddImageIdToFormationPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :formation_posts, :image_id, :string
  end
end

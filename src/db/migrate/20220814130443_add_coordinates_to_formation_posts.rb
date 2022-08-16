class AddCoordinatesToFormationPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :formation_posts, :coordinates, :text
  end
end

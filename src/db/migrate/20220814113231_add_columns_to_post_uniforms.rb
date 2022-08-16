class AddColumnsToPostUniforms < ActiveRecord::Migration[6.1]
  def change
    add_column :post_uniforms, :formation_post_id, :integer
    add_column :post_uniforms, :uniform_id, :integer
  end
end

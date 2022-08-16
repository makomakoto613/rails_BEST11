class AddCulumnsToUniforms < ActiveRecord::Migration[6.1]
  def change
    add_column :uniforms, :formation_post_id, :integer
    add_column :uniforms, :coordinate_x, :integer
    add_column :uniforms, :coordinate_y, :integer
  end
end
